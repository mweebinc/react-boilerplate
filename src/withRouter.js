import {useLocation, useNavigate, useParams} from "react-router-dom";

/**
 * A high-order component responsible for adding navigation props.
 * @param {React.Component} Component - The component to be wrapped.
 * @returns {function()} - A function that returns the wrapped component.
 */
function withRouter(Component) {
    return () => {
        const navigate = useNavigate();
        const params = useParams();
        const location = useLocation();
        const search = new URLSearchParams(location.search);
        const query = Object.fromEntries(search);
        return <Component
            navigate={navigate}
            params={params}
            query={query}
            location={location}/>;
    }
}

export default withRouter;
