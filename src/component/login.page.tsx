import React from "react"
import TextField from "@mui/material/TextField";
import './login.page.scss';
import {useForm} from "react-hook-form";
import {loginUser} from "../common/api/user.api";
import {useHistory} from "react-router-dom";

const LoginPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const history = useHistory();

    const onSubmit = async (data: any) => {
        const res: any = await loginUser(data);
        localStorage.setItem('token', res.token)
        history.push('/')
    }

    const goToRegisterPage = () => {
        history.push('/register')
    }


    return (
        <div className='login-page'>
            <div className='login-page-container'>
                <div>Login</div>
                <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-basic"
                        label="email"
                        className='input'
                        {...register("email", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        label="pass"
                        className='input'
                        {...register("password", { required: true })}
                        variant="outlined"/>
                    <input type="submit" />
                </form>

                <div>
                    <div
                        onClick={goToRegisterPage}
                        className='create-account'
                    >Создать аккауннт</div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
