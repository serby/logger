const createLogger = require('.')

const logger = createLogger('app', { logLevel: 'info' })
logger.trace('foo trace')
logger.debug('foo debug')
logger.info('foo info')
logger.warn('foo warn')
logger.error('foo error')
logger.fatal('foo fatal')
