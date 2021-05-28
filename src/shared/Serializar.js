
const FormatoInvalido = require('../errors/FormatoInvalido')
class Serializar{
    json(dados) {
        return JSON.stringify(dados);
    }

    transformar(dados) {
        if (this.contentType !== 'aplication/json'){
            throw new FormatoInvalido(this.contentType)
        }
        return this.contentType(dados);
    }
}

class  SerializarAgendamento extends Serializar{
    constructor(contentType){
        super();
        this.contentType = contentType;
    }
}