// src/components/AuthGuard.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export function AuthGuard({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}