import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {ListPicker} from 'react-native-ultimate-modal-picker';
const DropdownMenuC = () => {
  const items: any = [
    { label: 'Property Type', value: 'Property Type' },
    { label: 'Offices', value: 'Offices' },
    { label: 'Retail', value: 'Retail' },
    { label: 'Land', value: 'Land' },
    { label: 'Industry', value: 'Industry' },
    { label: 'Storage', value: 'Storage' },
    { label: 'Hospitality', value: 'Hospitality' },
    { label: 'Others', value: 'Others' }
    
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
export default DropdownMenuC;