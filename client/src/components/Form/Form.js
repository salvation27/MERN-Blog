import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RedBar from "../../components/RedBar/RedBar";
import FileBase from 'react-file-base64';
import { useDispatch,useSelector} from "react-redux";
import {createPost,updatePost} from '../../store/actions/posts'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom"



const Form = ({currentId,setCurrentId}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });


  const post = useSelector(state=> currentId ? state.posts.find(p=>p._id ===currentId):null)

console.log('currentId',currentId)
    useEffect(()=>{
    if(post) setPostData(post)
    },[post])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentId) {
      dispatch(updatePost(currentId,postData))
      toast.success('Карточка обновлена', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      dispatch(createPost(postData))
      toast.success('Карточка создана', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    clear()
    history.push("/posts");
  };

const clear = () => {
  setCurrentId(null)
  setPostData({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })
  toast.success('форма очищена', {
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
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        sx={{
          width: 500,
          p: 2,
          margin: "0 auto",
          border: "1px solid grey",
          marginTop: "30px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{currentId ? 'Update':'Create'}Post</h2>
        <TextField
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          fullWidth
          label="Creator"
          color="secondary"
          variant="outlined"
          name='creator'
        />
        <RedBar />

        <TextField
          value={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          }
          fullWidth
          label="Title"
          color="secondary"
          variant="outlined"
          name='title'
        />
        <RedBar />
        <TextField
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          fullWidth
          label="Message"
          color="secondary"
          variant="outlined"
          name='message'
        />
        <RedBar />
        <TextField
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags:e.target.value.split(',') })
          }
          fullWidth
          label="Tags"
          color="secondary"
          variant="outlined"
          name='tags'
        />
        <RedBar />
        <FileBase
        type='file'
        multiple={ false }
        onDone={({base64})=>setPostData({ ...postData, selectedFile: base64 })} 
         />
         <RedBar />
        <Button type="submit" fullWidth variant="contained" disableElevation>
        {currentId ? 'Update':'Create'} Post
        </Button>
        <RedBar />
        <Button  fullWidth variant="contained" onClick={clear} disableElevation>
          Clear
        </Button>
      </Box>
    </div>
  );
};

export default Form;
