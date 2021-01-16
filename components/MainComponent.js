import React, { Component } from 'react';
import { View } from 'react-native';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

import { DISHES } from '../shared/dishes';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const HomeNavigator = createStackNavigator({
	Home: { screen: Home }
}, {
	navigationOptions: ({ navigation }) => ({
		headerStyle: {
			backgroundColor: "#512DA8"
		},
		headerTitleStyle: {
			color: "#fff"
		},
		headerTintColor: "#fff",
		headerLeft: <Icon name='menu'
			size={24}
			color='white'
			onPress={() => navigation.toggleDrawer()} />
	})
});

const MenuNavigator = createStackNavigator({
	Menu: {
		screen: Menu,
		navigationOptions: ({ navigation }) => ({
			headerLeft: <Icon name='menu'
				size={24}
				color='white'
				onPress={() => navigation.toggleDrawer()} />
		})
	},
	Dishdetail: { screen: Dishdetail }
}, {
	initialRouteName: 'Menu',
	navigationOptions: {
		headerStyle: {
			backgroundColor: '#512DA8'
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			color: '#fff'
		}
	}
});

const ContactNavigator = createStackNavigator({
	Contact: { screen: Contact }
}, {
	navigationOptions: ({ navigation }) => ({
		headerStyle: {
			backgroundColor: "#512DA8"
		},
		headerTitleStyle: {
			color: "#fff"
		},
		headerTintColor: "#fff",
		headerLeft: <Icon name='menu'
			size={24}
			color='white'
			onPress={() => navigation.toggleDrawer()} />
	})
});

const AboutNavigator = createStackNavigator({
	About: { screen: About }
}, {
	navigationOptions: ({ navigation }) => ({
		headerStyle: {
			backgroundColor: "#512DA8"
		},
		headerTitleStyle: {
			color: "#fff"
		},
		headerTintColor: "#fff",
		headerLeft: <Icon name='menu'
			size={24}
			color='white'
			onPress={() => navigation.toggleDrawer()} />
	})
});

const MainNavigator = createDrawerNavigator({
	Home:
	{
		screen: HomeNavigator,
		navigationOptions: {
			title: 'Home',
			drawerLabel: 'Home'
		}
	},
	About:
	{
		screen: AboutNavigator,
		navigationOptions: {
			title: 'About Us',
			drawerLabel: 'About Us'
		},
	},
	Menu:
	{
		screen: MenuNavigator,
		navigationOptions: {
			title: 'Menu',
			drawerLabel: 'Menu'
		},
	},
	Contact:
	{
		screen: ContactNavigator,
		navigationOptions: {
			title: 'Contact Us',
			drawerLabel: 'Contact Us'
		},
	}
}, {
	drawerBackgroundColor: '#D1C4E9'
});


class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null
		};
	}

	onDishSelect(dishId) {
		this.setState({ selectedDish: dishId })
	}

	render() {

		return (
			<View style={{ flex: 1 }}>
				<MainNavigator />
			</View>
		);
	}
}

export default Main;