class LocalImage {
  static mimeTypes () {
    return ['image/jpeg', 'image/png']
  }

  constructor(api, options) {
    options.assets.app.store.hooks.addNode.tap({
      name: 'LocalImage',
      before: 'TransformNodeContent'
    }, options => {
      options.internal.content = {
        ...options,
        internal: {},
        path: options.internal.origin
      }
    })
  }

  parse (source) {
    return {
      ...source,
      local: source.path
    }
  }
}

module.exports = LocalImage
