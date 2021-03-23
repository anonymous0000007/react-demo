import HeaderStyle from "./header.module.scss";
import { AppBar, Toolbar, Typography, makeStyles, Theme } from "@material-ui/core";

function HeaderComponent():JSX.Element {

    // header material-ui styles defined;
    const useStyles = makeStyles((theme:Theme) => ({
        root: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: "#134C8B",
            padding: "15px 50px 15px 120px",
            boxShadow: "none"
        },
        logo: {
            marginRight: theme.spacing(2),
            fontFamily: "TitleFont",
            fontSize: "35px"
        },
        title: {
            flexGrow: 1,
            fontFamily: "TitleFont",
            fontSize: "35px",
            textAlign: "left"
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        XYZ NAME
                    </Typography>
                    <Typography variant="h6" className={classes.logo}>
                        Logo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default HeaderComponent;