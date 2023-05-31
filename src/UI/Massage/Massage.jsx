import { useEffect } from "react";
import { useForm } from "react-hook-form"

const Massage = ({massage, users, massageThank, usersThank}) =>{
    
    useEffect(()=>{
        usersThank({type: 'DATA_ACAUNT'});
    },[usersThank])

    useEffect(() => { 
        if (users !== null) {
            massageThank({type: 'SET_CHAT'}, users.id); 
        } 
    },[massageThank, users]);

    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        //console.log(data);
    }
    return(
        massage !== null ?
        <div>
            {massage.map((e) =>{
                const elemArr = e.recipient.findIndex(item => item.id === users.id)
                const elemArrToo = elemArr?0:1;
                return(
                    <div key={e.id}>
                        <p>Мой Акаунт</p>
                        <p>E-mail: {e.recipient[elemArr].email}</p>
                        {e.massage.length === 0 ? 
                            <div>Сообщений нет</div> 
                        : 
                            <div>{e.massage}</div>
                        }
                        <p>Получетель</p>
                        <p>E-mail: {e.recipient[elemArrToo].email}</p>
                    </div>
                )
            })}
            <div className="massage">
                сообщения
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    placeholder="Введите сообщения"
                    {...register("new_masage", {required:true})}
                />
                <input type="submit" value="Отправить"/>
            </form>
        </div>
        : null 
    )
}

export default Massage