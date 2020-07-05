import React,{component} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,Alert, KeyboardAvoidingView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
function UselessTextInput(props) {
    return (
      <TextInput
        {...props} 
        editable
        maxLength={40}
      />
    );
  }
  
  export default function UselessTextInputMultiline() {
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    return (
   
        <UselessTextInput
          multiline
          numberOfLines={1}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
    );
  }
    function TextInput(props) {
        return (
          <TextInput
            {...props} 
            editable
            maxLength={10}
          />
        );
      }
      
      export default function TextInputMultiline() {
        const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
        return (
       
            <TextInput
              multiline
              numberOfLines={20}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
        );
      }
      export default function TextInputMultiline() {
        const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
        return (
       
            <TextInput
              multiline
              numberOfLines={20}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
        );
      }
    <View>
    <TouchableOpacity
    onPress={() => alert('Your Story Has been Submited')}
    style={{ backgroundColor: '#000000' }}>
    <Text style={{ fontSize: 20, color: '#fff' }}>present</Text>
  </TouchableOpacity>
  </View>
