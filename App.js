import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Constants, Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import {
	NoteOne,
	NoteTwo,
	NoteThree,
	NoteFour,
	NoteFive,
	NoteSix,
	NoteSeven
} from './constants/Colors'







const ljud = {
	one: require('./assets/bil.mp3'),
	//two: require('./assets/note2.wav'),
	//three: require('./assets/note3.wav'),
	//four: require('./assets/note4.wav'),
	//five: require('./assets/note5.wav'),
	//six: require('./assets/note6.wav'),
	//seven: require('./assets/note7.wav')
}


export default class App extends React.Component {

  state = {
    fontsLoaded: false
  };
  

  async componentDidMount(){
    await Font.loadAsync({
        //font1 or 2 can be any name. This'll be used in font-family
         
        font1: require('./assets/CB.otf')                         

    });
    this.setState({fontsLoaded: true});
  }


  handlePlaySound = async note => {
    const soundObject = new Audio.Sound()
  
    try {
      let source = require('./assets/bil.mp3')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  
  render() {

    if(this.state.fontsLoaded)
    {
    
    return (
      <View style={styles.container}>
      <LinearGradient
          colors={['rgba(25,172,255,0.8)', 'cyan']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 800,
          }}
        />
      	<View style={styles.buttonContainer}>
        <Text style={styles.buttonTextTop}>MAX ABC</Text>
        <Text style={styles.buttonTextVersion}>ver 0.1</Text>
		      <TouchableOpacity
			      style={[styles.button]}
		      	onPress={() => this.handlePlaySound('one')}
		>
			      
            <Image source={require("./assets/bil.png")}/>
            <Text style={styles.buttonText}>B</Text>
		      </TouchableOpacity>
	      </View>
      </View>
    );
    }
        else
    {
       return null
    }
  }
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginTop: 0
	},
	buttonContainer: {
		height: 400,
		marginTop: 50
	},
	button: {
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
    
    
	},
	buttonText: {
		color: 'white',
    fontSize: 50,
    fontFamily: 'font1',
    
  
  },
  buttonTextTop: {
    textAlign: 'center',
    flex: 1,
		color: 'white',
    fontSize: 80,
    padding: 0,
    fontFamily: 'font1',
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  buttonTextVersion: {
    textAlign: 'center',
    flex: 1,
		color: 'white',
    fontSize: 30,
    fontFamily: 'font1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  
  },

  textAttribs: {
    textAlign: "center",
    color: "#FFF",
    fontFamily: "font1",
    fontSize: 10
},
  

})


