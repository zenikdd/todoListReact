import React from "react"
import TextField from "@mui/material/TextField";
import './login.page.scss.css';
import {useForm} from "react-hook-form";

const LoginPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className='login-page'>
            <div className='login-page-container'>
                <div>Login</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-basic"
                        label="email"
                        {...register("email", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        label="pass"
                        {...register("pass", { required: true })}
                        variant="outlined"/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
