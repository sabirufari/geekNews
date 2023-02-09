import React from 'react';
import styles from './css/slider.module.css'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper";
import {useSelector} from "react-redux";
import {articlesSelect, loadArticlesSelect} from "../../redux/slices/articlesSlices";
import {NavLink} from "react-router-dom";
import {CircularProgress} from "@mui/material";

const Slider = () => {
    const articles = useSelector(articlesSelect);
    const load = useSelector(loadArticlesSelect)

    return (
        <div className='container'>
            <h2 className={styles.title}>Популярные новости</h2>
            {
                !load
                ?
                <Swiper
                    className={styles.blocks}
                    autoplay={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                >
                    {articles.map(i => (
                        <SwiperSlide className={styles.block} key={i.id}>
                            <NavLink to={`${i.id}`}>
                                <div className={styles.block_img}>
                                    <img src={i?.image} alt="" className={styles.block_image}/>
                                </div>
                                <p className={styles.block_title}>{i?.title}</p>
                            </NavLink>
                        </SwiperSlide>
                    ))}
                </Swiper>
                    :
                    <div className={styles.load}>
                        <CircularProgress/>
                    </div>
            }
        </div>
    );
};

export default Slider;