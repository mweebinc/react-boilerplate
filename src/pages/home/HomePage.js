import BasePage from "../../base/BasePage";
import {NavBar} from "nq-component";

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