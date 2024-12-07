import React from 'react';
    import createOidcClient from 'oidc-client';

    const Callback: React.FC = () => {
      useEffect(() => {
        const userManager = new createOidcClient.UserManager({
          authority: import.meta.env.VITE_OIDC_AUTHORITY,
          client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
          redirect_uri: `${window.location.origin}/callback`,
          response_type: 'code',
          scope: 'openid profile email'
        });

        userManager.signinRedirectCallback().then(() => {
          window.history.replaceState({}, document.title, window.location.pathname);
        }).catch((error) => {
          console.error('Error handling callback:', error);
          window.history.replaceState({}, document.title, window.location.pathname);
        });
      }, []);

      return <div>Loading...</div>;
    };

    export default Callback;
