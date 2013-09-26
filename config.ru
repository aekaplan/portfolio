if ENV['RACK_ENV'] == 'heroku'
  require 'rack/contrib/try_static'
  use Rack::TryStatic,
    root: 'build',
    try:  ['.html', 'index.html', '/index.html'],
    urls: %w[/]

  map '/' do
    run Rack::File.new('build')
  end
end
