import TextSection from '@/slices/TextSection';
import Accordian from '@/slices/Accordian';
import TabbedContent from '@/slices/TabbedContent';
import Table from '@/slices/Table';
import Carousel from '@/slices/Carousel';

export default function SlicesContainer({ slices }) {
    return (
        <>
            {slices.map((slice: any, i: number) => {
                const res = (() => {
                    switch (slice.slice_type) {
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
