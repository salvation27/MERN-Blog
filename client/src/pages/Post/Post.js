import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment'
import {toast} from 'react-toastify'
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useDispatch} from 'react-redux'
import { deletePost,likePost } from "../../store/actions/posts";
import { useHistory } from "react-router-dom"
const Post = ({item,setCurrentId}) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const delPost  = () =>{
    dispatch(deletePost(item._id))
    toast.success(`Удален пост ${item.creator}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

const updatePost = ()=> {
  toast.success(`Запрос на изменение ${item.creator}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
    // перенаправляет на другую страницу
    history.push("/create");
  return setCurrentId(item._id)

}

const likedPost = () => {
  dispatch(likePost(item._id))
  toast.success(`Добавлен лайк автору ${item.creator}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

  return (
    <div className="post_item">
      <Card style={{background:'#ccc'}} sx={{ width: 345 }}>
        <CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
              {item.creator}
            </Typography>
          <CardMedia
            component="img"
            height="200"
            image={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
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
          <Button onClick={likedPost} size="small" color="primary">
            Like {' '} {item.likeCount}
          </Button>
          <Button  onClick={updatePost} size="small" color="primary">
            Update
          </Button>
          <Button size="small" onClick={delPost}  color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
