import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Card, Icon, Input, CheckBox } from 'react-native-elements';
import { SecureStore } from 'expo';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			remember: false
		}
	}

	componentDidMount() {
		SecureStore.getItemAsync('userinfo').then((userdata) => {
			let userinfo = JSON.parse(userdata);
			if (userinfo) {
				this.setState({ username: userinfo.username });
				this.setState({ password: userinfo.password });
				this.setState({ remember: userinfo.remember });
			}
		})
	}

	static navigationOptions = {
		title: 'Login'
	};

	handleLogin() {
		console.log(JSON.stringify(this.state));
		if (this.state.remember) {
			SecureStore.setItemAsync('userinfo',
				JSON.stringify({ username: this.state.username, password: this.state.password, remember: this.state.remember }))
				.catch((error) => console.log('Could not save user info', error));
		} else {
			SecureStore.deleteItemAsync('userinfo')
				.catch((error) => console.log('Could not delete user info', error));
		}
	}

	render() {
		return (
			
		);
	}

}

export default Login;