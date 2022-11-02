import { gql } from "apollo-server-express";

export default function getTweetSchema() {
  return gql`
    type Tweet {
      id: ID!
      author: String
      text: String
      date: String
    }

    type Query {
      getAllTweets(keyword: String): [Tweet]
    }
  `;
}
