import React from 'react';
import LoginForm from "../components/LoginForm";
import {connect} from "react-redux";
import * as actions from "../actions";
import {withRouter} from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        let {username, password} = this.state;
        let {dispatch} = this.props;

        dispatch(actions.login(username, password))
            .then(data => {
                localStorage.setItem('token', data.token);

                dispatch(actions.loadCurrentUser())
                    .then(user => {
                        this.props.history.push('/main')
                    });
            });
    };

    onInputChangeHandler = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        this.setState({
            [field]: value
        });
    };

    render() {
        return (
            <div>
                <LoginForm
                    {...this.state}
                    onSubmit={this.onSubmit}
                    onInputChangeHandler={this.onInputChangeHandler}/>
            </div>
        )
    }
}

export default withRouter(connect()(LoginPage));
