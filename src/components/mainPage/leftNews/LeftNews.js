import React from 'react';
import styles from './css/LeftNews.module.css';
import {useSelector} from "react-redux";
import {articlesSelect, loadArticlesSelect} from "../../../redux/slices/articlesSlices";
import {CircularProgress} from "@mui/material";
import {Link} from "react-router-dom";


const LeftNews = () => {
    const articles = useSelector(articlesSelect);
    const load = useSelector(loadArticlesSelect);

    return (
        <div className={styles.left}>
            {
                !load
                    ?
                    <>
                        <div className={styles.mainNews}>
                            <Link to={`about/${articles[13]?.id}`}>
                                <img src={articles[13]?.image} alt=""/>
                                <p>{articles[13]?.title}</p>
                            </Link>
                        </div>
                        <div className={styles.news}>
                            <Link to={`about/${articles[12]?.id}`}>
                                <img src={articles[12]?.image} alt=""/>
                                <p>{articles[12]?.title}</p>
                            </Link>
                        </div>
                        <div className={styles.news}>
                            <Link to={`about/${articles[12]?.id}`}>
                                <img src={articles[12]?.image} alt=""/>
                                <p>{articles[12]?.title}</p>
                            </Link>
                        </div>
                    </>
                    :
                    <div className={styles.load}>
                        <CircularProgress/>
                    </div>
            }
        </div>
    );
};

export default LeftNews;