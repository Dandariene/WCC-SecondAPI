class LoginInvalido extends Error {
    constructor(){
        const mensagem = 'e-mail ou senha inválidos';
        super()
        this.name = 'LoginInvalido';
        this.idError = 7;
    };
};

module.exports = LoginInvalido;