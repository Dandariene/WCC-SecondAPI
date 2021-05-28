class campoQtdMinima extends Error{
    constructor(campo){
        const mansagem = `O campo ${campo} não possui a quantidade minima de 8 caracteres`;
        super(mensagem);
        this.name = 'CampoqtdMinima';
        this.idError = 3;
    }
}

module.exports = campoQtdMinima;