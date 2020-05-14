import React,{ useState } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    Button
  } from 'react-native';


export default function Password(){
    const [pas,setPas]=useState({password:'',confirmpassword:''});
    const [cone,setCone]=useState(false);
    const [ctwo,setCtwo]=useState(false);
    const passwo=(val)=>{
        setPas((v) => {return  {password:val , confirmpassword:v.confirmpassword}});
    }
    const confirmpasswo=(val)=>{
        setPas((v) => {return {password:v.password , confirmpassword:val}});
    }
    const handler=()=>{
        setPas({password:'',confirmpassword:''});
    }
    
    return (
      <View style={styles.container}>
          
          <View style={styles.list}>
          <Text style={styles.heading}>Create Password</Text>
             <View style={styles.content}>
                 <TextInput 
                    placeholder='Password'
                    style={styles.textinput}
                    secureTextEntry={!cone}
                    onChangeText={passwo}
                    value={pas.password}
                 />
                <TouchableOpacity onPress={()=>{cone?setCone(false):setCone(true)}}>
                 <Image 
                     source={cone?require('../assets/interface.png'):require('../assets/diagonal.png')}
                     style={styles.img}
                     
                 />
                 </TouchableOpacity>

             </View>
             <View style={styles.newcontainer}>
                 <Text>*Atleast 6 characters long. Must include a number and a letter</Text>
             </View>
             <View style={styles.content}>
             <TextInput 
                    placeholder='Confirm Password'
                    style={styles.textinput}
                    secureTextEntry={!ctwo}
                    onChangeText={confirmpasswo}
                    value={pas.confirmpassword}
                 />
                <TouchableOpacity onPress={()=>{ctwo?setCtwo(false):setCtwo(true)}}>
                 <Image 
                     source={ctwo?require('../assets/interface.png'):require('../assets/diagonal.png')}
                     style={styles.img}
                     
                 />
                 </TouchableOpacity>
             </View>
          </View>
          <TouchableWithoutFeedback onPress={handler}>
          <View style={styles.button}>
           <Text style={styles.bt}>SAVE</Text>
          </View>
          </TouchableWithoutFeedback>
      </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    list:{
        flexDirection:'column',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    content:{
        width:'90%',
        paddingVertical:0,
        borderBottomColor:'red',
        borderBottomWidth:2,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-between'
    },
    bt:{
       color:'#fff',
       fontWeight:'bold',
       textAlign:'center',
       fontSize:20

    },
    newcontainer:{
        width:'90%',
        marginTop:3
    },
    newtext:{
        fontSize:15,
    },
    textinput:{
        left:0,
        flex:1,
        paddingLeft:10,
        paddingRight:5,
        zIndex:2,
        fontSize:20
        // position:'absolute'
        
    },
    button:{
        width:'40%',
        marginLeft:'50%',
        backgroundColor:'red',
        paddingVertical:15,
        borderRadius:10
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'left'
    },
    img:{
        width:20,
        height:20,
        right:0,
        marginRight:10,
        zIndex:3,
        // position:'absolute'
    }
})
