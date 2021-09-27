import React, { useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Modal } from 'react-native'
import { Button,TextInput} from 'react-native-paper';
// import { Input } from 'react-native-elements/dist/input/Input';
import { Formik } from 'formik';
import * as yup from 'yup'


export default Login = ({ navigation }) => {
    const email = 'admin@test.com'
    const pass = '1234'
    useEffect(()=>{
        console.log('useeffect')
    })
    
    
    const validationSchema = yup.object({
        email: yup.string().required().email(),
        pass: yup.string().required()

    })
    const submit=(valuse)=>{
        console.log(valuse)
       
        
        if(valuse.email.toLowerCase()==email && valuse.pass==pass)
        {
            navigation.navigate('dashboard')
        }
        else{alert('invalid login ')}
        

    } 
    return (
        //{({ handleChange, handleBlur, handleSubmit, values }) => (

        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Formik
                initialValues={{ email: '', pass: '' }}
                validationSchema={validationSchema}
                onSubmit={(valuse)=>{submit(valuse)}}

            >
                {(props) => (
                    <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center',}}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                       <View style={{width:'100%' ,justifyContent:'flex-start',alignItems:'flex-start'}}>
                        
                        <TextInput style={styles.input} 
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        mode='outlined'
                        label='Email'
                        />
                           <View style={{ justifyContent: 'center', width: '100%', alignItems: 'flex-start' }}>
                            <Text style={{ color: 'red', margin: 4 }}>{props.touched.email && props.errors.email}</Text>
                        </View>
                        <TextInput placeholder={'Password'} style={styles.input} 
                        onChangeText={props.handleChange('pass')}
                        onBlur={props.handleBlur('pass')}
                        mode='outlined'
                        label='Password'
                        />
                           <View style={{ justifyContent: 'center', width: '100%', alignItems: 'flex-start' }}>
                            <Text style={{ color: 'red', margin: 4 }}>{props.touched.pass && props.errors.pass}</Text>
                        </View>

                            </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Button mode='contained' onPress={() => { props.handleSubmit() }} >Login</Button>
                            {/* <Button title={'signup'} onPress={() => { submit('signup') }} style={{ marginLeft: 10 }} /> */}
                        </View>
                       
                        
                    </View>
                )}
            </Formik>

        </SafeAreaView>

    )
}


const styles=StyleSheet.create({
    input:{
    height: 45,
    // borderWidth: 1,
    // padding: 10,
    marginTop:15,
    fontSize:15,
    width:'100%'
    },
    
})






