import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const speechs = [
    'hi, this is Text to Voiceover',
    'Can you hear what I am saying?'
  ];

  const [currentSpeech, setCurrentSpeech] = useState({
    index:0,
    speaking:speechs[0],
    isStartSpeech:false
  });

  textToSpeech = (speech) => {
    Speech.speak(speech, {
      voice:'com.apple.ttsbundle.siri_female_en-US_compact',
      rate:.95,
      onStart:onStartSpeech,
      onDone:onDoneSpeech
    });
  };

  onStartSpeech = () => {
    setCurrentSpeech({...currentSpeech, isStartSpeech:true});
  };

  onDoneSpeech = () => {
    const index = currentSpeech.index+1 < speechs.length ? currentSpeech.index+1 : 0;
    console.log('speaking is done.');
    setCurrentSpeech({
      index,
      speaking:speechs[index],
      isStartSpeech:false
    });
  };
  

  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'black', width:'100%'}}>
        <Text style={{color:'white', fontSize:25}}>{currentSpeech.speaking}</Text>
      </View>
      <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', width:'100%', backgroundColor:currentSpeech.isStartSpeech ? 'red' : 'green'}} onPress={() => textToSpeech(currentSpeech.speaking)}><Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>{currentSpeech.isStartSpeech ? 'Speaking...' : 'Speak Now'}</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});