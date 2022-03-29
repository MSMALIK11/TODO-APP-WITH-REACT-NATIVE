import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,SafeAreaView,FlatList } from 'react-native';
import { FlatListDemo } from './component/FlatList';
import { Home } from './Home';


export default function App() {

  
  
  return (
    <SafeAreaView>
      <View>
      <Home />
      </View>

      <StatusBar style="auto" />

     
  
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding:20,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    elevation: 20,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    textTransform:'uppercase'


  },
  text:{
    color:'#333',
    fontSize:30,
    fontWeight:'bold'
    


  }
});
