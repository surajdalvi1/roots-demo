axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
contentstack = require 'roots-contentstack'
nunjucks     = require 'nunjucks'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    contentstack
      access_token: 'blte280687da40ee1b20314b0f7'
      api_key: 'blt8b7655dad1fd8b40'
      environment: 'test'
      content_types:
        about:
          id: 'about'
          template: 'views/about-tmpl.html'
          path: (e) -> "#{e.url}"
          write: 'about.json'
        contact:
          id: 'contact'
          template: 'views/contact-tmpl.html'
          path: (e) -> "#{e.url}"
        faq:
          id: 'faq'
          template: 'views/faq-tmpl.html'
          path: (e) -> "#{e.url}"
          write: 'faq.json'
        home:
          id: 'home'
          template: 'views/home-tmpl.html'
          path: (e) -> "#{e.url}"
          write: 'home.json'
        services:
          id: 'services'
          template: 'views/services-tmpl.html'
          path: (e) -> "#{e.url}"
          write: 'services.json'
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

  nunjucks:
    pretty: true
