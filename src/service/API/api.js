import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const api = {
    post:{
        getPost: () => {return instance.get('posts')},
        getSinglePost: (id) => {return instance.get(`posts/${id}`)},
        getPostCat: (id) => {return instance.get(`posts?category_like=${id}`)},
        setPostSearch: (text) => {return instance.get(`posts?q=${text}`)},
        editPost: (id, data) => {
            return instance.put(`posts/${id}`, 
            {
              id: data.id,
              img: data.img,
              name: data.name,
              price: data.price,
              description: data.description,
              phone: data.phone,
              eMail: data.eMail,
              author: data.author,
              category: data.category
            })
        },
        addPost: (data) => {
            return instance.post(`posts/`, 
            {
              img: data.img,
              name: data.name,
              price: data.price,
              description: data.description,
              phone: data.phone,
              eMail: data.eMail,
              author: data.author,
              category: data.category
            })
        },
        delite: (id) => {
            return instance.delete(`posts/${id}`)
        }
    },
    category:{
        getCategory: () => {return instance.get(`/category/`)} //apiCategory
    },
    pages:{
        getPages: () => {return instance.get(`pages`)},
        getPagesID: (id) => {return instance.get(`pages/${id}`)}
    },
    authorization:{
        login: (data) => { return instance.post(`login`, {email:data.login, password:data.pass})}, //login
        registration: (data) => {
            instance.post(`register`, { 
                email: data.email, 
                password: data.pass,
                name: "", 
                phone: "",
                ads:[], 
                sms:[],
                info:"", 
                avatar:""  
            })
            .then((response)=>{
                console.log(response);
                alert('Поздравляю вы зарегистрированы');
            })
            .catch(function (error) {
                alert('Ошибка сервера (E-mail должен быть формата name@gmail.com)');
            })
        },

    },
    acaunt:{
        setUser: () => {
            const email  = localStorage.getItem("email");
            return instance.get(`users?email=${email}`);
        },
        setUserID: (id) => {
            return instance.get(`users/${id}`)
        },
        setUserPost: (id) => {
            return instance.get(`posts?author=${id}`);
        },
        editAcaunt: (id, data, img) => {
            return instance.put(`users/${id}`, 
            {
              email: data.email,
              password: data.password,
              name: data.name,
              phone: data.phone,
              ads: [],
              sms: [],
              info: data.info,
              avatar: img,
              id: id
            })
        },
        delete: (id) =>{
            return instance.delete(`users/${id}`)
        }        
    },
    chat:{
        createMassage: (data) => instance.post(`massage`, data ),
        setChatUser: (id) => instance.get(`massage?idUsers_like=${id}`),
        setChatID: (id) => instance.get(`massage/${id}`),
        setAllChat: () => instance.get("massage"),
        setDelChat: (id) => instance.delete(`massage/${id}`),
        setPushMassage: (id, data) => instance.put(`massage/${id}`, data),
    }
}





