exports.handler = function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Functions working!' })
    };
};
