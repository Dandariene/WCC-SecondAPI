const configexpress = require('./config/configExpress');
const config = require('config');

app = configexpress()

app.listen(config.get('api.port'), () => {
    console.log('Servidor Rodando!')
});