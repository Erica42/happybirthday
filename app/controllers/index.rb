get '/' do
  erb :index
end

post '/' do
  if request.xhr?
    erb :_love_you, layout: false
  end
end
