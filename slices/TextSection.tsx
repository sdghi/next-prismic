import React from 'react';
import { RichText } from 'prismic-reactjs';

const TextSection = ({ data }) => {
    const { title, content } = data.primary;
    return (
<<<<<<< HEAD
        <section>
            <div className="[ text_section ] [ container ]">
                {RichText.render(data.primary.content)}
=======
        <section className="text-section">
            <div className="container">
                <h2>{title[0].text}</h2>
                {RichText.render(content)}
>>>>>>> preview
            </div>
        </section>
    );
};

export default TextSection;
