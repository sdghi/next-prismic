import React, { useState, useEffect, useRef } from 'react';

export default function TabbedContent({ data, startingIndex = 0 }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(startingIndex);
    const tabbedSectionRef = useRef(null);

    function handleKeyDown(e) {
        if (e.which === 37) {
            if (currentTabIndex > 0) {
                setCurrentTabIndex(currentTabIndex - 1);
            }
        } else if (e.which === 39) {
            if (currentTabIndex < data.length - 1) {
                setCurrentTabIndex(currentTabIndex + 1);
            }
        } else if (e.which === 40) {
            // Focus tab panel on down arror
            const currentTabPanel = tabbedSectionRef.current.querySelector(
                'section[role="tabpanel"]'
            );
            currentTabPanel.focus();
        }
    }

    useEffect(() => {
        const allTabs = tabbedSectionRef.current.querySelectorAll('a[role="tab"]');

        allTabs.forEach((tab, i) => {
            if (i === currentTabIndex) {
                tab.focus();
            }
        });
    }, [currentTabIndex]);

    return (
        <section>
            <div ref={tabbedSectionRef} className="tabbed_content">
                <ul role="tablist" className="tabbed_content__tabs_container">
                    {data.map((tab, i) => (
                        <li role="presentation" key={i} className="tabbed_content__tab">
                            <a
                                className="tabbed_content__tab__link"
                                id={tab.id}
                                role="tab"
                                href={`#section-${tab.name}`}
                                data-index={i}
                                tabIndex={currentTabIndex !== i ? -1 : 0}
                                onClick={() => setCurrentTabIndex(i)}
                                onKeyDown={handleKeyDown}>
                                {tab.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {data.map(
                    (tab, i) =>
                        currentTabIndex === i && (
                            <section
                                className="tabbed_content__panel"
                                key={i}
                                role="tabpanel"
                                id={`section-${tab.name}`}
                                aria-labelledby={tab.id}
                                dangerouslySetInnerHTML={{ __html: tab.content }}
                                tabIndex={-1}
                            />
                        )
                )}
            </div>
        </section>
    );
}
