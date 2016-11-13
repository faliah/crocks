const test = require('tape')

const crocks = require('./crocks')

const applyTo = require('./combinators/applyTo')
const composeB = require('./combinators/composeB')
const constant = require('./combinators/constant')
const flip = require('./combinators/flip')
const identity = require('./combinators/identity')
const reverseApply = require('./combinators/reverseApply')
const substitution = require('./combinators/substitution')

const branch = require('./funcs/branch')
const compose = require('./funcs/compose')
const curry = require('./funcs/curry')
const inspect = require('./funcs/inspect')
const liftA2 = require('./funcs/liftA2')
const liftA3 = require('./funcs/liftA3')
const mconcat = require('./funcs/mconcat')
const mconcatMap = require('./funcs/mconcatMap')
const mreduce = require('./funcs/mreduce')
const mreduceMap = require('./funcs/mreduceMap')
const pipe = require('./funcs/pipe')

const ap = require('./pointfree/ap')
const bimap = require('./pointfree/bimap')
const chain = require('./pointfree/chain')
const coalesce = require('./pointfree/coalesce')
const concat = require('./pointfree/concat')
const contramap = require('./pointfree/contramap')
const map = require('./pointfree/map')
const promap = require('./pointfree/promap')
const sequence = require('./pointfree/sequence')
const swap = require('./pointfree/swap')
const traverse = require('./pointfree/traverse')

const cons = require('./pointfree/cons')
const either = require('./pointfree/either')
const filter = require('./pointfree/filter')
const fst = require('./pointfree/fst')
const head = require('./pointfree/head')
const log = require('./pointfree/log')
const maybe = require('./pointfree/maybe')
const merge = require('./pointfree/merge')
const mreduceLog = require('./pointfree/mreduceLog')
const option = require('./pointfree/option')
const read = require('./pointfree/read')
const reduce = require('./pointfree/reduce')
const reduceLog = require('./pointfree/reduceLog')
const run = require('./pointfree/run')
const runWith = require('./pointfree/runWith')
const snd = require('./pointfree/snd')
const tail = require('./pointfree/tail')
const value = require('./pointfree/value')

const Arrow = require('./crocks/Arrow')
const Const = require('./crocks/Const')
const Either = require('./crocks/Either')
const Identity = require('./crocks/Identity')
const IO = require('./crocks/IO')
const List = require('./crocks/List')
const Maybe = require('./crocks/Maybe')
const Pair = require('./crocks/Pair')
const Reader = require('./crocks/Reader')
const Unit = require('./crocks/Unit')
const Writer = require('./crocks/Writer')

const All = require('./monoids/All')
const Any = require('./monoids/Any')
const Assign = require('./monoids/Assign')
const Flip = require('./monoids/Flip')
const Min = require('./monoids/Min')
const Max = require('./monoids/Max')
const Prod = require('./monoids/Prod')
const Sum = require('./monoids/Sum')

