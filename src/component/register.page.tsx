import React from "react"
import TextField from "@mui/material/TextField";
import './register.page.scss';
import {useForm} from "react-hook-form";
import {registerUser} from "../common/api/user.api";
import {useHistory} from "react-router-dom";


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = async (data: any) => {
        const res: any = await registerUser(data);
        localStorage.setItem('token', res.token)
        history.push('/')
    };

    const goToLoginPage = () => {
        history.push('/login')
    }


    return (
        <div className='register-page'>
            <div className='register-page-container'>
                <div>Login</div>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-basic"
                        className='input'
                        label="name"
                        {...register("name", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        className='input'
                        label="email"
                        {...register("email", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        className='input'
                        label="pass"
                        {...register("password", { required: true })}
                        variant="outlined"/>
                    <input type="submit" />
                </form>

                <div>
                    <div
                        onClick={goToLoginPage}
                        className='move-login-page'
                    >Already have account?</div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPage;
