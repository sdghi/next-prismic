import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSection = ({ data }) => {
    return (
        <section>
            <div className="container text_section">{RichText.render(data.primary.content)}</div>
        </section>
    );
};

export default TextSection;
