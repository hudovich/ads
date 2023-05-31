import { useState } from 'react';
import {Link} from 'react-router-dom';
import s from './Header.module.css';

const Header = ({store, usersThank, postThunk}) =>{
    const [searchValue, setSearch] = useState('');
    const isLogin = localStorage.email;
    const addSearch = () =>{
        postThunk({type: "SEARCH"}, searchValue);
        setSearch('');
    }
    return(
        <header>
            <div className={s.box}>
                <Link to='/' className={s.logo}>
                    {store.logoImg ? 
                        <img className={s.logoImg} src={store.logoImg} alt={store.nameSite}/> 
                        : null}
                    <h1 className={s.nameSite}>{store.nameSite}</h1>
                </Link>
                <div className={s.search}>
                    <input className={s.inputsearch} 
                           onChange={e => setSearch(e.target.value)} 
                           placeholder={store.searchValue} 
                           value={searchValue}/>
                    <button className={s.button} onClick={e=>addSearch(e)}>{store.searchButton}</button>
                </div>
                { isLogin !== undefined ? 
                <div>
                    <Link className={s.button} to="acaunt">{store.openAcaunt}</Link>
                    <Link className={s.button} to="/" onClick={()=>usersThank({type:'EXIT'})}>Выход</Link>
                </div>
                : 
                <div>
                    <Link className={s.button} to="login">{store.loginButtton}</Link> 
                    <Link className={s.button} to="registration">{store.registrationButton}</Link>
                </div>
                }
            </div>
        </header>
    );
}

export default Header;