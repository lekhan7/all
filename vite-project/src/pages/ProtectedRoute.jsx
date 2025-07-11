import React from 'react';
import { useFirebase } from '../context/firebase';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const firebase = useFirebase();
  const navigate = useNavigate();

  if (!firebase.islogedin) {
    navigate("/login");
    return null;
  }

  return children;
}

export default ProtectedRoute;