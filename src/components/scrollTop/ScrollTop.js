import React, {useState} from 'react';
import {SwipeUp} from '@mui/icons-material';
import {Button} from "@mui/material";

const ScrollTop = () => {
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.onscroll = () => {
        const doc = document.documentElement;
        setScroll(doc.scrollTop >= 128);
    };
    return (
        <>
            {
                scroll &&
                <Button
                    variant="contained"
                    style={{
                    position: 'fixed',
                    right: 50,
                    bottom: 175,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                }}
                    onClick={handleScroll}
                ><SwipeUp/></Button>
            }
        </>
    );
};

export default ScrollTop;