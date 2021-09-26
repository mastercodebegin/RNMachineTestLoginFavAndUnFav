import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import TabRoutes from './navigation/TabRoutes'
import { BottomNavigation, Text, Avatar, List } from 'react-native-paper';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import phone from '../assets/phones.jpeg'
import favorite from '../assets/favorite.png'
import unfavorite from '../assets/unfavorite.png'
import Icon from '../assets/phones.jpeg'

import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Favorite = ({navigation}) => {
    const [data, setData] = useState([

        // { id:1,name: 'Vivo', price: 1000, rating: 8, icon: phones,fav:false  },
        // { id:2,name: 'Samsung', price: 900, rating: 1, icon: ironman,fav:false  },
        // { id:3,name: 'Apple', price: 899, rating: 6, icon: ironman,fav:false  },
        // { id:4,name: 'Oppo', price: 100, rating: 5, icon: ironman,fav:false  },
        // { id:5,name: 'Micromax', price: 200, rating: 4, icon: ironman,fav:false  },
        // { id:6,name: 'MI', price: 500, rating: 3, icon: ironman,fav:false }
    ])
    const [isReloadRequired, setDIsReloadRequired] = useState(false)
    const isFocused = useIsFocused();


    useEffect(async () => {
        if (isFocused) {
         getFavoriteData();
        }


    }, [isFocused])
    getFavoriteData = async = async () => {
        const user = await AsyncStorage.getItem('userdata')
        // console.log(user)

        if (user) {
            let userdata = JSON.parse(user)
            console.log(typeof data)
            console.log(data[1])
            favData = userdata.filter(i => i.fav == true)
            setData(favData)


        }

    }
    const renderItem = (item, index) => {
        let icon = item.icon
        return (
            <>
                <View style={[styles.flatlistRenderMainView, { justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={{ backgroundColor: 'white', width: '99%', flexDirection: 'row', }}>
                        <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                            <Avatar.Image size={35} source={Icon} style={{ backgroundColor: 'white' }} />
                            {console.log(icon)}
                        </View>
                        <View style={{ flex: .6, flexDirection: 'row' }}>
                            <View style={{ flex: .4, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Name </Text>
                                <Text>Price </Text>
                                <Text>Rating </Text>



                            </View>
                            <View style={{ backgroundColor: null, flex: .4, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                                <Text>{item.rating}</Text>
                            </View>


                        </View>
                        <View style={{ flex: .2, backgroundColor: null, justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar.Image size={40} source={item.fav ? favorite : unfavorite} style={{ backgroundColor: 'white' }} />
                        </View>


                    </View>



                </View>
                <View style={{ backgroundColor: '#ccc', width: '100%', height: 1, margin: 10 }}></View>
            </>
        )
    }
    return (
        <View style={styles.body}>
            <View style={{ flex: .3, backgroundColor: 'white' }}>

            </View>
            <View style={{ paddingBottom: 8 }}><Text>Favorite Data</Text></View>
            <View style={{ flex: .6, }}>
                {/* {rebderItem(userData[0])} */}
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => renderItem(item, index)}
                />

            </View>
            <View style={{ flex: .1, backgroundColor: 'white' }}>

            </View>

        </View>



    )

}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center', 
        backgroundColor: 'white'

    },
    flatlistRenderMainView: {
        flex: .2,
        backgroundColor: 'white',
        flexDirection: 'row',

        // marginTop: 20,


    }
})