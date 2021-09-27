import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'




import Profile from '../Profile'
import Home from '../Home'
import Notification from '../Favorite'
import Setting from '../Setting'
import Splash1 from '../splash/Splash'
import Login from '../Login'
import TabRoutes from './TabRoutes'







const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();



export default Navigation = () => {
    return (
        <NavigationContainer>
             <Stack.Navigator  
             screenOptions={{headerShown:false,}} initialRouteName={'login'}>
               {/* {MainStack(Stack)}  */}
               <Stack.Screen component={Splash1} name="splash1"/>

               <Stack.Screen component={TabRoutes} name="dashboard"/>
               <Stack.Screen component={Login} name="login"/>

            </Stack.Navigator> 
        </NavigationContainer>

    )
}

