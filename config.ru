if ENV['RACK_ENV'] == 'heroku'
  use Rack::Static,
    root:  'build',
    index: 'index.html',
    try: ['.html', 'index.html', '/index.html']

  map '/' do
    run Rack::File.new('build')
  end
end
