import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form"
import s from "./Chat.module.css"

let Chat = ({massage, users, usersThank, massageThank}) => {
    const {ChatID} = useParams();
    // BD
    useEffect(()=>{
        usersThank({type: 'DATA_ACAUNT'});
    },[usersThank]);
    useEffect(() => { 
        if (users !== null) {
            massageThank({type: 'SET_CHAT_ID'}, (ChatID)); 
        } 
    },[massageThank, users, ChatID]);

    // Form
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        //console.log(data);
    }

    const indexMyUser = users !== null && massage!==null ? massage.recipient.findIndex(e => e.id===users.id): null
    const indexRecipirnt = indexMyUser!==null ? indexMyUser === 1? 0 : 1 :null;
    return(
        indexMyUser !== null?
            <>
                <p>Страница чата</p>
                <div className={s.chat}>
                    {massage.massage.length !== 0?
                        massage.massage.map(e =>{
                            <p>Текст</p>
                        })
                    : <p>Собщений нет</p>
                    }
                </div>
                <div className={s.myAvatar}> 
                    {massage.recipient[indexMyUser].email}
                </div>
                <div className={s.recipient}>
                    {massage.recipient[indexRecipirnt].email}
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        placeholder="Введите сообщения"
                        {...register("new_masage", {required:true})}
                    />
                    <input type="submit" value="Отправить"/>
                </form>
            </>
        : <p>Errors</p>
    )
}

export default Chat;