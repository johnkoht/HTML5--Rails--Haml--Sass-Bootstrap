module ApplicationHelper
  
  # Haml implementation of Paul Irish's HTML Conditional
  def conditional_html( lang = "en", &block )
    fb_meta = "xml:lang='en' xmlns:fb='http://www.facebook.com/2008/fbml' xmlns:og='http://opengraphprotocol.org/schema/' xmlns='http://www.w3.org/1999/xhtml'"
    haml_concat Haml::Util::html_safe <<-"HTML".gsub( /^\s+/, '' )
      <!--[if lt IE 7 ]><html lang="#{lang}" class="no-js ie6" #{fb_meta}> <![endif]-->
      <!--[if IE 7 ]><html lang="#{lang}" class="no-js ie7" #{fb_meta}> <![endif]-->
      <!--[if IE 8 ]><html lang="#{lang}" class="no-js ie8" #{fb_meta}> <![endif]-->
      <!--[if IE 9 ]><html lang="#{lang}" class="no-js ie9" #{fb_meta}> <![endif]-->
      <!--[if (gte IE 9)|!(IE)]><!--> <html lang="#{lang}" class="no-js" #{fb_meta}> <!--<![endif]-->      
    HTML
    haml_concat capture( &block ) << Haml::Util::html_safe( "\n</html>" ) if block_given?
  end
  
end
