import { RichText } from 'prismic-reactjs';
import { htmlSerializer, linkResolver } from '@/utils/index';

export default function PrismicRichText({ render }) {
    return <RichText render={render} linkResolver={linkResolver} htmlSerializer={htmlSerializer} />;
}
