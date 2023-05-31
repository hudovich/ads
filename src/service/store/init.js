const initialStata = {
    nameSite: 'OLX v2.0',
    logoImg: '/logo.png',
    searchValue: 'Поиск по сайту',
    searchButton: 'Поиск',
    loginButtton: 'Логин',
    openAcaunt: 'Акаунт',
    registrationButton: 'Регистрация',
}

const init = (state = initialStata, action) => {
    switch (action.type){
        default: 
            return state;
    }
}

export default init;