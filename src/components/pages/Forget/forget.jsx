import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import {toast} from 'react-toastify'
import { useState } from 'react'
import "../Forget/forget.css"
function Forget() {

    const [email, setEmail] = useState('')
    const onChange = (e) => setEmail(e.target.value)

    const onSubmit = async(e) => {
        // e.preventDefault()
        try{
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success("asdf")
        }catch(error){
            toast.error('Could not send reset email')
        }

    }
    return (
                <div className='maincontainer1'>
                    <h2 className="mainheading">forget password?</h2>
                    <p className='para'>
                        Don't worry! It happens. Please enter the<br />email address associated with your accout
                    </p>
                    <div className="inputcontainer">
                        <input type="email" id='email' className='inputfield' placeholder='Enter Email' value={email} onChange={onChange} />
                    </div>
                    <div className="buttoncontainer">
                        <button type="button" onClick={onSubmit} className='prmbutton' >SEND OTP</button>
                    </div>
                </div>
    )
}

export default Forget