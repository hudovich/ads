import s from './Footer.module.css'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
let Footer = ({pages, categories, init, PagesThank, postThunk}) => {
    
    useEffect(()=>{
        PagesThank({type:"PAGES_ALL"})
    },[PagesThank])

    
    const getPost = (e) => {
        postThunk({type:"CATEGORY"}, e);
    }
    return(
        <footer>
            <Link to='/' className={s.logo}>
                {init.logoImg ? <img className = {s.imagesLogo} src = {init.logoImg} alt={init.nameSite} /> : null}
                {init.nameSite}
            </Link>
            <div className={s.category}>
                {categories.map(e => (
                    <Link key={e.id} onClick = {()=>getPost (e.id)} to = {e.url}>
                        <div key={e.id}>
                            {e.name}
                        </div>
                    </Link>
                ))} 
            </div>
            
            <div className={s.pages}>
                {
                    pages!==null?    
                        pages.map(e => (
                            <Link to={`pages/${e.id}`} key={e.id}>
                                {e.name}
                            </Link>
                        ))
                    : <p>Ошибка</p>
                }
            </div>
        </footer>
    )
}

export default Footer