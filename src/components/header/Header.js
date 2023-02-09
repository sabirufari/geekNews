import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './css/header.module.css'
import {ReactComponent as Arrow} from "../../media/header/arrow_down.svg";
import {ReactComponent as Search} from "../../media/header/inp.svg";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Instagram} from "../../media/header/inst.svg";
import {ReactComponent as Facebook} from "../../media/header/faceb.svg";
import {ReactComponent as Telegram} from "../../media/header/tg.svg";
import SearchInput from "./searchInput";

export default function Header() {
    const [input, setInput] = useState('')

    const handleSearch = ({target}) => {
        setInput(target.value)
    }

    return (
        <header id="header">
            <div className={styles.menu+" container"}>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <div className={styles.icons}>
                        <a href="#">
                            <Instagram/>
                        </a>
                        <a href="#">
                            <Facebook/>
                        </a>
                        <a href="#">
                            <Telegram/>
                        </a>
                    </div>
            </div>
            <div className={styles.header}>
                <div className={"container "+styles.container}>
                    <div className={styles.nav__inner}>
                        <div className={styles.nav}>
                            <ul className={styles.ul}>
                                <li>
                                    <Link to='/' className={styles.link}>ГЛАВНАЯ СТРАНИЦА</Link>
                                </li>
                                <li className={styles.arrow_link}>
                                    <span className={styles.link}>НОВОСТИ</span>
                                    <Arrow/>
                                </li>
                                <li>
                                    <Link to='/' className={styles.link}>МУЛЬТИМЕДИА</Link>
                                </li>
                                <li>
                                    <Link to='/' className={styles.link}>СТАТЬИ</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.search__inner}>
                            <SearchInput/>
                            {/*<input type="text" value={input} onChange={handleSearch} placeholder='Поиск' className={styles.input}/>*/}
                            <Search className={styles.search}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
