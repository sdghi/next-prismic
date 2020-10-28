import React from 'react';
import { RichText } from 'prismic-reactjs';
import '../styles/slices/text-section.scss';

const TextSection = ({ data }) => {
    return (
        <section className="text-section">
            <div className="container">{RichText.render(data.primary.content)}</div>
        </section>
    );
};

export default TextSection;
