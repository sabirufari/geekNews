import React, {useEffect} from 'react';
import styles from './css/mainPage.module.css';
import {useDispatch} from "react-redux";
import {getArticles} from "../../redux/slices/articleSlices";
import LeftNews from "../../components/mainPage/leftNews/LeftNews";

const MainPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <LeftNews/>
            </div>
        </div>
    );
};

export default MainPage;