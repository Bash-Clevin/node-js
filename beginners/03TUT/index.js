const { format } = require('date-fns')
// same as import version 4 of uuid as uuid
const { v4: uuid } = require('uuid')

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
console.log(uuid())
