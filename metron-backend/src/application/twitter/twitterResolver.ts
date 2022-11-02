const Twitter = require('twitter');
require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

console.log('CLIENT', client);

console.log(process.env.CONSUMER_KEY);

const twitterQueryResolver = {
  Query: {
    getAllTweets: (args: any) => {
      console.log(args);
      client.stream(
        'statuses/filter',
        { track: 'trump' },
        (stream: TweetData) => {
          stream.on('data', (tweet: Tweet) => {
            console.log(tweet);
          });
          stream.on('error', (error: Error) => {
            console.log(error);
          });
        },
      );
      return null;
    },
  },
};

export default twitterQueryResolver;
