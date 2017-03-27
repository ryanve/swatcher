!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'swatcher', function() {

  var swatches = '_swatches'
  var methods = swatcher.prototype

  function swatcher() {
    var instance = this instanceof swatcher ? this : new swatcher
    instance[swatches] = {}
    return instance
  }

  function assign(object) {
    Object.assign(this[swatches], object)
    return this
  }

  function lookup(name) {
    var value = this[swatches][name]
    if (!value) throw new Error('unknown swatch')
    return String(value)
  }

  function object() {
    return JSON.parse(this.json())
  }

  function json() {
    return JSON.stringify(this[swatches])
  }

  function css(name, value) {
    return '--' + name + ': ' + value + ';'
  }

  function scss(name, value) {
    return '$' + name + ': ' + value + ';'
  }

  function less(name, value) {
    return '@' + name + ': ' + value + ';'
  }

  function use(mapper) {
    return function() {
      var object = this[swatches]
      return Object.keys(object).map(function(key) {
        return mapper(key, object[key])
      }).join('\n')
    }
  }

  methods.assign = assign
  methods.lookup = lookup
  methods.object = object
  methods.json = json
  methods.css = use(css)
  methods.scss = use(scss)
  methods.less = use(less)

  return swatcher
});
