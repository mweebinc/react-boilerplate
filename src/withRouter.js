import {useNavigate, useParams} from "react-router-dom";

/**
 * A high order component responsible to add navigation props
 * @param Component
 * @returns {function()}
 */
function withRouter(Component) {
    return () => {
        const navigate = useNavigate();
        const params = useParams();
        return <Component navigate={navigate} params={params}/>;
    }
}

export default withRouter;
