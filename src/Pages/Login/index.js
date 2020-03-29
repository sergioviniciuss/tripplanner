import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../components/Button";

const Login = () => {
  return (
    <div className="wrapper">
      <Button>
        <Link to="/destination">Login</Link>
      </Button>
    </div>
  );
};

export default Login;
