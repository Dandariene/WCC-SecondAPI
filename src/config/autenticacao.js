const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../services/usuarios/Usuario');
const NaoEncontrado = require('../errors/NaoEncontrado');
const bcrypt = require('bcrypt');
const LoginInvalido = require('../errors/LoginInvalido');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');

function conferirUsuario(usuario) {
    if (!usuario) {
        throw new NaoEncontrado('Usuário');
    }
}
    async function conferirSenha(senha, senhaHach) {
        const senhaCorreta = await bcrypt.compare(senha, senhaHach);
        if (!senhaCorreta) {
            throw new LoginInvalido();
        }
    }

    passport.use(
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'senha',
            session: false
        }, async (email, senha, done) => {
            try {
                const usuario = new Usuario({ email: email });
                await usuario.buscarPorEmail();
                conferirUsuario(usuario);
                await conferirSenha(senha, usuario.senha);
                done(null, usuario);
            } catch (error) {
                done(error)
            }
        })


    )

    passport.use(
        new BearerStrategy(
            async(token, done) =>{
                try {
                    const payload = jwt.verify(token, 'segredo');
                    const usuario = new Usuario({id: payload.id});
                    await usuario.buscarPorid();
                    done(null, usuario)
                } catch (error) {
                    done(error)
                }
            }
        )
    )
module.exports = {
    passport: passport
}
