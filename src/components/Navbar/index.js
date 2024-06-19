import React from "react";
import {Layout,NavBar as Nav} from "nq-component";
import {useLocation} from "react-router-dom";



function NavBar(props) {
    const {collapsed, setCollapse} = React.useContext(Layout.Context);
    const location = useLocation();
    function onClickNavigate() {
        setCollapse(!collapsed);
    }
    // listen to the changes of URL
    React.useEffect(() => {
        setCollapse(false);
    }, [location, setCollapse])

    return <Nav
        className="shadow-sm"
        logo="/logo.svg"
        onClickNavigate={onClickNavigate}
        {...props}/>
}

export default NavBar;
