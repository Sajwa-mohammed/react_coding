import React,{useState} from "react";

const RegistrationFrom=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const[phone,setPhone]=useState("")
    const[emailError,setEmailError]=useState("")
    const[passwordError,setPasswordError]=useState("")
    const[confirmpasswordError,setConfirmPasswordError]=useState("")
    const[phoneError,setPhoneError]=useState("")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{6,}$/;

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!emailRegex.test(email)){
            setEmailError("Invalid Email")
        }

        if(!passwordRegex.test(password)){
            setPasswordError("Min 6 characters required")
        }
        if(password!== confirmpassword){
            setConfirmPasswordError("Password does not match")
        }
        if(phone.length!== 10){
            setPhoneError("Phone number must be 10 digits")
        }

        if(email && emailRegex.test(email) && password && 
        passwordRegex.test(password) && confirmpassword && phone && password === confirmpassword
     ){
        setEmailError("")
        setPasswordError("")
        setPhoneError("")
        setConfirmPasswordError("")
        alert("Registration sucessful")
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
        setConfirmPassword("")
     }
        
    }
    return(
      

      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"8px", maxWidth:"300px"}}>
   <label htmlFor="name">Name * </label>
        <input
        id="name"
        required
        value={name}
        placeholder="Enter name"
        onChange={(e)=>setName(e.target.value)}
        />
         
        <label>Email</label>
            <input
                value={email}
                placeholder="Enter username"
                onChange={(e)=>setEmail(e.target.value)}
            />
             {emailError && <p>{emailError}</p>}
            <label>Password</label>
            <input
                value={password}
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
            />
             {passwordError && <p>{passwordError}</p>}
              <label> Confirm Password</label>
            <input
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
            />
             {confirmpasswordError && <p>{confirmpasswordError}</p>}
             <label>Phone Number</label>
            <input
            type="number"
                value={phone}
                placeholder="Enter your phone Number"
                onChange={(e)=>setPhone(e.target.value)}
            />
            {phoneError && <p>{phoneError}</p>}
            <button>Register</button>
       </form>
        
    )

}
export default RegistrationFrom