class SessionsController < Devise::SessionsController

  def create
    @user = User.find_by_email(params[:user][:email])
    if @user
    	if @user.valid_password?(params[:user][:password])
    		sign_in @user
    		success
    	else
    		error
    	end
    else
    	error
    end
  end

  def success
  	@success = true
  	render "create.json"
  end

  def error
  	@success = false
  	@error = "El correo electrónico o la contraseña son incorrectos."
  	render "create.json", status: 500
  end
end