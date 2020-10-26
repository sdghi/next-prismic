import React from 'react';
import TextSection from '../slices/TextSection';
import HeroImage from '../slices/HeroImage';
import Notification from '../slices/Notification';

export default function SlicesContainer({ slices }) {
    return (
        <>
            {slices.map((slice: any, index: number) => {
                const res = (() => {
                    switch (slice.slice_type) {
                        case 'hero_image':
                            return <HeroImage key={index} data={slice} />;
                        case 'notification':
                            return <Notification key={index} data={slice} />;
                        case 'text_section':
                            return <TextSection key={index} data={slice} />;
                        default:
                            return null;
                    }
                })();

                return res;
            })}
        </>
    );
}
