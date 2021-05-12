import { Client } from '@/utils/prismic';
import { linkResolver } from '@/utils/linkResolver';

export default async (req, res) => {
    const { token: ref, documentId } = req.query;
    const redirectUrl = await Client(req)
        .getPreviewResolver(ref, documentId)
        .resolve(linkResolver, '/');

    if (!redirectUrl) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    console.log('ref', ref);

    res.setPreviewData({ ref });

    res.write(
        `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
    );
    res.end();
};
