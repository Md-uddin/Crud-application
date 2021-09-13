import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
   
  }, menu: {
    width: `50%`,
    marginLeft: `auto`,
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      width:`85%`
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  createBtn: {
    width: 50,
    borderRadius: 40,
    height: 60,
    background: 'white',
    boxShadow:'none'
  }
}));