import {Link} from 'react-router-dom'
import s from './ViewLinePost.module.css'
const ViewLinePost = ({post}) =>{
    
    return (
        post.map( e => (
            <div key={e.id} className={s.boxAds}>
                <Link to={`/single/${e.id}`}>
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
                        <div className={s.content}> 
                            <span>{e.name}</span>
                            <span>{e.price}</span>
                            <span>{e.description}</span>
                        </div>
                    </div>
                </Link>
            </div>
        ))
    )
}

export default ViewLinePost