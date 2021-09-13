import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    


    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    alignItems: 'center',
        background:'linear-gradient(to right , white ,#ace0e8,white,white ,#ace0e8,white )'
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection:"column-reverse"
    }
  },
  createBtn: {
    position: 'fixed',
    right: 40,
    bottom: '60px',
    width: 50,
    height: 50,
    borderRadius:`50%`
    
    
  }


}))