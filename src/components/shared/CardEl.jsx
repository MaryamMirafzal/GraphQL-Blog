import { 
    Avatar, 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardHeader, 
    CardMedia, 
    Divider, 
    Typography } from "@mui/material";

import { Link } from "react-router-dom";

function CardEl({title, coverPhoto, author ,slug}) {
   
  return (
    <Card sx={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;", 
        borderRadius: 3
    }}>
        <CardHeader 
        avatar={<Avatar src={author.avatar.url} sx={{marginLeft: 2}} />}
        title={<Typography component="p" variant="p" color="text.secondary" fontWeight={600}>
            {author.name}
        </Typography>}/>
        <CardMedia component="img" height="194" image={coverPhoto.url} alt="slug"/>
        <CardContent>
            <Typography component="h3" variant="h6" color="text.primary">{title}</Typography>
        </CardContent>
        <Divider variant="middle" sx={{margin:"10px"}}/>
        <CardActions >
            <Link to={`/blogs/${slug}`} style={{textDecoration:"none", width:'100%'}}>
               <Button variant="outlined" size="small" sx={{width:'100%', borderRadius: 3}}>
                    مطالعه مقاله
               </Button>
            </Link>
        </CardActions>
    </Card>
  )
}

export default CardEl