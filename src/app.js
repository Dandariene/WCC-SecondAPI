const configexpress = require('./config/configExpress');
const config = require('config');
const instanciadb = require('./db');

(async () => {
    try {
        await instanciadb.sync({orce: true})

        app = configexpress()

        app.listen(config.get('api.port'), () => {
        console.log('Servidor Rodando!')
        });
    } catch (error) {
        throw error;
    };

})();


