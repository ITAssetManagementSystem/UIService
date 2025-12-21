import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Dashboard</Button>
                <Button color="inherit" component={Link} to="/assets">Assets</Button>
                <Button color="inherit" component={Link} to="/employees">Employees</Button>
                <Button color="inherit" component={Link} to="/assignments">Assignments</Button>
            </Toolbar>
        </AppBar>
    );
}
