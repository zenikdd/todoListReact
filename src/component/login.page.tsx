import React from "react"
import TextField from "@mui/material/TextField";
import './login.page.scss.css';
import {useForm} from "react-hook-form";
import {loginUser} from "../common/api/user.api";


const LoginPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = async (data: any) => {
        const res = await loginUser({
            email: "muh.nurali43@gmail.com",
            password: "12345678"
        })
        console.log(res);
    }

    return (
        <div className='login-page'>
            <div className='login-page-container'>
                <div>Login</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-basic"
                        label="email"
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        {...register("exampleRequired", { required: true })}
                        label="pass"
                        variant="outlined"/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default LoginPage;
