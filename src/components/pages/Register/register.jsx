
import {FaGoogle} from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash} from "react-icons/fa";
import './register.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { Alert } from "react-bootstrap";
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'


const Register = () => {

    const navigate = useNavigate();
    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
          }
        }
        return isValid
      }
    
     
      const [email, setEmail] = useState("");
      const [error, setError] = useState("");
      const [password,setPassword] = useState("");
      const [confirmPassword,setConfirmPassword] = useState("");
    const register = (e) => {
        console.log("entered");
        console.log(password);
        console.log(email);
        console.log(confirmPassword);
        e.preventDefault()
        setError('')
        if(validatePassword()) {
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
                if (user) navigate("/");
              })
            .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      }


    

    const [user, setUser] = useState({});
    const signInWithGoogle = () => {

        console.log("heyy");
        const google_provider = new GoogleAuthProvider();
        signInWithPopup(auth, google_provider).then((result) => {
            const user = result.user;
            setUser(user);
            // <Route path="/register" element={<Register />}/>
            console.log(user.displayName);
            if (user) navigate("/");


        }).catch((error) => {
            console.log(error.message);

            setError(error.message);
            //  alert(error.message)
        });

    };



     const eyeoff = <FaEyeSlash color="white" />;
     const eye = <FaEye color="white" />;
     const [type, setType]=useState('password'); 
     const [icon, setIcon]=useState(eyeoff);
     const handleToogle=()=>{
        if(type == 'password'){
            setIcon(eye);
            setType('text');
        }
        else
        {
            setIcon(eyeoff);
            setType('password');
        }
     }
    
    return (
        <body>
            <div className="maincontainer">
                <h2 className="welcometext">SIGN IN</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="inputcontainer">
                <input type="email" className="login_input" placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
                    <input type= {type} placeholder="Create Password" className="login_input" icons={icon}  onChange={(e) => { setPassword(e.target.value) }}  />
                    <input type= {type} placeholder="Re-enter Password" className="login_input" icons={icon}  onChange={(e) => { setConfirmPassword(e.target.value) }} />
                </div>
                <div className="buttoncontainer">
                <button content= "SIGN UP"className="styledbutton"  onClick={register}>SignUp</button>
                </div>
                <p className="line">OR</p>
                <div className="input_f">
                <button className="scn-btn">
                <FaGoogle color="#fff" size={15}/>
                </button>
                <button onClick={signInWithGoogle} className="login_button" type="button" value="Sign in with GOOGLE">Sign in with GOOGLE</button>
                </div>
                <p className="link_des">Already a Member?
                <span className="signup"><Link to='/login'>Sign up</Link></span>
                </p>
            </div>
        </body>
    );
}

export default Register