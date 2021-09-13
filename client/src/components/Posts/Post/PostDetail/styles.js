import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme=>({
  container: {
    width: `100%`,
    height: `100vh`,
    display: "flex",
    justifyContent: "center",
    background: "lightgrey",
    backgroundColor: "#FFFFFF",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill='%2306B' cx='45' cy='45' r='5'/%3E%3Cg fill='%23800' fill-opacity='1'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E")`,
        
  },
  card: {
    width: `60%`,
    maxHeight: `100vh`,
    boxShadow: "1px 1px 40px black",
      margin: 10,
      [theme.breakpoints.down('sm')]: {
        width:`100%`
    }
  },
  top: {
    width: `100%`,
    display: "grid",
    placeItems: "center",
    maxHeight: `40vh`,
      overflow: "hidden",
      

  },
  bottom: {
    height: `54%`,
    padding: 20,
      overflowY: "scroll",
     
  },
  backBtn: {
    position: "absolute",
    left: `2%`,
    top: `2%`,
    backgroundColor: "white",
    color: "#129acc",
    border: "1px solid #129acc",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    fontSize: 20,
    borderRadius: 6,
    },
    header: {
        [theme.breakpoints.down('sm')]: {
            fontSize:28
        }
  }
}));
export default useStyle;
