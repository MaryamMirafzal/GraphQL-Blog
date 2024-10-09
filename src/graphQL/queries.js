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
const Get_POST_INFO = gql`
query getPostInfo($slug: String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      feild
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
}
`
const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String! ){
    comments( where: { post : {slug : $slug}}){
      id
      name
      text
    }
  }
`
export {GET_AUTHORS_INFO, GET_BLOGS_INFO, GET_AUTHOR_INFO , Get_POST_INFO ,GET_POST_COMMENTS}