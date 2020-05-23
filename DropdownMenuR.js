import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {ListPicker} from 'react-native-ultimate-modal-picker';
const DropdownMenuR = () => {
  const items: any = [
    { label: 'Property TypeR', value: 'Property TypeR' },
    { label: 'OfficesR', value: 'OfficesR' },
    { label: 'RetailR', value: 'RetailR' },
    { label: 'LandR', value: 'LandR' },
    { label: 'IndustryR', value: 'IndustryR' },
    { label: 'StorageR', value: 'StorageR' },
    { label: 'HospitalityR', value: 'HospitalityR' },
    { label: 'OthersR', value: 'OthersR' }
    
  ];
  return (
    <View style={styles.screen}>
    
      <SafeAreaView style={styles.container}>
      <ListPicker
        
        items={items}
        onChange={(item) => console.log(item)}/>
       </SafeAreaView>
    </View>
  )
};
const styles=StyleSheet.create({
  screen: {
        display: 'flex',
        flex: 1 ,
        backgroundColor: '#F7F5FA',
        justifyContent: 'flex-start',
        paddingTop:60,
         
    },
  container: {
        
        display: 'flex',
         flex: 1 ,
        justifyContent: 'flex-start',
        
    },
  
  
});
export default DropdownMenuR;