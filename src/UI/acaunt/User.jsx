import { useEffect } from 'react'
import s from './User.module.css'
import {Link} from 'react-router-dom'

let User = ({acaunt, usersThank, post}) => {
    useEffect(()=>{
        usersThank({type:"DATA_ACAUNT"});
    },[usersThank])
    const delAcc = (id) => {
        usersThank({type:"DELETE_ACAUNT"},id)
    }
    return(
        (acaunt !== null)&&(post !== null) ?
        <div className={s.golobalBox}>  
            <h1>Акаунт</h1>
            <div className={s.userInfo}>
                <div className={s.porsonInfo}>
                    <div className={s.avatar}>
                        {acaunt.avatar.length?
                            <img className={s.noneImg} src={acaunt.avatar[0].data_url} alt={acaunt.name}/>
                        : <div className={s.noneImg}>Фото нет</div>
                        }
                    </div>
                
                    <div className={s.content}>
                        <p>Имя:{acaunt.name}</p>
                        <p>Email:{acaunt.email}</p>
                        <p>Телефон:{acaunt.phone}</p>
                        <p>О себе:{acaunt.info}</p>
                    </div>
                </div>
                <div className={s.navigation}>
                    <Link className={s.button} to='/mesenge'>Сообщения</Link>
                    <Link className={s.button} to='/editAccaunt'>Редактировать Акаунт</Link>
                    <Link className={s.button} to='/addPost'>Добавить обявления</Link>
                    <div className={s.button} onClick = {()=>{delAcc(acaunt.id)}}>Удалить акаунт</div>
                </div>
            </div>
            <div className={s.post}>
                {post.map(e=>{
                    return(
                        <Link to={`/editPost/${e.id}`} className={s.box} key={e.id}>
                            <div className={s.imagesPost}>
                                {e.img[0].data_url?
                                    <img className={s.img} src={e.img[0].data_url} alt={e.name}/>
                                :
                                    <div className={s.imagesPostNone}>Фото нет</div>
                                }
                            </div>
                            <p>{e.name}</p>
                            <p>{e.price}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
        :
        <h1>Ошибка</h1>
    )   
}
export default User