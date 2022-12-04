import { FaGoogle } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar.jsx';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import Register from "../Register/register";
import { render } from "@testing-library/react";
import { auth } from "../../../firebase/firebase";
import { Alert } from "react-bootstrap";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import './login.css';
const Login = () => {

    const [user, setUser] = useState({});
    
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const signInWithGoogle = () => {

        console.log("heyy");
        const google_provider = new GoogleAuthProvider();
        signInWithPopup(auth, google_provider).then((result) => {
            const user = result.user;
            setUser(user);
            // <Route path="/register" element={<Register />}/>
            console.log(user.displayName);
            alert("Successfully loged in");
            if (user) navigate("/register");


        }).catch((error) => {
            console.log(error.message);

            setError(error.message);
            //  alert(error.message)
        });

    };


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginWithPassword = () => {
        console.log(email);
        console.log(password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Successfully loged in");
                if (user) navigate("/register");

            })
            .catch((error) => {
                const errorCode = error.code;
                setError(error.message);
                // alert(errorCode);
            });
    };





    const eyeoff = <FaEyeSlash color="white" />;
    const eye = <FaEye color="white" />;
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeoff);
    const handleToogle = () => {
        if (type == 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeoff);
            setType('password');
        }

    }

    return (
        
        <body>
            <Navbar/>
            <div className="maincontainer">
                <h2 className="welcometext">Welcome Back</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="inputcontainer">
                    <input type="email" className="login_input" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />

                    <div className="input_f">

                        <input className="login_input" type={type} placeholder="Enter Password" icons={icon} fun={handleToogle} onChange={(e) => { setPassword(e.target.value) }}  required />
                        <button className="btn">
                            <span onClick={handleToogle}>{icon}</span>

                        </button>
                    </div>
                    {/* <input type={type} className="login_input" placeholder="Enter Password" icons={icon} fun={handleToogle} onChange={(e) => { setPassword(e.target.value) }} /> */}
                </div>

                <div className="pass">
                    <p><a href="#"><Link to='/forget' className="fpwd">Forget password?</Link></a></p>
                </div>

                <div className="buttoncontainer">
                    <button className="styledbutton" content="Login" onClick={loginWithPassword} >Login</button>
                </div>
                <p className="line">OR</p>
                <div className="input_f">
                    <button className="scn-btn">
                        <FaGoogle color="#fff" />
                    </button>
                    <button onClick={signInWithGoogle} className="login_button" type="button" value="Sign in with GOOGLE">Sign in with GOOGLE</button>
                </div>
                <p className="link_des">Not registered yet?
                    <span className="signup"><Link to='/register'>Sign up</Link></span>
                </p>
            </div>
        </body>
    );
}



export default Login