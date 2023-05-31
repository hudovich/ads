import ViewDefaultPost from "./ViewDefault/ViewDefaultPost"
import ViewLinePost from "./ViewLine/ViewLinePost"
import s from './Post.module.css'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";


const Post = ({post, viewPost, setViev, postThunk}) => {

    const {cat} = useParams();
    useEffect (()=>{
        if(!cat){
            postThunk({type:"POST_ALL"})
        }
    },[cat, postThunk]);


    return (
        post.length ?
            cat?
            <>
                <div className={s.icobox} onClick={()=> setViev()}>
                  {viewPost ? <img width="23px" height="23px" src='/ico-1.png' alt="ico"/> 
                  : <img width="40px" height="28px" src='/ico-2.png' alt="ico"/>}
                </div>
                {viewPost ? <ViewDefaultPost post = {post}/> : <ViewLinePost post = {post}/>}
            </>
            :
            <>
                <div className={s.icobox} onClick={()=> setViev()}>
                    {viewPost ? <img width="23px" height="23px" src='/ico-1.png' alt="ico"/>
                    : <img width="40px" height="28px" src='/ico-2.png' alt="ico"/>}
                </div>
                {viewPost ? <ViewDefaultPost post = {post}/> : <ViewLinePost post = {post}/>}
            </>
        : 
        <h1>Нет постов</h1>
 
    )
}

export default Post