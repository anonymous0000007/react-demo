import SidebarStyle from "./sidebar.module.scss";
import { useState } from "react";
import { Drawer, Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, SvgIcon, Theme } from "@material-ui/core";
import { ReactComponent as FirstAidKitIcon } from "../../assets/first-aid-kit.svg";

function SidebarComponent ():JSX.Element {

    let [sidebarMenuList, SetSidebarMenuList]:any = useState(["Estadísticas", "Médicos", "Trabajadores", "Usuarios", "Alcoholimetros", "Bases"]);

    // header material-ui styles defined;
    const useStyles = makeStyles((theme:Theme) => ({
        root: {
            flexGrow: 1,
        },
        drawer: {
            width: 240,
            flexShrink: 0,
        },
        drawerPaper: {
            width: 240,
            backgroundColor: "#134C8B",
            zIndex: -1,
            color: "white"
        },
        drawerContainer: {
            overflow: "hidden"
        },
        dividerHide: {
            opacity: 0,
            marginBottom: "5rem"
        },
        divider: {
            backgroundColor: "white",
            opacity: 0.1,
            margin: "5px 20px 12px 20px"
        }
    }));

    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <Divider className={classes.dividerHide} />
                <List>
                    {sidebarMenuList.map((menu:string):JSX.Element => (
                    <ListItem button key={menu}>
                        <ListItemIcon><SvgIcon component={FirstAidKitIcon} viewBox="0 0 600 476.6"></SvgIcon></ListItemIcon>
                        <ListItemText primary={menu} />
                    </ListItem>
                    ))}
                </List>
                <Divider classes={{root: classes.divider}}/>
                <List>
                    {["Salir"].map((menu:string):JSX.Element => (
                    <ListItem button key={menu}>
                        <ListItemIcon>{}</ListItemIcon>
                        <ListItemText primary={menu} />
                    </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
}

export default SidebarComponent;