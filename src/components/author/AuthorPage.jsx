import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { GET_AUTHOR_INFO } from "../../graphQL/queries";
import { Avatar, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';


function AuthorPage() {
    const {slug} = useParams()

    const { loading , data , error } = useQuery(GET_AUTHOR_INFO, {
        variables:{slug: slug},
    })

    console.log(data);

    if(loading) return <h3>Loading ...</h3>

    if(error) return <h3>Error...</h3>
  return (
    <Container maxWidth="lg">
    <Grid container mt={10}>
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
            <Avatar src={data.authors[0].avatar.url}
            sx={{ width: 250, height: 250}} />
            <Typography component='h3' variant="h5" fontWeight={700} mt={4}>
                {data.authors[0].name}
            </Typography>
            <Typography component='p' variant="h5" color="text.secondary" mt={2}>
                {data.authors[0].feild}
            </Typography>
        </Grid>
        <Grid item xs={12} >
            {data.authors[0].description.html}
        </Grid>
    </Grid>
   </Container>
 )
}

export default AuthorPage