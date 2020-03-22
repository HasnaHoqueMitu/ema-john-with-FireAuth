import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const[user, setUser] = useState(null);

    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle =  () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const{displayName, email, photoURL, phone} =res.user;
            const signedInUser = {name: displayName, email, photo: photoURL, phone};
            setUser(signedInUser);
            console.log(res.user);
            return res.user;
        }).catch(err=>{
            console.log(err);
            setUser(null);
            return err.message;
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            console.log(error);
          });
    }

    return {
        user,
        signInWithGoogle,
        signOut
    }
};

export default Auth;