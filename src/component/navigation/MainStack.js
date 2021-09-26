import React from 'react'
import { View, Text } from 'react-native'
import DrawerNavigation from './DrawerNavigation'
import Splash1 from './component/splash/Splash1'
import TabRoutes from './TabRoutes'

export default function MainStack(Stack) {
    return (
        <>
        <Stack.Screen name={'tabRoutes'} component={TabRoutes}/>
        <Stack.Screen name={'splash'} component={Splash1}/>

        </>
    )
}
