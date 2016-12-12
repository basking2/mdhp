require 'sinatra'

# Simple configuration for Sinatra to serve static content.

set :root, File.dirname(__FILE__)
set :static, true
set :public_folder, File.dirname(__FILE__)
set :port, 3000

get '/' do
  redirect '/index.html'
end


