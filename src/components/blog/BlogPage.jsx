import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Get_POST_INFO } from "../../graphQL/queries"
import Loader from "../shared/Loader"

function BlogPage() {
  const { slug } = useParams()

  const { loading , data , errors } = useQuery(Get_POST_INFO, {
    variables:{ slug },
  })

  if(loading) return <h3><Loader /></h3>

  if(errors) return <h3>Error...</h3>
  console.log(data);
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage