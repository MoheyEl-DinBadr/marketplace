import React, { useEffect } from 'react';
    import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
    import Login from './pages/Login';
    import SellerDashboard from './pages/SellerDashboard';
    import ItemUpload from './pages/ItemUpload';
    import Home from './pages/Home';
    import ItemDetail from './pages/ItemDetail';
    import Chat from './pages/Chat';
    import Callback from './auth/callback';
    import { useAuth } from './auth/useAuth';

    const App: React.FC = () => {
      const { isAuthenticated, loading } = useAuth();

      if (loading) return <div>Loading...</div>;

      return (
        <Router>
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
            <Route path="/callback" element={<Callback />} />
            <Route path="/seller-dashboard" element={isAuthenticated ? <SellerDashboard /> : <Navigate to="/login" />} />
            <Route path="/item-upload" element={isAuthenticated ? <ItemUpload /> : <Navigate to="/login" />} />
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/item/:id" element={isAuthenticated ? <ItemDetail /> : <Navigate to="/login" />} />
            <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />
          </Routes>
        </Router>
      );
    };

    export default App;
