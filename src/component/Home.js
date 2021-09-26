import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import TabRoutes from './navigation/TabRoutes'
import { BottomNavigation, Text, Avatar, List } from 'react-native-paper';

import favorite from '../assets/favorite.png'
import unfavorite from '../assets/unfavorite.png'
import Icon from '../assets/phones.jpeg'

import { ListItem } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';


export default Home = () => {
    const [data, setData] = useState([

        // { id:1,name: 'Vivo', price: 1000, rating: 8, icon: phones,fav:false  },
        // { id:2,name: 'Samsung', price: 900, rating: 1, icon: ironman,fav:false  },
        // { id:3,name: 'Apple', price: 899, rating: 6, icon: ironman,fav:false  },
        // { id:4,name: 'Oppo', price: 100, rating: 5, icon: ironman,fav:false  },
        // { id:5,name: 'Micromax', price: 200, rating: 4, icon: ironman,fav:false  },
        // { id:6,name: 'MI', price: 500, rating: 3, icon: ironman,fav:false }
    ])

    useEffect(async () => {
        const user = await AsyncStorage.getItem('userdata')
        // console.log(user)

        if (user) {
            let userdata = JSON.parse(user)
            console.log(typeof data)
            console.log(data[1])
            setData(userdata)


        }

    }, [])
    const markFavriteORUnFavorite = async (item, index) => {
        if (data) {
            const favoriteData = data.filter(i => i.id !== item.id)

            console.log('index', index)
            console.log(item)

            item.fav = !item.fav
            favoriteData.splice(index, 0, item)

            console.log(item)
            console.log(favoriteData)
            AsyncStorage.setItem('userdata', JSON.stringify(favoriteData))
            setData(favoriteData)
        }

    }
    const renderItem = (item, index) => {
        let icon = item.icon
        return (
            <>
                <View style={[styles.flatlistRenderMainView, { justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={styles.renderItemWrapperChiledView}>
                        <View style={styles.imageView}>
                            <Avatar.Image size={35} source={Icon} style={{ backgroundColor: 'white' }} />
                            {console.log(icon)}
                        </View>
                        <View style={{ flex: .6, flexDirection: 'row' }}>
                            <View style={styles.itemLabel}>
                                <Text>Name </Text>
                                <Text>Price </Text>
                                <Text>Rating </Text>



                            </View>
                            <View style={styles.itemObjectView}>
                                <Text>{item.name}</Text>
                                <Text>{item.price}</Text>
                                <Text>{item.rating}</Text>
                            </View>


                        </View>
                        <View style={ styles.favoriteIconView}>
                            <TouchableOpacity onPress={() => { markFavriteORUnFavorite(item, index) }}>
                                <Avatar.Image size={40} source={item.fav ? favorite : unfavorite} style={{ backgroundColor: 'white' }} />
                            </TouchableOpacity>
                        </View>


                    </View>



                </View>
                <View style={styles.seperateBorderLine}></View>
            </>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.body}>
                <View style={{ flex: .2, backgroundColor: 'white' }}>
                    <Header name="Dashboard" />
                </View>
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
        </SafeAreaView>



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
    },
    seperateBorderLine: {
        backgroundColor: '#ccc',
        width: '100%',
        height: 1,
        margin: 10

    },
    imageView: {
        flex: .2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    renderItemWrapperChiledView:{
        backgroundColor: 'white', 
        width: '90%', 
        flexDirection: 'row',
    },
    itemLabel:{
        flex: .4, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    itemObjectView:{
        
        flex: .4, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    favoriteIconView:{
        flex: .2, 
        
        justifyContent: 'center', 
        alignItems: 'center'
    }
})