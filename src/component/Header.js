import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default Header=({name})=> {
    
        return (

            <LinearGradient colors={['#3f638e', '#3294a8',]}
               
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}>
                <View style={styles.body}>

                    <View style={styles.headerTextAndIconMainView}>
                        
                       
                        <View style={[styles.headerDashboardTextView]}>
                            <Text style={styles.headerDashboardText}>{name}</Text>
                        </View>
                        <View style={styles.headerLogoview}>
                        </View>


                    </View>


                </View>
            </LinearGradient>



        )
    
}

const styles = StyleSheet.create({
    body: {
        // backgroundColor:'red',
        height: 70
    },
    
    headerTextAndIconMainView: {
        flexDirection: 'row',
       // justifyContent: 'flex-start',
        // alignContent: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    headerDashboardTextView: {
        width: '100%',
        height: 70,
        justifyContent:'center',
        alignItems:'center'
    },
    headerDashboardText: {
        color: 'white',
        fontSize: 22,
        marginLeft: 50,
        fontWeight: 'bold',
        
    },
    headerLogoview: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
        marginRight:30

    },
    headerLogo: {
        height: 40,
        width: 40,
        borderRadius:20

    }

})