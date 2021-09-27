import React, { useEffect } from 'react'
import { View, Text, } from 'react-native'
import { Button } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Async from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Splash = ({ navigation}) => {
    const data =[
        { id:1,name: 'Vivo', price: 1000, rating: 8, icon:'../assets/phones.jpeg',fav:false  },
        { id:2,name: 'Samsung', price: 900, rating: 1, icon:'../assets/phones.jpeg',fav:false  },
        { id:3,name: 'Apple', price: 899, rating: 6, icon:'../assets/phones.jpeg',fav:false  },
        { id:4,name: 'Oppo', price: 100, rating: 5, icon:'../assets/phones.jpeg',fav:false  },
        { id:5,name: 'Micromax', price: 200, rating: 4, icon:'../assets/phones.jpeg' ,fav:false},
        { id:6,name: 'MI', price: 500, rating: 3, icon:'../assets/phones.jpeg',fav:false }
    ]
    

    useEffect(async () => {


        const splash = await AsyncStorage.getItem('splashisrequired')

        console.log(splash)
        if (splash==='false') {
            navigation.navigate('login')
        }
        else {
            AsyncStorage.clear()
            await AsyncStorage.setItem('splashisrequired', 'false')
            await AsyncStorage.setItem('userdata',JSON.stringify(data))

            setTimeout(() => {
                navigation.navigate('login')
            }, 1000);

        }
    })


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25 }}>
                        Hi splash 1

                    </Text>

                </View>
            </View>
        </SafeAreaView>
    )
}
