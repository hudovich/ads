import s from './Login.module.css'
import {useForm} from 'react-hook-form';
let Login = ({init, usersThank, acaunt}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        usersThank({type:'LOGIN'}, data)
    };

    return (
        <div className={s.box}>
           <div className={s.name}>{init.loginButtton}</div>
            <form className={s.box} onSubmit={handleSubmit(onSubmit)}>
                <input className={s.input}
                    placeholder={init.loginButtton}
                    {...register('login')}    
                />
                <input className={s.input}
                    placeholder='пароль' 
                    type="password"
                    {...register('pass')}   
                />
                <input className={s.button} type="submit" />
            </form>
        </div>
    )
}

export default Login