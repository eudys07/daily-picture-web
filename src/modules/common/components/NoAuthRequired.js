import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

export default function NoAuthRequired(Component) {
    class WrapperClass extends React.Component {
        componentWillMount() {
            if(localStorage.getItem('token'))
                this.props.history.push('/main/home');
        }

        render() {
            return <Component {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.auth.currentUser
        }
    }

    return withRouter(connect(mapStateToProps)(WrapperClass));
}