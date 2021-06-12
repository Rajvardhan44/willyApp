import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, Alert} from 'react-native';
import firebase from 'firebase'
import { log } from 'react-native-reanimated';

export default class LoginScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            EmailId:'',
            Password:''
        }
    }

    login=async(Email,passcode)=>{
       if(Email && passcode){
           try{
            const response = await firebase.auth().signInWithEmailAndPassword(Email,passcode)
            if(response){
                this.props.navigation.navigate('Transaction')
            }
           }

           catch (error){
            switch(error.code){
                case 'User-not-found':Alert.alert('User does not exists')
                console.log('User does not exists');
                break;
                case 'Invalid Email':Alert.alert('Incorret Email or Password')
                console.log('Incorret Email or Password');
            }
           }
       }
       else{Alert.alert('Enter Email and Password')
       console.log('Enter Email and Password')
    }   
    }

    render(){
        console.log(this.state);
        return(
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
              <View>
                  <Image
                  source={require("../assets/booklogo.jpg")}
                  style={{width:200, height: 200}} />
                </View>  

                <View>
                   <TextInput
                   style={styles.loginBox}
                   placeholder='abc@example.com'
                   keyboardType='email-address'
                   onChangeText={(text)=>{
                    this.setState({
                        EmailId:text
                    })
                   }}
                   ></TextInput>
                   <TextInput 
                   style={styles.loginBox}
                   secureTextEntry={true}
                   placeholder='Password'
                   onChangeText={(text)=>{
                    this.setState({
                        Password:text
                    })
                   }}
                   >
                        
                     </TextInput>
                    </View> 

                    <View>
                        <TouchableOpacity style={{width: 100, height:30, backgroundColor:'#ffd500', alignItems:'center'}}
                        onPress={()=>{
                            this.login(this.state.EmailId,this.state.Password)                                
                        }} >
                            <Text>OK</Text>
                        </TouchableOpacity>
                    </View>
               </KeyboardAvoidingView>
              
                   
        )
    }
}

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }

})