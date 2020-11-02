import React, { useState } from 'react';

export default function Accordian({ data }) {
    const [activeSectionIndex, setActiveSectionIndex] = useState(null);

    function handleSelection(i) {
        if (i === activeSectionIndex) {
            return setActiveSectionIndex(null);
        }

        setActiveSectionIndex(i);
    }

    return (
        <section>
            {data.map((info, i) => (
                <div
                    className="accordian"
                    key={i}
                    aria-expanded={activeSectionIndex === i ? true : false}>
                    <h2 className="accordian__heading">
                        <button onClick={() => handleSelection(i)}>
                            {info.title}
                            <svg viewBox="0 0 10 10" focusable="false">
                                <rect
                                    className="vert"
                                    height={activeSectionIndex === i ? '2' : '8'}
                                    width={activeSectionIndex === i ? '8' : '2'}
                                    y={activeSectionIndex === i ? '4' : '1'}
                                    x={activeSectionIndex === i ? '1' : '4'}
                                />
                                <rect height="2" width="8" y="4" x="1" />
                            </svg>
                        </button>
                    </h2>
                    {activeSectionIndex === i && (
                        <div
                            className="accordian__content"
                            dangerouslySetInnerHTML={{ __html: info.content }}
                        />
                    )}
                </div>
            ))}
        </section>
    );
}
