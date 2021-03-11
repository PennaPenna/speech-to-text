import React, { useState } from 'react';
import {  StyleSheet, TextInput, View, Button } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const[whatToSay, setWhatToSay] = useState('');
    
  const speak = () => {
      Speech.speak(whatToSay);
      setWhatToSay('');
      console.log(whatToSay);
    };
  
    return (
      <View style={styles.container}>
        <TextInput
        style={{fontSize: 14, width: 200, margin:10, borderWidth:1, padding:5}}
        value={whatToSay}
        placeholder="What do you want to say?"
        onChangeText={(whatToSay) => setWhatToSay(whatToSay)}
      />
        <Button title="Press to hear" onPress={speak} />
      </View>
    );
  };

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop:80,
  backgroundColor:'#F5F5F5',
 }
});
