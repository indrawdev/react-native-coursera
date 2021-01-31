import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {

	static navigationOptions = {
		title: 'Contact Us'
	};

	senderMail() {
		Alert.alert(
			'Are you sure?',
			'Send to email',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Not send'),
					style: ' cancel'
				},
				{
					text: 'OK',
					onPress: () => MailComposer.composerAsync({
						recipients: ['confusion@food.net'],
						subject: 'Enquiry',
						body: 'To whom it may concern:'
					})
				}
			],
			{ cancelable: false }
		)
	}

	render() {
		return (
			<View>
				<Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
					<Card title="Contact Information">
						<Text>121, Clear Water Bay Road</Text>
						<Text>Clear Water Bay, Kowloon</Text>
						<Text>HONG KONG</Text>
						<Text>Tel: +852 1234 5678</Text>
						<Text>Fax: +852 8765 4321</Text>
						<Text>Email:confusion@food.net</Text>
					</Card>
					<Button
						title="Send Email"
						buttonStyle={{ backgroundColor: "#512DA8" }}
						icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
						onPress={this.sendMail}
					/>
				</Animatable.View>
			</View>
		);
	}
}

export default Contact;