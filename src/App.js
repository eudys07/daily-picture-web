import React from 'react';
import LoginPage from "./modules/login/container/LoginPage";
import {Route, Switch} from "react-router-dom";
import MainPage from "./modules/main/containers/MainPage";
import AuthRequired from "./modules/common/components/AuthRequired";
import NoAuthRequired from "./modules/common/components/NoAuthRequired";

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/main' component={AuthRequired(MainPage)}/>
                    <Route path='/login' component={NoAuthRequired(LoginPage)}/>
                    <Route component={NoAuthRequired(LoginPage)}/>
                </Switch>
            </div>
        );
    }
}

export default App;