import BasePage from "../../base/BasePage";
import NavBar from "../../components/Navbar";

class HomePage extends BasePage {

    render(){
        return(
            <>
                <NavBar className="shadow-sm"/>
            </>
        );
    }
}

export default HomePage;