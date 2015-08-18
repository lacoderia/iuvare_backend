json.success @success
if @success
	json.set! :result do 
                json.set! :access_level do
                  json.extract! @access_level, :valid_account, :message
                  if not @access_level[:valid_account]
                    json.set! :payment_options do
                      json.array! @access_level[:payment_options] do |po|
                        json.item_name po[:item_name]
                        json.custom po[:custom]
                        json.amount po[:amount]
                        json.shipping po[:shipping]
                      end
                    end
                  end
                end
		json.extract! @user, :id, :first_name, :last_name, :email, :xango_id, :iuvare_id, :sponsor_xango_id, :placement_xango_id, :xango_rank, :active, :downline_position, :upline_id, :kit_bought                
                if Time.zone.now < User::LAUNCHING_DATE
                  json.payment_expiration User::LAUNCHING_DATE
                else
                  json.payment_expiration @user.payment_expiration ? @user.payment_expiration : (@user.created_at + User::FREE_MONTHS.months)
                end
		json.downline_count @user.downlines.size
	end
else
  json.error @user.errors.messages[:registration][0]
end
