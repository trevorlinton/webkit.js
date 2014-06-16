from boto.auth_handler import AuthHandler
from boto.auth_handler import NotReadyToAuthenticate 
import oauth2_client
import oauth2_helper

class OAuth2Auth(AuthHandler):

  capability = ['google-oauth2', 's3']

  def __init__(self, path, config, provider):
    if (provider.name == 'google'
        and config.has_option('Credentials', 'gs_oauth2_refresh_token')):

      self.oauth2_client = oauth2_helper.OAuth2ClientFromBotoConfig(config)

      self.refresh_token = oauth2_client.RefreshToken(
          self.oauth2_client,
          config.get('Credentials', 'gs_oauth2_refresh_token'))
    else:
      raise NotReadyToAuthenticate()

  def add_auth(self, http_request):
    http_request.headers['Authorization'] = \
        self.refresh_token.GetAuthorizationHeader()
