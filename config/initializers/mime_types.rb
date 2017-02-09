# Be sure to restart your server when you modify this file.

# Add new mime types for use in respond_to blocks:
# Mime::Type.register "text/richtext", :rtf
Mime::Type.register "video/mp4", :mp4
# register MIME type with Rails
Mime::Type.register "video/mp4", :m4v
Mime::Type.register "audio/mpeg", :mp3
Mime::Type.register "video/webm", :webm
# # register MIME type with MIME::Type gem
#MIME::Types.add(MIME::Type.from_array("video/mp4", %(m4v)))
#MIME::Types.add(MIME::Type.from_array("audio/mpeg", %(mp3)))
