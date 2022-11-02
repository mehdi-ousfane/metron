import { gql } from 'graphql-tag';

const QUERY_TWEETS = gql`
  query getAllTweets($keyword: String!) {
    getAllTweets(keyword: $keyword) {
      id
      author
      text
      date
    }
  }
`;

export { QUERY_TWEETS };
