!function() {
  var swatcher = require('./')

  function ok(actual, correct) {
    if (correct !== actual) {
      throw new Error(actual + ' should be ' + correct)
    }
  }

  var red = {red: 'red'}

  ok(swatcher() instanceof swatcher, true)
  ok(swatcher().assign({}) instanceof swatcher, true)

  ok(swatcher().json(), '{}')
  ok(swatcher().assign(red).json(), JSON.stringify(red))

  ok(swatcher().css(), '')
  ok(swatcher().assign(red).css(), '--red: red;')

  ok(swatcher().scss(), '')
  ok(swatcher().assign(red).scss(), '$red: red;')

  ok(swatcher().less(), '')
  ok(swatcher().assign(red).less(), '@red: red;')

  console.log('All tests passed!')
}();
