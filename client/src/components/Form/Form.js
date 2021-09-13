import { useState , useEffect } from "react";
import { TextField, Button, Typography, Paper,Menu, Tooltip } from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { createPost,updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId , setOpenCreate,openCreate }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  console.log(currentId)
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p)=>p._id === currentId ) : null);
  useEffect(() => {
    if (post) { setPostData(post) }
   },[post])
  
  
  const classes = useStyles();
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (currentId) {
        
        dispatch(updatePost(currentId, postData));
       
      }
      else {

        dispatch(createPost(postData));
      }
      clear();
  };
  const storeInput = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
    console.log(postData);
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })
  };
  const closeCreate = () => {
    setOpenCreate(false)
  }
  const openCreatefunc = () => {
    setOpenCreate(true)
  }
  return (
  <>
    <div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={openCreatefunc} variant="contained" className={classes.createBtn}>
   <Tooltip title="Add a new Blog">
          <AddCircleIcon style={{fontSize:65, color:'#02aac4'}}/>
          </Tooltip>
    </Button>
    <Menu
      id="simple-menu"
      keepMounted
      open={openCreate}
          onClose={closeCreate}
          className={classes.menu}
    >
     <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Edit the ' : 'Create a New'}  Blog!</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => {
            storeInput(e);
          }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            storeInput(e);
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) => {
            storeInput(e);
          }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => {
            setPostData({...postData , tags: e.target.value.split(',')})
          }}
        />
        {/* <TextField name="selectedFile" variant="outlined" label="selectedFile" fullWidth value={postDAta.selectedFile}
                    onChange={(e) => { storeInput(e) }} /> */}
        <div className="classes fileInput" style={{margin:8}}>
          <FileBase
                  type="file"
          
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Reset
        </Button>
      </form>
      </Paper>
    </Menu>
  </div>













   
      </>
  );
};

export default Form;
