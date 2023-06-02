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

    const delCat = (e) =>{
        massageThank({type: 'DEL_CHAT'}, e)
    }

    return(
        massage !== null ?
        <div>
            {massage.map((e) =>{
                const elemArr = e.recipient.findIndex(item => item.id === users.id)
                const elemArrToo = elemArr?0:1;
                return(
                    <div key={e.id}>
                        <Link to={`/chat/${e.id}`}>
                            <p>Мой Акаунт</p>
                            <p>E-mail: {e.recipient[elemArr].email}</p>
                            {e.massage.length === 0 ? 
                                <div>Сообщений нет</div> 
                            : 
                                <div>{e.massage[e.massage.length-1].content}</div>
                            }
                            <p>Получетель</p>
                            <p>E-mail: {e.recipient[elemArrToo].email}</p>
                        </Link>
                        <div className="button" onClick={()=>delCat(e.id)}>
                            Удалить переписку
                        </div>
                    </div>
                )
            })}
        </div>
        : null 
    )
}

export default Massage