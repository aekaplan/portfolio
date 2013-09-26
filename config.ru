if ENV['RACK_ENV'] == 'heroku'
  use Rack::Static,
    root:  'build',
    index: 'index.html'

  map '/' do
    run Rack::File.new('build')
  end

  map '/case-studies' do
    run Rack::File.new('build/case-studies')
  end

  map '/files' do
    run Rack::File.new('build/files')
  end
end
