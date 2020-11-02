import React, { useState, useRef, useEffect } from 'react';

export default function Carousel({ data }) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    function handlePreviousSlide() {
        if (activeSlideIndex <= 0) {
            return setActiveSlideIndex(data.length - 1);
        }
        setActiveSlideIndex(activeSlideIndex - 1);
    }
    function handleNextSlide() {
        if (activeSlideIndex >= data.length - 1) {
            return setActiveSlideIndex(0);
        }
        setActiveSlideIndex(activeSlideIndex + 1);
    }

    return (
        <section>
            <ul className="carousel" tabIndex={0} aria-label="gallery" role="list">
                {data.map(
                    (slide, i) =>
                        activeSlideIndex === i && (
                            <li key={i} className="carousel__slide">
                                <figure className="carousel__slide__figure">
                                    <img src={slide.image.url} alt={slide.image.alt} />
                                    <figcaption
                                        dangerouslySetInnerHTML={{ __html: slide.caption }}
                                    />
                                </figure>
                            </li>
                        )
                )}
            </ul>
            <ul aria-label="gallery_controls">
                <li className="gallery_controls__item">
                    <button
                        className="gallery_controls__previous"
                        aria-label="previous slide"
                        onClick={handlePreviousSlide}>
                        previous
                    </button>
                </li>
                <li className="gallery_controls__item">
                    <button
                        className="gallery_controls__next"
                        aria-label="next slide"
                        onClick={handleNextSlide}>
                        next
                    </button>
                </li>
            </ul>
        </section>
    );
}
