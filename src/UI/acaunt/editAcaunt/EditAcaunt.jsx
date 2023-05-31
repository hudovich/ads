import s from './EeditAcaunt.module.css'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import ImageUploading from 'react-images-uploading';

let EditAcaunt = ({user, usersThank}) =>{
    // фото
    const [images, setImages] = useState([]);
    const image = (e) =>{
        return setImages(e);
    }
    const onChange = (imageList) => {
        setImages(imageList);
      };
    const maxNumber = 1;
    // данные БД
    useEffect (()=>{
        usersThank({type:"DATA_ACAUNT"});
    },[usersThank])
    
    useEffect (()=>{
        image(user !== null?user.avatar: '')
    },[user])
    // Form
    
    const onSubmit = data =>{
        let id = user.id;
        usersThank({type:'EDIT'},{id, data, images})
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    if(user !== null){
    return(
        <div className={s.global}>
            <ImageUploading
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                    isDragging,
                    dragProps,
                    }) => (
                    <div className={s.boxImg}>
                        {!images.length?
                          <div 
                            className={s.app}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Загрузить
                          </div>
                        :null}

                        {imageList.map((image, index) => (
                        <div key={index} className={s.imageItem}>
                            <img
                              className={s.foto} 
                              src={image['data_url']} 
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
            <form className={s.box} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.item}>
                    Ваш емаил:
                    <input className={s.input}
                        defaultValue={user.email} 
                        placeholder='Ваш емаил' 
                        {...register("email", 
                        { required: true, })}
                    />
                </div>
                <div className={s.item}>
                    Ваш пароль
                    <input className={s.input}
                        placeholder='Ваш пароль' 
                        {...register("password", 
                        { required: true, })}
                    />
                </div>
                <div className={s.item}>
                    Ваше имя
                    <input className={s.input}
                        defaultValue={user.name} 
                        placeholder='Ваше имя' 
                        {...register("name")}
                    />
                </div>
                <div className={s.item}>
                    Ваш телефон
                    <input className={s.input}
                        defaultValue={user.phone} 
                        placeholder='Ваш телефон' 
                        {...register("phone")}
                    />
                </div>
                <div className={s.item}>
                    О себе
                    <input className={s.input}
                        defaultValue={user.info} 
                        placeholder='О себе' 
                        {...register("info")}
                    />
                </div>
                {errors.pass && <div className={s.errors}>Поле логин и пароль не могут быть пусты</div>}
                <input className={s.button} type="submit" />
            </form>
        </div>
    )
    }else{ 
        return(
            <>
            <p>Ошибка</p>
            </>
        )
    }
}

export default EditAcaunt