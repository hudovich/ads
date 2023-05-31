import s from './Regist.module.css'
import { useForm } from "react-hook-form";

let Regist = ({init, usersThank}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.pass === data.passCopy){
            usersThank({type:"REGISTRATION"}, data);
            reset()
            // alert('Поздравляю вы зарегистрированы')
        }else{
            alert('Пароли не совпадают')
        }
    }
    return(
        <div className={s.globalBox}>
            <form className={s.box} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.name}>{init.registrationButton}</div>
                <input className={s.input} placeholder='Ваш емаил' 
                    {...register("email", 
                    { required: true })}
                />
                <input className={s.input} placeholder='password' 
                    {...register("pass", { required: true, minLength: 5 })} 
                    type='password' 

                />
                <input className={s.input}
                    placeholder='Повторите password'
                    {...register("passCopy", { required: true, minLength: 5  })} 
                    type='password' 
                />
                {errors.email && <span>Заполните пустые полья</span>}
                {errors.pass && <span>Поле не может быть пустым и больше чем 5 символов</span>}
                {errors.passCopy && <span>Поле не может быть пустым и больше чем 5 символов</span>}
                <input className={s.button} type="submit" value='Send'/>
            </form>
        </div>
    )
}

export default Regist