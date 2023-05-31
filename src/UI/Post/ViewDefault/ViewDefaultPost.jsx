import s from './ViewDefaultPost.module.css'
import {Link} from 'react-router-dom'
const ViewDefaultPost = ({post}) =>{
    return (
        <div className={s.boxAds}>
            {post.map( e => (
                <Link key={e.id} to={`/single/${e.id}`}>
                    <div className={s.viewAds}>
                            {e.img[0].data_url !== ""?
                                <>
                                    <img className={s.img} src={e.img[0].data_url} alt={e.name}/>
                                </>
                                : 
                                <div className={s.image}>
                                    <span>Фото нет</span>
                                </div>
                            }   
                            <span>{e.name}</span>
                            <span>{e.price}</span>
                            <span>{e.description}</span> 
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ViewDefaultPost