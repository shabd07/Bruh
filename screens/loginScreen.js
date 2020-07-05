import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,KeyboardAvoidingView,ScrollView } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component {

    constructor(){
        super()
        this.state={
          emailId : '',
          password: '',
          address:'',
          first_name:'',
          last_name:'',
          contact:'',
          confirmPassword:'',
          isModalVisible:'false'
        }
      }
render(){
    return(
      <View style={styles.container}>
        <View>
          {this.showModal()}
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.title}>Bed Time Stories</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@gmail.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{this.userSignUp(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
 
 

  
   
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    }
  })
  