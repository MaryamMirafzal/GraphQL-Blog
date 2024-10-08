import { useQuery } from "@apollo/client"
import { useNavigate, useParams } from "react-router-dom"
import { Get_POST_INFO } from "../../graphQL/queries"
import Loader from "../shared/Loader"
import { Avatar, Box, Container, Grid, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sanitizeHtml from "sanitize-html"
import CommentForm from "../comment/CommentForm"

function BlogPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const { loading , data , errors } = useQuery(Get_POST_INFO, {
    variables:{ slug },
  })

  if(loading) return <h3><Loader /></h3>

  if(errors) return <h3>Error...</h3>
  console.log(data);
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
          <Typography component="h2" variant="h4" color="primary" fontWeight={700}>
            {data.post.title}
          </Typography>
          <ArrowBackIcon onClick={()=> navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img src={data.post.coverPhoto.url} alt={data.post.slug} width='100%'
          style={{ borderRadius: 15}}/>
        </Grid>
        <Grid item xs={12} mt={7}>
          <Avatar src={data.post.author.avatar.url} sx={{width: 80 , height: 80, marginLeft: 2}}/>
        </Grid>
        <Box component='div'>
          <Typography component='p' variant="h5" fontWeight={700}>
            {data.post.author.name}
          </Typography>
          <Typography component='p' variant="p" color="text.secondary">
            {data.post.author.feild}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} mt={5}>
        <div dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html)}}></div>
      </Grid>
      <Grid item xs={12} >
        <CommentForm slug={slug} />
      </Grid>
    </Container>
  )
}

export default BlogPage