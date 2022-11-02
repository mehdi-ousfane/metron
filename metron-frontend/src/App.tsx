import * as React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TWEETS } from './graphql/queries/twitter';

// utiliser un useeffect?
const { data: tweetsData } = useQuery<{
  tweets: {
    tweetList: { id: string; author: string; text: string; date: string }[];
  };
}>(QUERY_TWEETS, {
  variables: {
    keyword: '',
  },
});

const word = '';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return tweetsData?.tweets.tweetList.map((tweet) => {
      return <div>{tweet.text}</div>;
    });
  }
}

export default App;
