import axios from 'axios';

export const api = {
    post:{
        getPost: () => {return axios.get('http://localhost:3001/posts')},
        getSinglePost: (id) => {return axios.get(`http://localhost:3001/posts/${id}`)},
        getPostCat: (id) => {return axios.get(`http://localhost:3001/posts?category_like=${id}`)},
        setPostSearch: (text) => {return axios.get(`http://localhost:3001/posts?q=${text}`)},
        editPost: (id, data) => {
            return axios.put(`http://localhost:3001/posts/${id}`, 
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
            return axios.post(`http://localhost:3001/posts/`, 
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
            return axios.delete(`http://localhost:3001/posts/${id}`)
        }
    },
    category:{
        getCategory: () => {return axios.get(`http://localhost:3001/category/`)} //apiCategory
    },
    pages:{
        getPages: () => {return axios.get(`http://localhost:3001/pages/`)}, //apiPages
        getPagesID: (id) => {return axios.get(`http://localhost:3001/pages/${id}`)} //apiPagesID
    },
    authorization:{
        login: (data) => { return axios.post(`http://localhost:3001/login`, {email:data.login, password:data.pass})}, //login
        registration: (data) => {
            axios.post(`http://localhost:3001/register`, { 
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
            return axios.get(`http://localhost:3001/users?email=${email}`);
        },
        setUserID: (id) => {
            return axios.get(`http://localhost:3001/users/${id}`)
        },
        setUserPost: (id) => {
            return axios.get(`http://localhost:3001/posts?author=${id}`);
        },
        editAcaunt: (id, data, img) => {
            return axios.put(`http://localhost:3001/users/${id}`, 
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
            return axios.delete(`http://localhost:3001/users/${id}`)
        }        
    },
    chat:{
        createMassage: (data) => axios.post(`http://localhost:3001/massage`, data ),
        setChatUser: (id) => axios.get(`http://localhost:3001/massage?idUsers_like=${id}`),
        setAllChat: () => axios.get("http://localhost:3001/massage")
    }
}





