import { gql } from "graphql-request";

const AllItems = gql`
query Items {
  items {
    id
    title
    body
    slug
    itemImage {
      url
      width
      height
    }
  }
}
`;

export {AllItems};