/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services/AuthService';

function PrivateRouter({ child }) {
  const navigate = useNavigate();

  const ifAdmin = () => {
    if (getUser().role === 'admin') return true;
    return false;
  };
  return (
    { child }
  );
}

export default PrivateRouter;
