import React ,{Component} from 'react';
import { StyleSheet, Text, View , Button, TextInput } from 'react-native';
import RadioButton from './Radiobutton';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  ShowHideComponent = () => {
   
      this.setState({ show: true   });
   
  };

  render() {
  
    return(
        <View style={styles.container}>
        <View style={styles.blockcontainer} >
          <Text style={styles.boldText}> PropertyType</Text></View>
        <View ><Text  style={styles.Matter1}>Multiple Property Units</Text></View>
          <View style={styles.Radiotext} >
                <Text style={styles.Radiotext1}>Yes</Text>
                <RadioButton onPress={this.ShowHideComponent} />
          
          <Text style={styles.Radiotext1}>No</Text>
          <RadioButton />
          </View>
          
         <View style={styles.content}>

         {this.state.show ? (
          <View ><Text style={styles.Matter2}>Number of Properties</Text>
          <TextInput style={styles.input} placeholder='No. of properties' /></View>
       
        ) : null}
            
            </View>
          <View style={styles.next}>
            <Button title='Next' color='#8B0000'/>
          </View>
        </View>
    );
    }
}

const styles =StyleSheet.create({
  container:{
    flex: 1 ,
    backgroundColor:'#fff',
    paddingTop:20
    
  },
  content:{
    padding:40,
    justifyContent:'center',
  },
  blockcontainer:{
      borderWidth:1,
      marginVertical: 10,
      paddingVertical: 20, 
      backgroundColor:'#8B0000',
      marginHorizontal: 1, 
      paddingHorizontal: 39
  },  
  boldText:{
    fontSize:25,
    color:'#FFFFFF',
    fontWeight:'normal',
  },
  
  Radiotext:{
    
    width: '97%',
      marginVertical: 1,
      paddingVertical: 1, 
      flexDirection: 'row',
      marginHorizontal: 15, 
      paddingHorizontal: 39
    
  },Radiotext1:{
    
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 1,
    fontSize: 15
    
  },
 
  Matter1:{
    padding:15,
    fontSize:25,
    marginHorizontal:5,
    fontWeight:'normal',
    marginVertical:10,
    justifyContent:'flex-start',
  },

  Matter2:{
    padding:30,
    fontSize:25,
    alignItems:'center',
  },
  input:{
    borderBottomWidth:1, 
    paddingLeft:40,
    padding:5,
    margin:50,
    width:200,
    alignContent:'center'
  },
  next:{
        
        alignItems: 'flex-end',
        paddingRight:30,
        padding:50,
    
  }
 
});



