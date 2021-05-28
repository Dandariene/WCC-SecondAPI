class CampoInvalido extends Error{
    constructor(campo){
        const mansagem = `O campo ${campo} está inválido`;
        super(mensagem);
        this.name = 'CampoInválido';
        this.idError= 1;
    }
}

module.exports = CampoInvalido;