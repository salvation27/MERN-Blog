import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import { Button, CardActionArea, CardActions } from '@mui/material';

const Post = ({item}) => {
  return (
    <div className="post_item">
      <Card style={{background:'#ccc'}} sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.message}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Time: {moment(item.createdAt).fromNow()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {
              item.tags.map(tag=>`#${tag}`)
            }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Like
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
