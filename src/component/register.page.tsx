import React from "react"
import TextField from "@mui/material/TextField";
import './register.page.scss';


const RegisterPage = () => {
    return (
        <div className='register-page'>
            <div className='register-page-container'>
                <div>Login</div>
                <TextField
                    id="outlined-basic"
                    label="name"
                    variant="outlined"/>
                <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"/>
                <TextField
                    id="outlined-basic"
                    label="pass"
                    variant="outlined"/>
            </div>
        </div>
    )
}

export default RegisterPage;
