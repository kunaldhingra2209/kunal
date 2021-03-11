import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles(theme =>({
    // buttonStyle:(props)=>{
    //     return {
    //         color: props.cool ? "blue" : "red",
    //         backgroundColor: props.cool ? "orange" : "yellow"
    //     }
    // }
    buttonStyle:props =>{
        return{
        color: props.cool ? "blue" : "red",
        [theme.breakpoints.up("sm")] : {
            color:"cyan"
        },
        backgroundColor: props.cool ? "orange" : "yellow"
    }}

}))

export default function Hook(props){
    const classes = useStyles(props);
    return(
        <Button  className={classes.buttonStyle}>the button</Button>
    )
}