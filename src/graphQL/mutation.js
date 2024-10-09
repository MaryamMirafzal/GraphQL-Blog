import { gql } from "@apollo/client"

const SEND_COMMENT = gql`
mutation sendComment($name: String!, $text: String!, $email: String!, $slug: String!) {
  createComment(
    data: {name: $name, email: $email, text: $text, post: {connect: {slug: $slug}}}
  ) {
    id
    name
    text
  }
}
`

export {SEND_COMMENT}