import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            {/* user ? logout : signOut */}

            {user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }

            {
                user && <div>
                    <h3>User Name: {user.displayName}</h3>
                    <h3>Email: {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;