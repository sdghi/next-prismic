import React from 'react';
import TextSection from '../slices/TextSection';

export default function SlicesContainer({ slices }) {
    return (
        <>
            {slices.map((slice: any, index: number) => {
                const res = (() => {
                    switch (slice.slice_type) {
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
