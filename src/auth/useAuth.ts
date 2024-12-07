import { useEffect, useState } from 'react';
    import createOidcClient from 'oidc-client';

    const useAuth = () => {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const userManager = new createOidcClient.UserManager({
          authority: import.meta.env.VITE_OIDC_AUTHORITY,
          client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
          redirect_uri: `${window.location.origin}/callback`,
          response_type: 'code',
          scope: 'openid profile email'
        });

        const checkAuth = async () => {
          try {
            const user = await userManager.getUser();
            setIsAuthenticated(!!user);
          } catch (error) {
            console.error('Error checking authentication:', error);
          } finally {
            setLoading(false);
          }
        };

        checkAuth();

        return () => {
          userManager.events.removeUserLoaded(checkAuth);
          userManager.events.removeAccessTokenExpired(() => {
            userManager.signoutRedirect();
          });
        };
      }, []);

      const login = async () => {
        await new createOidcClient.UserManager({
          authority: import.meta.env.VITE_OIDC_AUTHORITY,
          client_id: import.meta.env.VITE_OIDC_CLIENT_ID,
          redirect_uri: `${window.location.origin}/callback`,
          response_type: 'code',
          scope: 'openid profile email'
        }).signinRedirect();
      };

      return { isAuthenticated, loading, login };
    };

    export default useAuth;
