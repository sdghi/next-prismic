import { NextApiResponse } from 'next';
import { client } from '@/utils/prismic-configuration';
import { linkResolver } from '@/utils/linkResolver';

export default async (req, res: NextApiResponse) => {
    const { token: ref, documentId } = req.query;

    // Check the token parameter agains the Prismic SDK
    const url = await client.getPreviewResolver(ref, documentId).resolve(linkResolver, '/');

    if (!url) {
        return res.status(404).json({ message: 'Invalid Token' });
    }

    // Enable preivew mode by seetin the cookies
    res.setPreviewData({
        ref // pass the ref to pages so that they can fetch the draft ref
    });

    res.writeHead(301, { Location: `/` });

    res.end();
};
