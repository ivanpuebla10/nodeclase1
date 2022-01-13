const Logger = require('logplease');
const logger = Logger.create('utils');

exports.esPar = (a) => {
    if (a % 2 == 0) {
        logger.info('El numero es par')
        return true
    } else {
        logger.error('El numero no es par')
        return false}
};

