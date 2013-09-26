if ENV['RACK_ENV'] == 'heroku'
  use Rack::Static,
    root:  'build',
    index: 'index.html'
end