test('entry', t => {
  t.equal(crocks.toString(), '[object Object]', 'is an object')

  t.equal(crocks.applyTo, applyTo, 'provides the A combinator (applyTo)')
  t.equal(crocks.composeB, composeB, 'provides the B combinator (composeB)')
  t.equal(crocks.constant, constant, 'provides the K combinator (constant)')
  t.equal(crocks.flip, flip, 'provides the C combinator (flip)')
  t.equal(crocks.identity, identity, 'provides the I combinator (identity)')
  t.equal(crocks.reverseApply, reverseApply, 'provides the T combinator (reverseApply)')
  t.equal(crocks.substitution, substitution, 'provides the S combinator (substitution)')

  t.equal(crocks.compose, compose, 'provides the compose function')
  t.equal(crocks.curry, curry, 'provides the curry function')
  t.equal(crocks.inspect, inspect, 'provides the inspect function')
  t.equal(crocks.liftA2, liftA2, 'provides the liftA2 function')
  t.equal(crocks.liftA3, liftA3, 'provides the liftA3 function')
  t.equal(crocks.mconcat, mconcat, 'provides the mconcat function')
  t.equal(crocks.mconcatMap, mconcatMap, 'provides the mconcatMap function')
  t.equal(crocks.mreduce, mreduce, 'provides the mreduce function')
  t.equal(crocks.mreduceMap, mreduceMap, 'provides the mreduceMap function')
  t.equal(crocks.pipe, pipe, 'provides the pipe function')

  t.equal(crocks.ap, ap, 'provides the ap point-free function')
  t.equal(crocks.bimap, bimap, 'provides the bimap point-free function')
  t.equal(crocks.chain, chain, 'provides the chain point-free function')
  t.equal(crocks.coalesce, coalesce, 'provides the concat point-free function')
  t.equal(crocks.concat, concat, 'provides the coalesce point-free function')
  t.equal(crocks.contramap, contramap, 'provides the contramap point-free function')
  t.equal(crocks.map, map, 'provides the map point-free function')
  t.equal(crocks.promap, promap, 'provides the promap point-free function')
  t.equal(crocks.sequence, sequence, 'provides the sequence point-free function')
  t.equal(crocks.swap, swap, 'provides the swap point-free function')
  t.equal(crocks.traverse, traverse, 'provides the traverse point-free function')

  t.equal(crocks.branch, branch, 'provides the branch point-free function')
  t.equal(crocks.cons, cons, 'provides the cons point-free function')
  t.equal(crocks.either, either, 'provides the either point-free function')
  t.equal(crocks.filter, filter, 'provides the filter point-free function')
  t.equal(crocks.fst, fst, 'provides the fst point-free function')
  t.equal(crocks.head, head, 'provides the head point-free function')
  t.equal(crocks.log, log, 'provides the log point-free function')
  t.equal(crocks.maybe, maybe, 'provides the maybe point-free function')
  t.equal(crocks.merge, merge, 'provides the merge point-free function')
  t.equal(crocks.mreduceLog, mreduceLog, 'provides the mreduceLog point-free function')
  t.equal(crocks.option, option, 'provides the option point-free function')
  t.equal(crocks.reduce, reduce, 'provides the reduce point-free function')
  t.equal(crocks.reduceLog, reduceLog, 'provides the reduceLog point-free function')
  t.equal(crocks.read, read, 'provides the read point-free function')
  t.equal(crocks.run, run, 'provides the run point-free function')
  t.equal(crocks.runWith, runWith, 'provides the runWith point-free function')
  t.equal(crocks.snd, snd, 'provides the snd point-free function')
  t.equal(crocks.tail, tail, 'provides the tail point-free function')
  t.equal(crocks.value, value, 'provides the value point-free function')

  t.equal(crocks.Arrow, Arrow, 'provides the Arrow function')
  t.equal(crocks.Const, Const, 'provides the Const function')
  t.equal(crocks.Either, Either, 'provides the Either function')
  t.equal(crocks.Identity, Identity, 'provides the Identity function')
  t.equal(crocks.IO, IO, 'provides the IO function')
  t.equal(crocks.List, List, 'provides the List function')
  t.equal(crocks.Maybe, Maybe, 'provides the Maybe function')
  t.equal(crocks.Pair, Pair, 'provides the Pair function')
  t.equal(crocks.Reader, Reader, 'provides the Reader function')
  t.equal(crocks.Unit, Unit, 'provides the Unit function')
  t.equal(crocks.Writer, Writer, 'provides the Writer function')

  t.equal(crocks.All, All, 'provides the All monoid')
  t.equal(crocks.Any, Any, 'provides the Any monoid')
  t.equal(crocks.Assign, Assign, 'provides the Assign monoid')
  t.equal(crocks.Flip, Flip, 'provides the Flip monoid')
  t.equal(crocks.Min, Min, 'provides the Min monoid')
  t.equal(crocks.Max, Max, 'provides the Max monoid')
  t.equal(crocks.Prod, Prod, 'provides the Prod monoid')
  t.equal(crocks.Sum, Sum, 'provides the Sum monoid')

  t.end()
})
