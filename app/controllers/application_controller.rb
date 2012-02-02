class ApplicationController < ActionController::Base
  
  protect_from_forgery
  
  def index
    # Page Meta Data
    @meta_data = {:page_title => "Welcome", :og_image => "#", :og_title => "Welcome | This shows up in Facebook", :og_type => "website", :og_desc => "A Nice description for Facebook :)"}
  end

  def about
    # Page Meta Data
    @meta_data = {:page_title => "About", :og_image => "#", :og_title => "About | This shows up in Facebook", :og_type => "website", :og_desc => "A Nice description for Facebook :)"}
  end

  def contact
    # Page Meta Data
    @meta_data = {:page_title => "Contact", :og_image => "#", :og_title => "Contact | This shows up in Facebook", :og_type => "website", :og_desc => "A Nice description for Facebook :)"}
  end
  
end
