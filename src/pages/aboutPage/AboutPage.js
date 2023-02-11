import React from 'react';
import {useSelector} from "react-redux";
import {articlesSelect} from "../../redux/slices/articlesSlices";

const AboutPage = () => {
    const articles = useSelector(articlesSelect);
    return (
        <div className='aboutPage'>
            <div className="container">
                <div className="box_one">
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;