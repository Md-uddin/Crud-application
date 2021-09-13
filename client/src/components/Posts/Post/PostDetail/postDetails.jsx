import { Box, Button, Card, Typography } from "@material-ui/core";
import useStyle from "./styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
const PostDetails = (props) => {
    const classes = useStyle();
    const { title, tags, creator, message,selectedFile } = props.location.state.post;
    console.log(props.location.state.post,'from post details')
    return (
        <div className={classes.container}>
            <Link to="/" className={classes.backBtn} variant="contained"> <ArrowBackIcon /> See all blogs</Link>
            <Card className={classes.card}>
                <Box className={classes.top}>
                <Typography>
                        <img src={selectedFile} alt="Post image is not available" style={{width:`100%`,maxHeight:`39vh`,marginTop:5}} />
                </Typography>
                </Box >
                <Box className={classes.bottom}>
                <Typography variant="h2" className={classes.header}>
                   {title}
                </Typography>
                <Typography variant="h6" style={{color:'#5297b3'}}>
                  {tags.map(tag=> (`#${tag}. `))}
                </Typography>
                <Typography variant="h5">
                <span style={{color:'grey',fontSize:18}}>Author:-</span>   {creator}
                </Typography>
                <Typography variant ="h6">
                  {message}
                </Typography>
                </Box>
           </Card>
        </div>
    )
}

export default PostDetails;
