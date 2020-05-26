import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {ListPicker} from 'react-native-ultimate-modal-picker';
import RadioButton from '../components/Radiobutton';
import DropdownMenuC from '../components/DropdownMenuC';
import DropdownMenuR from '../components/DropdownMenuR';

const PropertyTypeScreen = props => {
  const [property, setProperty] = useState('residential');
  const [residentialCheck, setResidentialCheck]= useState(true);
  const [commercialCheck, setCommercialCheck]= useState(false);

  const residentialRadioHandler = () => {
    if(commercialCheck){
      setCommercialCheck(false);
      setResidentialCheck(true);
      setProperty('residential');
    } else {
      setResidentialCheck(true);
      setProperty('residential');
    }
  };
  const commercialRadioHandler = () => {
    if(residentialCheck){
      setCommercialCheck(true);
      setResidentialCheck(false);
      setProperty('commercial');
    } else {
      setCommercialCheck(true);
      setProperty('commercial');
    }
  };
    const onPressHandler = async() => {
    console.log(property);
  };


   if(commercialCheck)
  {
     return (
      <View style={styles.container}>
      <View style={styles.header}>
    <Text style={styles.texth}>Property Type</Text>
    </View>
        <View style={styles.blockContainer}>
        
        <Text style={styles.radioText}>Commercial </Text>
       <RadioButton  onPress={commercialRadioHandler} checked={commercialCheck} />
   
       <Text style={styles.radioText}>Residential </Text>
       <RadioButton checked={residentialCheck} onPress={residentialRadioHandler} />
      </View>
     
      <View style={styles.dropstyle}>
       <DropdownMenuC/>
     </View>

       
        
   
     
      </View>
    )
}
else
{
  return (
      <View style={styles.container}>
      <View style={styles.header}>
    <Text style={styles.texth}>Property Type</Text>
    </View>
        <View style={styles.blockContainer}>
        
        <Text style={styles.radioText}>Commercial </Text>
       <RadioButton  onPress={commercialRadioHandler} checked={commercialCheck} />
   
       <Text style={styles.radioText}>Residential </Text>
       <RadioButton checked={residentialCheck} onPress={residentialRadioHandler} />
      </View>
     
      <View style={styles.dropstyle}>
       <DropdownMenuR/>
     </View>

       
        
   
     
      </View>
    )
}

};


const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#F7F5FA'
  },
  header: {
    height:60,
    padding:15,
    backgroundColor: '#781B0F',
  },
  texth: {
    color:'#fff',
    fontSize:25,
    fontFamily: 'System',
    fontWeight: 'bold',
    textAlign:'center',
  
  },
  blockContainer: {
      width: '97%',
      marginVertical: 25,
      paddingVertical: 40, 
      flexDirection: 'row-reverse', 
      marginHorizontal: 20, 
      paddingHorizontal: 39
  },
  radioText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    fontSize: 15
  },
  liststyle: {
    alignItems:'center',
   paddingVertical: 30,
   justifyContent: 'center',
    width: 120 * 2,
    height: 30,
     marginHorizontal: 70,
    backgroundColor: '#fff',
    borderRadius:20
  },
  dropstyle: {
    
  }
  
});
export default PropertyTypeScreen;
