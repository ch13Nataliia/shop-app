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
const SinglePost= gql`
query SinglePost($slug: String!){
  item(where: { slug: $slug}) {
    body
    id
    slug
    title
    itemImage {
      url
      width
      height
    }
  }
}

`;
export {AllItems, SinglePost};