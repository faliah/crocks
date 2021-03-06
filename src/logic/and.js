/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

const curry = require('../core/curry')
const isPredOrFunc = require('../core/isPredOrFunc')
const predOrFunc = require('../core/predOrFunc')

// and : (a -> Boolean) | Pred -> (a -> Boolean) | Pred -> a -> Boolean
function and(f, g) {
  if(!(isPredOrFunc(f) && isPredOrFunc(g))) {
    throw new TypeError(
      'and: Preds or predicate functions required for first two arguments'
    )
  }

  return x => !!(predOrFunc(f, x) && predOrFunc(g, x))
}

module.exports = curry(and)
