import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'


const App = () => {
  const toggle = false;
  return <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={() => ()}>

    <Image style={ toggle ? style.lightingOn : style.lightingOff}
    source={
      toggle
      ? require('./assets/icons/eco-ligth.png')
      : require('./assets/icons/eco-ligth-off.png')
    }/>
    <Image style={style.dioLogo}
    source={
      toggle
      ? require('./assets/icons/logo-dio.png')
      : require('./assets/icons/logo-dio-white.png')
    }/>
    </TouchableOpacity>
  </View>
};

export default App

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 250,
    height: 250,
  },
    
});