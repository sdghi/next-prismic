export const linkResolver = (doc) => {
    if (doc.link_type === 'Web') {
        return doc.url;
    }
    return `/${doc.uid}`;
};
