axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
contentstack = require 'roots-contentstack'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    contentstack
      access_token: 'bltc4ae6c395b934141'
      api_key: 'blt5f80a1219c6fbe60'
      environment: 'development'
      content_types:
        products:
          id: 'product'
          template: 'views/index.jade'
          path: (e) -> "#{e.url}"
          write: 'product.json'
        footer:
          id: 'footer'
          template: 'views/index.jade'
          path: (e) -> "/"
        items:
          id: 'items'
          template: 'views/index.jade'
          path: (e) -> "#{e.url}"
          write: 'items.json'
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true
