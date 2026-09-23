import { useState } from "react";

const LoginForm = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passwordError,setPasswordError]=useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

    const buttonClick = (e) => {
        e.preventDefault()
        if(!email){
            setEmailError("Email is required")
        }else if(!emailRegex.test(email)){
            setEmailError("Email is invalid")
        }
        if(!password){
            setPasswordError("Password is required")
        }else if (!passwordRegex.test(password)){
            setPasswordError("Min 6 characters required")
        }
        if (
        email &&
        emailRegex.test(email) &&
        password &&
        passwordRegex.test(password)
    ) {
          setEmailError("");
    setPasswordError("");
        alert("Login successful");

        setEmail("");
        setPassword("");
       
    }
   


        
    }

    return (
        <form onSubmit={buttonClick}>
            <label>Username</label>
            <input
                value={email}
                placeholder="Enter username"
                onChange={(e)=>setEmail(e.target.value)}
            />
            {emailError && <p>{emailError}</p>}

            <label>Password</label>
            <input
                placeholder="Enter password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
              {passwordError && <p>{passwordError}</p>}

            <button>
                Login
            </button>
        </form>
    );
}

export default LoginForm;