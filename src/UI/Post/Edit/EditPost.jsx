import { useEffect, useState } from "react";
import {useForm} from "react-hook-form"
import ImageUploading from 'react-images-uploading';
import { useParams } from "react-router-dom";
import s from './EditPost.module.css'

let EditPost = ({post, postThunk, users, usersThank, category}) =>{
    const {id} = useParams();
    const [images, setImages] = useState();
    const [data, setData] = useState();

    const Data = (e) =>{
        return setData(e)
    }

    const onChange = (imageList) => {
        setImages(imageList);
      };

    const maxNumber = 10;

    const image = (e) =>{
        return setImages(e);
    }

    useEffect (()=>{
        image(id !== undefined && post !== null ? post.img :  '')
        Data(id !== undefined && post !== null ? 
            {name:post.name, description: post.description, price:post.price} 
        :  '')
    },[post, id])

    // BD
    useEffect (()=>{
        usersThank({type:"DATA_ACAUNT"});

        if(id!==undefined){
            postThunk({type:"GET_EDIT"}, id)
        }

    },[usersThank, postThunk, id])

    const onSubmit = (e) => {
         let globalBate = {
            name: e.name !== ''? e.name : data.name,
            price: e.price !== ''? e.price : data.price,
            description: e.description !== ''? e.description : data.description,
            category: e.category !== ''? e.category : data.category,
            author: users.id,
            eMail: users.email,
            phone: users.phone,
            img: !images?[]:images,
            id: id
        }
        if(id!==undefined){
            postThunk({type:"EDIT"}, globalBate);
        }else{
            postThunk({type:"ADD"}, globalBate);
        }
    }

    // form

    const {register, handleSubmit} = useForm();
    
    return(
        <>
            <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                    dragProps,
                    }) => (
                    <div className={s.boxImg}>
                          <div 
                            className={s.app}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Загрузить
                          </div>
                        {imageList.map((image, index) => (
                        <div key={index} className={s.imageItem}>
                            <img
                              className={s.foto} 
                              src={image['data_url']}
                              width="150px"
                              height="150px" 
                              alt=""/>
                            <div 
                              className={s.del} 
                              onClick={() => onImageRemove(index)}>
                              Удалить
                            </div>
                        </div>
                        ))}
                   </div>
                )}
            </ImageUploading>
           <form onSubmit = {handleSubmit(onSubmit)}>
            <input 
                defaultValue={id !== undefined && post !== null && data !== undefined ? data.name: ""}
                placeholder="Название обявления" 
                {...register("name")}
            />
            <input 
                placeholder="Цена" 
                defaultValue = {id !== undefined && post !== null && data !== undefined ? data.price: ""}
                {...register("price")}
            />
            <input 
                placeholder="Описания" 
                defaultValue = {id !== undefined && post !== null && data !== undefined ? data.description : ""}  
                {...register("description")}
            />

            <select {...register("category")}>
                {category.map (e=>{ 
                        return <option key={e.id} value={e.id}>{e.name}</option>
                    })
                }
            </select>

            <input type="submit" />
           </form>
           {
            id !== undefined && post !== null && data !== undefined ? 
                <div onClick={()=>postThunk({type:"DELETE"}, id)}>
                    Удалить акаунт
                </div> 
            : 
                ""
           }
        </>
    )
}

export default EditPost