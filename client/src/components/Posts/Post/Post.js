import React from "react";
import useStyles from "./styles";
import {Link} from 'react-router-dom'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from 'react-redux';
import { deletePost,getPosts,likePost } from "../../../actions/posts.js";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Tooltip, IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import moment from 'moment'

const Post = ({ post, setCurrentId,setUpdate,setOpenCreate }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
      console.log(post)
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        {console.log("working till")}
        <Typography variant="h6">{post.creator}</Typography>
        {/* <Typography variant="h6">{moment(post.createdAt)}</Typography> */}
      </div>
      <div className={classes.overlay2}>
        <Button
          
          style={{ color: "white" ,fontSize:"25px"}}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
          fontSize="25px"
        >
          <Tooltip title="Edit this post"><MoreHorizIcon onClick={()=>{setOpenCreate(true)}}/>
          </Tooltip></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" >{post.tags.map((tag)=>`#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary"  >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Tooltip title="Like">
        <Button size="small" color="primary" onClick={() => {
          dispatch(likePost(post._id))
          
        }}>
        
          <ThumUpAltIcon fontSize="small" />
        
        &nbsp; Like &nbsp; {post.LikeCount}
        </Button>
        </Tooltip>
        {/* view */}
        <Link  to={{
                            pathname: `/post/${ post._id }`,
                            state: { post: post }
                        }} className={classes.view}>
          <VisibilityIcon/> &nbsp;&nbsp;view
        </Link>
        {/* delete  */}
        <Tooltip title="Delete" style={{color:'red'}}>    
        <Button size="small" color="primary" onClick={() => {
          dispatch(deletePost(post._id))
          // dispatch(getPosts())   
         
        }}>
      
          <DeleteIcon />
     
          Delete
        </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Post;
