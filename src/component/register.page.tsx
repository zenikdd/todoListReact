import React from "react"
import TextField from "@mui/material/TextField";
import './register.page.scss';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {useDispatch} from 'react-redux';


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        dispatch({
            type: 'REGISTER_USER',
            payload: data
        })
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
                        label="login"
                        {...register("login", { required: true })}
                        variant="outlined"/>
                    <TextField
                        id="outlined-basic"
                        className='input'
                        label="pass"
                        {...register("pass", { required: true })}
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
