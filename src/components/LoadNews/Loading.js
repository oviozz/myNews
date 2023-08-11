
import React, { useState, useEffect } from 'react';

function Loading() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => {
                if (prevDots.length < 3) {
                    return prevDots + '.';
                } else {
                    return '.';
                }
            });
        }, 500); // Adjust the interval duration as needed

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p className={"nodata error-message"}>Loading{dots}</p>
        </div>
    );
}

export default Loading;
