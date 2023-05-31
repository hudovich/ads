import { useEffect } from "react";
import { Link } from "react-router-dom";

const Massage = ({massage, users, massageThank, usersThank}) =>{
    
    useEffect(()=>{
        usersThank({type: 'DATA_ACAUNT'});
    },[usersThank])

    useEffect(() => { 
        if (users !== null) {
            massageThank({type: 'SET_CHAT'}, users.id); 
        } 
    },[massageThank, users]);

    return(
        massage !== null ?
        <div>
            {massage.map((e) =>{
                const elemArr = e.recipient.findIndex(item => item.id === users.id)
                const elemArrToo = elemArr?0:1;
                return(
                    <Link to={`/chat/${e.id}`} key={e.id}>
                        <p>Мой Акаунт</p>
                        <p>E-mail: {e.recipient[elemArr].email}</p>
                        {e.massage.length === 0 ? 
                            <div>Сообщений нет</div> 
                        : 
                            <div>{e.massage}</div>
                        }
                        <p>Получетель</p>
                        <p>E-mail: {e.recipient[elemArrToo].email}</p>
                    </Link>
                )
            })}
        </div>
        : null 
    )
}

export default Massage