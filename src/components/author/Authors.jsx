import React from "react";
import { useQuery } from "@apollo/client"
import { GET_AUTHORS_INFO } from "../../graphQL/queries"
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Authors() {
  const { loading , data , errors } = useQuery(GET_AUTHORS_INFO)
  console.log(data);

  if(loading) return <h3>Loading ...</h3>

  if(errors) return <h3>Error...</h3>
  return (
    <Grid container sx={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;", 
      borderRadius: 3
  }}>
    {
      data.authors.map( (aut, index) => 
        <React.Fragment key={aut.id}>
        <Grid item xs={12}  padding={2}>
          <Link to={`/authors/${aut.slug}`} style={{display:'flex', textDecoration:'none', alignItems:'center'}}>
          <Avatar src={aut.avatar.url} sx={{marginLeft: 2}}/>
          <Typography component="p" variant="p" color="text.secondary">
            {aut.name}
          </Typography>
          </Link>
        </Grid>
        {
          index !== data.authors.length -1 &&
          (<Grid item xs={12}>
          <Divider variant="middle"  />
          </Grid>)
        }
        
       </React.Fragment>
      )
    }
    </Grid>
  )
}

export default Authors