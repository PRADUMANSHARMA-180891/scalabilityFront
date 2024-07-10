import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const Header = React.lazy(() => import('../layouts/Header'));
const Sidebar = React.lazy(() => import('../layouts/Sidebar'));
const Footer = React.lazy(() => import('../layouts/Footer'));

function ProtectedRoute({ isLogin }) {
    if (!isLogin) {
        return <Navigate to="/"  />;
    } else {

        return (
            <div className="wrapper">
                <Header />
                <Sidebar />
                <div className="content-wrapper">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export default ProtectedRoute