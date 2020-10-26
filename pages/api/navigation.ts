import { client } from '../../prismic-configuration';
export default async (req, res) => {
    res.statusCode = 200;
    console.log(client);
    const navigation = await client.getSingle('navigation', {}).then((res) => res);
    res.json(navigation.data.body);
};
