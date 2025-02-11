import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from 'C:/Users/acer/Desktop/sporld web/vite-project/context/firebase.jsx';
import { useNavigate } from 'react-router-dom';

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/ohno");
    }
  }, [firebase, navigate]);

  const handelsubmit = async (e) => {
    e.preventDefault();
    alert("login a user");
    const result = await firebase.signInUserWithEmailAndPassword(email, password);
    alert("done", result);

    // Check if the logged-in user is an admin
    if (email === "lekhankt3@gmail.com" && password === "123456") {
      navigate("/home");
    } else {
      navigate("/user");
    }
  };

  const handellogin = () => {
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    const result = await firebase.siginwithgoogle();
    alert("done", result);

    // Check if the logged-in user is an admin
    if (result.user.email === "lekhankt3@gmail.com") {
      navigate("/admin-home");
    } else {
      navigate("/user-home");
    }
  };

  return (
    <div className="contasiner m-5">
      <Form onSubmit={handelsubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button onClick={handellogin} variant="primary" type="submit">
          login
        </Button>
      </Form>
      <h1>OR</h1>
      <Button onClick={handleGoogleLogin} variant="danger" type="submit">
        Google
      </Button>
    </div>
  );
}

export default Login;