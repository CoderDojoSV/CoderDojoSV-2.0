Coderdojosv::Application.routes.draw do
  root "pages#home"
  
  get ':controller(/:action(/:id))'
  post ':controller(/:action(/:id))'
end