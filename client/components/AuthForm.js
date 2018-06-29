import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);

        this.state = { email: '', password: ''}
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state)
    }

    render() {
        return(
            <div className="row">
                <form onSubmit={this.onSubmit.bind(this)} className="col s4">
                    <div className="input-field">
                        <input placeholder="Email" value={this.state.email} onChange={event => this.setState({ email: e.target.value})} type="text"/>
                    </div>
                    <div className="input-field">
                        <input placeholder="Password" value={this.state.password} onChange={event => this.setState({ password: e.target.value})} type="password"/>
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;