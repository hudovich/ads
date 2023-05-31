import s from './Pages.module.css'
import { useEffect } from "react"
import {useParams} from "react-router-dom"

let Pages = ({pages, PagesThank}) => {

    let {pagesID} = useParams()

    useEffect (()=>{
        PagesThank({type:"PAGES"}, pagesID);
    }, [pagesID, PagesThank])
    return(
        pages !== null?
            <div className={s.box}>
                <div className={s.name}>{pages.name}</div>
                <div className={s.description}>{pages.description}</div>
            </div>
        : <p>Ошибка</p>
    )
}

export default Pages