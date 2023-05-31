import s from './Categories.module.css'
import {Link } from 'react-router-dom'
import { useEffect } from 'react'
const Categories = ({state, CategoryThank, postThunk}) => {
    
    const cat = window.location.pathname;

    useEffect(()=>{
        CategoryThank({type:"CATEGORY"})
    }, [CategoryThank])

    const getPost = (e) => {
        postThunk({type:"CATEGORY"}, e);
    }

    return(
        <div className={s.flex}>
        {state.map( (e) => {
            if(cat === `/${e.url}`){ getPost(e.id) }
            return (    
                <Link key={e.id} onClick={() => {getPost(e.id)}} to = {e.url}>
                    {e.url === cat ? '' : ''}
                    <div className={s.box}>
                        {e.img ?
                            <img src={e.img} className={s.img} alt={e.name} />
                        : null}
                        <h2 className={s.name}>{e.name}</h2>
                    </div>
                </Link>
            )
        })}
    </div>)
}

export default Categories