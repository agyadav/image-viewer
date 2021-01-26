var Config =
{
    "login": {
        "username": "admin",
        "password": "admin"
    },
    "auth": {
        "access-token": "IGQVJYWkppRm1yTjVKeWJSZA25HSVZAvTjVHRW5zZAWFFb2hVM3ItOW1ReXB4WGtsYVByMS1JS1JrUWxpUFNOeXJ6Tlc4TXZAremtJUE1DdkpwQmRvSGFWVGR2T1ZA6TE1sbk4tUkdlVzJYdzFWNFp2SW5MLThteDJLSXZALa3lZA"
    },
    "api": 
    {
        "mock": false,
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;