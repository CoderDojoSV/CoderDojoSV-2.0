class UserController < ApplicationController
	def register
		@user = User.new
	end
	
	def post_register
		@user = User.create(user_params)
		if @user.valid?
			@user.save
			redirect_to :controller => 'pages', :action => 'home'
		else
			flash[:notice] = @user.errors.full_messages
			redirect_to :controller => 'user', :action => 'register'
		end
	end
	
	def login
		if session["user_id"] != nil
			@user = User.find(session["user_id"])
			redirect_to(:controller => :user, :action => :profile)
		end
	end
	
	private
	def user_params
		params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
	end	
end