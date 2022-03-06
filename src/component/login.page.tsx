import React from "react"
import TextField from "@mui/material/TextField";
import './login.page.scss';
import {useForm} from "react-hook-form";
import {loginUser} from "../common/api/user.api";
import {useHistory} from "react-router-dom";
import {LoginDto} from "../common/models/login.dto";
import {LoginResponseDto} from "../common/models/login.response.dto";

const LoginPage = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginDto>();
    const history = useHistory();

    const onSubmit = async (data: LoginDto) => {
        const res = await loginUser(data) as LoginResponseDto;
        localStorage.setItem('token', res.token)
        window.location.href = '/';
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
                        label="username"
                        className='input'
                        {...register("username", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        label="password"
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
