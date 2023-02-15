import React from 'react';
import styles from './css/multiMedia.module.css'

const MultiMedia = () => {
    return (
        <div className={styles.multiMedia}>
            <div className="container">
                <h2 className={styles.title}>Мультимедиа</h2>
                <div className={styles.multi_videos}>
                    <div className={styles.multi_video}>
                            <iframe className={styles.video} width="525" height="333" src="https://www.youtube.com/embed/tfSS1e3kYeo"
                                    title="Travis Scott - HIGHEST IN THE ROOM (Official Music Video)" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        <p className={styles.multi_title}>Lorem ipsum dolor sit amet consectetur. Arcu eget integer nullam convallis egestas duis. </p>
                    </div>
                    <div className={styles.multi_video}>
                        <iframe className={styles.video} width="525" height="333"
                                src="https://www.youtube.com/embed/xpVfcZ0ZcFM?list=RDxpVfcZ0ZcFM"
                                title="Drake - God&#39;s Plan" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <p className={styles.multi_title}>Lorem ipsum dolor sit amet consectetur. Arcu eget integer nullam convallis egestas duis. </p>
                    </div>
                    <div className={styles.multi_video}>
                        <iframe className={styles.video} width="525" height="333"
                                src="https://www.youtube.com/embed/6ONRf7h3Mdk?list=RDxpVfcZ0ZcFM"
                                title="Travis Scott - SICKO MODE ft. Drake" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <p className={styles.multi_title}>Lorem ipsum dolor sit amet consectetur. Arcu eget integer nullam convallis egestas duis. </p>
                    </div>
                    <div className={styles.multi_video}>
                        <iframe className={styles.video} width="525" height="333"
                                src="https://www.youtube.com/embed/JFm7YDVlqnI?list=RDxpVfcZ0ZcFM"
                                title="Drake - Laugh Now Cry Later (Official Music Video) ft. Lil Durk" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <p className={styles.multi_title}>Lorem ipsum dolor sit amet consectetur. Arcu eget integer nullam convallis egestas duis. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiMedia;