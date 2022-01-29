import React from "react"
import TextField from "@mui/material/TextField";
import './register.page.scss';
import {useForm} from "react-hook-form";
import {registerUser} from "../common/api/user.api";
import {useHistory} from "react-router-dom";


const RegisterPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const history = useHistory();

    const onSubmit = async (data: any) => {
        // const res: any = await registerUser(data);
        // localStorage.setItem('token', res.token)
        history.push('/todos')
    };

    return (
        <div className='register-page'>
            <div className='register-page-container'>
                <div>Login</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-basic"
                        label="name"
                        {...register("name", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        label="email"
                        {...register("email", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        label="pass"
                        {...register("password", { required: true })}
                        variant="outlined"/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;
