class Transformer {
  static mimeTypes () {
    return ['image/jpg']
  }

  parse (source) {
    console.log(source)

    return {}
  }

  extendNodeType ({ graphql }) {
    return {
      // custom GraphQL fields for transformed node
    }
  }
}

module.exports = Transformer
