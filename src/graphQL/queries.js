import { gql } from "@apollo/client"

const GET_BLOGS_INFO = gql`
    query {
        posts {
          author {
            name
            avatar {
              url
            }
          }
          title
          slug
          id
          coverPhoto {
            url
          }
        }
      }
`

const GET_AUTHORS_INFO = gql`
  query{
    authors {
    id
    name
    slug
    avatar {
      url
    }
  }
  }
`

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!){
    authors(where: {slug: $slug}) {
      avatar {
      url
    }
    feild
    id
    name
    post {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
    description {
      html
    }
  }
}
` 
export {GET_AUTHORS_INFO, GET_BLOGS_INFO, GET_AUTHOR_INFO}