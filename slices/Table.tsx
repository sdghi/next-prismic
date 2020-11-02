import React from 'react';

export default function Table({ data }) {
    const { headers, rows, caption } = data;
    return (
        <section className="container">
            <table className="table">
                <caption className="table__caption">{caption}</caption>
                <tbody className="table__body">
                    <tr className="table__headers_row">
                        {headers.map((header, i) => (
                            <th className="table__header_cell" scope="col" key={i}>
                                {header}
                            </th>
                        ))}
                    </tr>
                    {rows.map((row, i) => (
                        <tr key={i} className="table__content_row">
                            {row.map((cell, j) => {
                                if (cell.type === 'row_header') {
                                    return (
                                        <th
                                            key={j}
                                            className="table__content_cell table__row_header"
                                            dangerouslySetInnerHTML={{ __html: cell.content }}
                                        />
                                    );
                                } else {
                                    return (
                                        <td
                                            className="table__content_cell"
                                            key={j}
                                            dangerouslySetInnerHTML={{ __html: cell.content }}
                                        />
                                    );
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
