import * as React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../../common/components/Header";
import HomePage from "../../home/containers/HomePage";
import * as actions from '../../login/actions';
import AuthRequired from "../../common/components/AuthRequired";

class MainPage extends React.Component {

    logout = () => {
        this.props.dispatch(actions.logout())
            .then(() => {
                localStorage.removeItem('token');
                this.props.history.push('/login');
            });
    };

    render() {
        return (
            <div>
                <Header logout={this.logout}/>

                <div className="container">
                    <Switch>
                        <Route path='/' component={HomePage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(MainPage));