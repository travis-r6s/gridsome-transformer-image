# gridsome-transformer-image

> Image transformer for Gridsome

## Install

```sh
yarn add gridsome-transformer-image # or
npm install gridsome-transformer-image
```

## Usage

The transformer is automatically used if installed in your project. Make sure to add the `@gridsome/source-filesystem` plugin, and configure the options to point to a directory containing your images.

`gridsome.config.js`
```js
module.exports = {
  ...
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'LocalImage',
        path: './images/**/*' // Or specify a specific filetype, like *.jpg
      }
    }
  ]
}
```

### Important Note

You _cannot_ use `Image` as your `typeName` as this is reserved by Gridsome. Instead, use something like `LocalImage`.
