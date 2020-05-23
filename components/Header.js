import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Header = props => {
     return(
         <View style={styles.header} >
             <Text style={styles.headerTitle} >{props.title} </Text>
         </View>
     );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        width: '100%',
        height: 90,
        backgroundColor:'red',
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle:{
        color:'white',
        fontSize: 26,
    },
    
});

export default Header;