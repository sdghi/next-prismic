import React from 'react';
import TextSection from '../slices/TextSection';
import HeroImage from '../slices/HeroImage';
import Notification from '../slices/Notification';
import Accordian from '../slices/Accordian';
import TabbedContent from '../slices/TabbedContent';
import Table from '../slices/Table';
import Carousel from '../slices/Carousel';

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
                        case 'table':
                            return <Table key={index} data={slice} />;
                        case 'accordian':
                            return <Accordian key={index} data={slice} />;
                        case 'tabbed_content':
                            return <TabbedContent key={index} data={slice} />;
                        case 'carousel':
                            return <Carousel key={index} data={slice} />;
                        default:
                            return null;
                    }
                })();

                return res;
            })}
        </>
    );
}
