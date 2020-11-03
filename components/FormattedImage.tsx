import React, { useState, useRef, useEffect } from 'react';

export default function FormattedImage({ className, image }) {
    const imageRef = useRef(null);
    const [dimensions, setDimensions] = useState([]);

    useEffect(() => {
        const { clientHeight, clientWidth } = imageRef.current;
        setDimensions([clientHeight, clientWidth]);
    }, [imageRef.current]);

    return (
        <img
            ref={imageRef}
            className={className ? className : ''}
            src={image.url}
            alt={image.alt}
            height={dimensions[0]}
            width={dimensions[1]}
        />
    );
}
