import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {articlesSelect} from "../../redux/slices/articlesSlices";
import styles from './css/aboutPage.module.css'
import Slider from "../../components/slider/Slider";
import {useParams} from "react-router-dom";
import {articleSelect, clearArticle, getArticle} from "../../redux/slices/articleSlice";

const AboutPage = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const article = useSelector(articleSelect);

    useEffect(() => {
        dispatch(getArticle(id))
        return () => {
            dispatch(clearArticle())
        }
    }, [id])

    return (
        <div className={styles.aboutPage}>
            <div className="container">
                <>
                    <div className={styles.box_one}>
                        <span className={styles.time}>{article.id}</span>
                        <p className={styles.text}>{article.title}</p>
                    </div>
                    <div className="box_two">
                        <div className={styles.box_img}>
                            <img src={article.image} alt="" className={styles.img}/>
                        </div>
                        <p className={styles.box_title}>{article.title}</p>
                    </div>
                </>
                <Slider/>
            </div>
        </div>
    );
};

export default AboutPage;