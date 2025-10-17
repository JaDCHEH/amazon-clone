import React, {useState} from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                // navigate to homepage
                navigate('/');
                console.log(auth);
            }
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                // navigate to homepage
                navigate('/');
                console.log(auth);
            }
        })
        .catch(error => alert(error.message));
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src="https://assets.aboutamazon.com/dims4/default/0dc8119/2147483647/strip/true/crop/6110x2047+0+0/resize/645x216!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F2e%2Fd7%2Fac71f1f344c39f8949f48fc89e71%2Famazon-logo-squid-ink-smile-orange.png" alt="Logo" />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login