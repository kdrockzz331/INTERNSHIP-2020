import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {ListPicker} from 'react-native-ultimate-modal-picker';
import RadioButton from './Radiobutton';
import DropdownMenuC from './DropdownMenuC';
import DropdownMenuR from './DropdownMenuR';

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
        <View style={{...styles.blockContainer, alignItems: 'left', flexDirection: 'row-reverse', marginHorizontal: 15, paddingHorizontal: 30}}>
        <View style={styles.headingContainer}><Text style={styles.headingText}></Text></View>
        <Text style={styles.radioText}>Residential </Text>
       <RadioButton  onPress={residentialRadioHandler} checked={residentialCheck} />
   
       <Text style={styles.radioText}>Commercial </Text>
       <RadioButton checked={commercialCheck} onPress={commercialRadioHandler} />
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
        <View style={{...styles.blockContainer, alignItems: 'left', flexDirection: 'row-reverse', marginHorizontal: 15, paddingHorizontal: 30}}>
        <View style={styles.headingContainer}><Text style={styles.headingText}></Text></View>
        <Text style={styles.radioText}>Residential </Text>
       <RadioButton  onPress={residentialRadioHandler} checked={residentialCheck} />
   
       <Text style={styles.radioText}>Commercial </Text>
       <RadioButton checked={commercialCheck} onPress={commercialRadioHandler} />
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
    fontSize:23,
    fontFamily: 'System',
    fontWeight: 'bold',
    //alignSelf: 'center',
    textAlign:'center',
  
  },
  blockContainer: {
    backgroundColor: '#F7F5FA',
    width: '97%',
    marginLeft: 6,
    elevation: 3,
    borderRadius: 10,
    marginVertical: 55,
    marginHorizontal: 5,
    paddingVertical: 30,
    paddingHorizontal: 5
  },
 
  textContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    marginLeft: 0
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    
  },
  radioText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 15,
    fontSize: 15
  },
  
});
export default PropertyTypeScreen;
