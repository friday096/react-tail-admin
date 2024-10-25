import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NotFound from '../pages/error/NotFound';

// Lazy load the components
const Home = lazy(() => import('../pages/Home'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));
const Forget = lazy(() => import('../pages/auth/Forget'));
const User = lazy(() => import('../pages/user/index'));
const Setting = lazy(() => import('../pages/setting/index'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forget" element={<Forget />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<User />} />
        <Route path="/profile/password" element={<User />} />
        <Route path="/profile/account" element={<User />} />
        <Route path="/settings" element={<Setting />} />
        
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
