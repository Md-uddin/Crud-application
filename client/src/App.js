import React,{useEffect,useState} from 'react'
import {Container,AppBar, Typography,Grow,Grid, Button, Box} from '@material-ui/core'
import blogPic from './images/Blog_pic.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form.js'
import useStyles from './styles'
import {getPosts} from './actions/posts'
import { useDispatch } from 'react-redux'
import './App.css'


const App = () => {
  const [openCreate, setOpenCreate] = useState(false)
    const [currentId, setCurrentId] = useState(null);
    const [update,setUpdate] = useState(false)
    const dispatch = useDispatch(console.log('dispatched'));
    const classes = useStyles();
    useEffect(() => {
        dispatch(getPosts());
        console.log('app.js dispatch')
        }
        , [currentId, dispatch])
 
    return (
        <div>
            <Container maxwidth="lg">
                <AppBar position="static" color="inherit" className={classes.appBar}>
                    <Typography variant="h2" align ="center">Blogs</Typography>
                    <img className={classes.img} src={blogPic} alt="memories" height="60"/>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justifyContent="space-between" alignItems="stretch" className={classes.mainContainer} spacing={3}>
                            <Grid item xs={12} sm={11} lg={11}>
                                <Posts setCurrentId={setCurrentId} setUpdate={setUpdate} openCreate={openCreate} setOpenCreate={setOpenCreate} />
                            </Grid>
                           <Box className={classes.createBtn}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} openCreate={openCreate} setOpenCreate={setOpenCreate} />
                          </Box>
                           
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App;
