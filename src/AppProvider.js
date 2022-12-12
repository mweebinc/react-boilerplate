import React from 'react';
import Context from './AppContext';


class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    setGlobalState(state) {
        this.setState(state);
    }

    getValue() {
        return {
            ...this.state,
            setGlobalState: this.setGlobalState.bind(this),
        };
    }

    render() {
        return <Context.Provider value={this.getValue()}>{this.props.children}</Context.Provider>;
    }
}

export default AppProvider;
