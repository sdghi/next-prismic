import React from 'react';
import TextSection from '../slices/TextSection';
<<<<<<< HEAD
import HeroImage from '../slices/HeroImage';
import Notification from '../slices/Notification';
import Accordian from '../slices/Accordian';
import TabbedContent from '../slices/TabbedContent';
import Table from '../slices/Table';
import Carousel from '../slices/Carousel';
=======
>>>>>>> preview

export default function SlicesContainer({ slices }) {
    return (
        <>
            {slices.map((slice: any, i: number) => {
                const res = (() => {
                    switch (slice.slice_type) {
<<<<<<< HEAD
                        case 'hero_image':
                            return <HeroImage key={i} data={slice} />;
                        case 'notification':
                            return <Notification key={i} data={slice} />;
=======
>>>>>>> preview
                        case 'text_section':
                            return <TextSection key={i} data={slice} />;
                        case 'table':
                            return <Table key={i} data={slice} />;
                        case 'accordian':
                            return <Accordian key={i} data={slice} />;
                        case 'tabbed_content':
                            return <TabbedContent key={i} data={slice} />;
                        case 'carousel':
                            return <Carousel key={i} data={slice} />;
                        default:
                            return null;
                    }
                })();

                return res;
            })}
        </>
    );
}
