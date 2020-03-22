import React from 'react';
import Auth from './useAuth';

const LogIn = () => {
    const auth = Auth();
    //console.log(auth.signInWithGoogle);
    console.log(auth.user);
    return (
        <div>
            <h1>Join the Party</h1>
            {
                auth.user? <button onClick={auth.signOut} >Sign Out</button>
                : <button onClick={auth.signInWithGoogle}>Sign In with Google</button>
            }
        </div>
    );
};

export default LogIn;