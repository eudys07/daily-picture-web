import React from 'react';
import styled from 'styled-components';
import Input from "../../common/components/Input";

const LoginWrapper = styled.div`
    margin: 0 auto;
    position: relative;
    top: 100px;
    width: 500px;
`;

const CardWithBoxShadow = styled.div`
    box-shadow: 2px 2px 17px 1px rgba(0, 0, 0, 0.3);
`;

const LoginForm = ({username, password, onInputChangeHandler, onSubmit}) => (
    <LoginWrapper className="row">
        <CardWithBoxShadow className="col s12 z-depth-6 card-panel">
            <form className="login-form" onSubmit={onSubmit}>
                <div className="row">
                    <div className="input-field col s12 center">
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <Input
                            name="username"
                            value={username}
                            onChange={onInputChangeHandler}
                            type="text"
                            textLabel="Username"
                            icon="person"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12">
                        <Input
                            name="password"
                            value={password}
                            onChange={onInputChangeHandler}
                            type="password"
                            textLabel="Password"
                            icon="lock"/>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <button type="submit" className="btn blue waves-effect waves-light col s12">Login</button>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6 m6 l6">
                        <p className="margin medium-small"><a>Register Now!</a></p>
                    </div>
                    <div className="input-field col s6 m6 l6">
                        <p className="margin right-align medium-small"><a>Forgot
                            password?</a></p>
                    </div>
                </div>
            </form>
        </CardWithBoxShadow>
    </LoginWrapper>
);

export default LoginForm;
