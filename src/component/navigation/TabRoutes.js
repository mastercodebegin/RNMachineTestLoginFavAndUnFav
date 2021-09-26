import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Avatar } from 'react-native-paper';


import Profile from '../Profile'
import Home from '../Home'
import Notification from '../Favorite'
import Setting from '../Setting'
import Splash1 from '../splash/Splash'
import Login from '../Login'
import SettingsIcon from '../../assets/settings.png'
import Favorite from '../Favorite';
import FavIcon from '../../assets/lover.png'
import ProfileIcon from '../../assets/user.png'
import HomeIcon from '../../assets/home.png'







export default function TabRoutes() {
    const Tab = createBottomTabNavigator();
    tabBarConfig=(focused,name,icon)=>{

    }

    return (
        <Tab.Navigator
            // screenOptions={{headerShown:false}}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {

                },
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen component={Home} name={'Home'}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Avatar.Image size={30} source={HomeIcon} style={{backgroundColor:'white'}} />),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize: 10,color:focused?'blue':'gray' }}>{focused ? 'Home' : 'unfocus'}</Text>
                    ),
                   

                }}
            />

            <Tab.Screen component={Favorite} name={'Favorite'}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Avatar.Image size={30} source={FavIcon} style={{backgroundColor:'white'}} />),
                tabBarLabel: ({ focused }) => (
                    <Text style={{ fontSize: 10,color:focused?'blue':'gray' }}>{focused ? 'Faverite' : 'unfocus'}</Text>
                )

            }}
            />
            <Tab.Screen component={Profile} name={'Profile'} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Avatar.Image size={30} source={ProfileIcon} style={{backgroundColor:'white'}} />),
                tabBarLabel: ({ focused }) => (
                    <Text style={{ fontSize: 10,color:focused?'blue':'gray' }}>{focused ? 'Profile' : 'unfocus'}</Text>
                )

            }}/>
            <Tab.Screen component={Setting} name={'Setting'} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <Avatar.Image size={30} source={SettingsIcon} style={{backgroundColor:'white'}}/>),
                tabBarLabel: ({ focused,route }) => (
                    <Text style={{ fontSize: 10,color:focused?'blue':'gray' }}>{focused ? 'Setting': 'unfocus'}</Text>
                )

            }}/>
        </Tab.Navigator>
    )
}
