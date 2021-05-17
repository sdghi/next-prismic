import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSection = ({ data }) => {
    const { title, content } = data.primary;
    return (
        <section className="text-section">
            <div className="container">
                <h2>{title[0].text}</h2>
                {RichText.render(content)}
            </div>
        </section>
    );
};

export default TextSection;
