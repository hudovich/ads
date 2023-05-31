import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from "react-router-dom";
import s from './Single.module.css'

let Single = ({single, recipient, message, postThunk, usersThank, defaultUser, massageThank}) => {
    const {singleId} = useParams();
    useEffect (()=>{
        postThunk({type:"POST_SINGLE"}, singleId);
        usersThank({type:"DATA_ACAUNT"});
    },[postThunk, usersThank, singleId, massageThank]);

    useEffect(()=>{
        if(defaultUser && defaultUser.id !== null && single && single.author !==null){
            massageThank({type:"SET_CHAT"}, defaultUser.id);
            usersThank({type:"SET_USER_ID"}, single.author)
        }
    },[defaultUser, massageThank, usersThank, single])

    const createMassage = ()=>{
        if(defaultUser && defaultUser.id !== null){
            if(message !== null){
                console.log(message)
                const som = message.some(num => num.idUsers.includes(single.author));
                  if (!som){
                    console.log('Новый чат')
                    const startDate = {
                        idUsers: [defaultUser.id, single.author],
                        massageUser:[recipient, defaultUser],
                    }
                    massageThank({type:'CREATE_CHAT'}, startDate);
                  }else{
                    console.log('Чат уже есть')
                  }
            }else{
                return null
            }     
        }
    }

    return(
        single !== null ?
        <div className={s.globalBox}>
            <div className={s.galery}>
                {
                    single.img.map((e, index) => (
                    e.data_url!==""?
                        <img key={index} className={s.img} src={e.data_url} alt={single.name}/>
                    : <div key={e.id} className={s.noneImg}>Нет фото</div>
                    ))
                }
            </div>
            <div className={s.context}>
                <span>{single.name}</span>
                <span>Цена: {single.price}</span>
                <span>Телефон:{single.phone}</span>
                <span>E-mail:{single.eMail}</span>
                <span>Описание:{single.description}</span>
            </div>
            <Link to={"/mesenge"} className={s.button} onClick = {()=>{createMassage()}}>
                Отправить сообщения
            </Link>
        </div>
        : null
    )
}

export default Single