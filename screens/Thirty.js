import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import MainButton from '../components/MainButton'
import { RadioGroup } from 'react-native-btr';

export default function Thirty() {
 
    const [data,setData] = useState({
 
      radioButtons: [
        {
          label: 'Commercial Land / Inst.Land',
          value: 'Commercial Land / Inst.Land',
          checked: true,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 7
 
        },
 
        {
          label: 'Agricultural / Farm Land',
          value: 'Agricultural / Farm Land',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 7
 
        },
        {
          label: 'Industrial Lands / Plots',
          value: 'Industrial Lands / Plots',
          checked: false,
          color: '#000',
          disabled: false,
          flexDirection: 'row',
          size: 7
 
        },
 
      ]
 
    });
    const [name,setName] = useState("nbd d");

    let selectedItem=data.radioButtons[0].value;
    function pressHandler(){
      let selectedItem = data.radioButtons.find(e => e.checked == true);
      selectedItem = selectedItem ? selectedItem.value : data.radioButtons[0].value;
      setName(selectedItem);
    }
 

  return(
    <View style={styles.mainCont}>
    <View style={styles.container}>
      <RadioGroup
          color='#0277BD'
          labelStyle={{ fontSize: 20, }}
          radioButtons={data.radioButtons}
          onPress={radioButtons => {setData({ radioButtons });pressHandler();}}
        
        />
        <View style={styles.butc}>
        <View>
        <MainButton style={styles.buttonContainer}>{"Next"}</MainButton>
        </View>
        </View>
        
      </View>
      </View>
        
  );
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        width:'80%',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonContainer:{
        marginVertical:30
    },
    butc:{
     flexDirection:'row',
     width:'100%',
     justifyContent:'flex-end'
    },
    mainCont:{
      flex:1,
      width:'100%',
      alignItems:'center',
      justifyContent:"center"
    }
});
