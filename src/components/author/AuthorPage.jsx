import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { GET_AUTHOR_INFO } from "../../graphQL/queries";
import { Avatar, Container, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import Grid from '@mui/material/Grid';
import CardEl from "../shared/CardEl"
import Loader from "../shared/Loader";

function AuthorPage() {
    const {slug} = useParams()

    const { loading , data , error } = useQuery(GET_AUTHOR_INFO, {
        variables:{slug: slug},
    })

    console.log(data);

    if(loading) return <h3><Loader /></h3>

    if(error) return <h3>Error...</h3>

    //destructuring
    const author = data?.authors[0];
    const { feild, name, avatar, description, post } = author || {};


  return (
    <Container maxWidth="lg">
    <Grid container mt={10}>
        <Grid item xs={12} display='flex' flexDirection='column' alignItems='center'>
            <Avatar src={avatar.url}
            sx={{ width: 250, height: 250}} />
            <Typography component='h3' variant="h5" fontWeight={700} mt={4}>
                {name}
            </Typography>
            <Typography component='p' variant="h5" color="text.secondary" mt={2}>
                {feild}
            </Typography>
        </Grid>
        <Grid item xs={12} mt={5} >
            <div 
            dangerouslySetInnerHTML={{__html: sanitizeHtml(description.html)}}>
                
            </div>
        </Grid>
        <Grid item xs={12} mt={6}>
            <Typography component="h3" variant="h5" fontWeight={700}>
                مقالات {name}
            </Typography>
            <Grid container spacing={2} mt={2} >
                {post.map(
                    (post)=> <Grid item key={post.id} xs={12} sm={6} md={4}>
                        <CardEl title={post.title} coverPhoto={post.coverPhoto} slug={post.slug}/>
                    </Grid>
                )}
            </Grid>
        </Grid>
    </Grid>
   </Container>
 )
}

export default AuthorPage