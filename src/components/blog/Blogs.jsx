import { useQuery } from "@apollo/client"
import GET_BLOGS_INFO from "../../graphQL/queries"

function Blogs() {
    const { loading , data , error } = useQuery(GET_BLOGS_INFO)
    console.log(data);
    if(loading) return <h4>Loading...</h4>
    if(error) return <h4>Somthing went wrong...</h4>
  return (
    <div>Blogs</div>
  )
}

export default Blogs