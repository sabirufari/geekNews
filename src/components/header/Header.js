import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './css/header.module.css'
import {ReactComponent as Arrow} from "../../media/header/arrow_down.svg";
import {ReactComponent as Search} from "../../media/header/inp.svg";
import {ReactComponent as Logo} from "../../media/header/logo.svg";
import {ReactComponent as Instagram} from "../../media/header/inst.svg";
import {ReactComponent as Facebook} from "../../media/header/faceb.svg";
import {ReactComponent as Telegram} from "../../media/header/tg.svg";
import SearchInput from "./SearchInput";

export default function Header() {
    const [open, setOpen] = useState(false)
    const arr = ['МОБИЛЬНАЯ-РАЗРАБОТКА', 'WEB-РАЗРАБОТКА', 'UX/UI-ДИЗАЙН', 'PROJECT MANAGER', 'МЕРОПРИЯТИЯ']

    const handleOpen = () => {
        setOpen(!open)
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
                                <li className={styles.arrow_link} onClick={handleOpen}>
                                    <span className={styles.link}>НОВОСТИ<Arrow style={open ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}/></span>

                                    {
                                        open
                                        &&
                                        <ul className={styles.categories}>
                                            {
                                                arr.map((i, k) => (
                                                    <li key={k}><Link to='/'>{i}</Link></li>
                                                ))
                                            }
                                        </ul>
                                    }
                                </li>
                                <li>
                                    <Link to='/' className={styles.link}>МУЛЬТИМЕДИА</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.search__inner}>
                            <SearchInput/>
                            <Search className={styles.search}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
