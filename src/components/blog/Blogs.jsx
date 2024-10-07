import { useQuery } from "@apollo/client"
import {GET_BLOGS_INFO} from "../../graphQL/queries"
import { Grid } from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

function Blogs() {
    const { loading , data , error } = useQuery(GET_BLOGS_INFO)
    console.log(data);
    
    if(loading) return <h4><Loader /></h4>
    if(error) return <h4>Somthing went wrong...</h4>
  return (
    <Grid container spacing={2}>
      {
        data.posts.map( post =>
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <CardEl {...post} />
          </Grid>
        )
      }
    </Grid>
  )
}

export default Blogs