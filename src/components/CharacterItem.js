import React from 'react';
import {View, Text, Image,StyleSheet,FlatList} from 'react-native';

const CharacterItem = ({item})=>{

    console.log(item);
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>{}</Text>
                <Image source={{uri:item.image}} 
                    style={styles.tinyLogo}></Image>
            </View>
            <View style={styles.column}>
                <View style={styles.row}>
                    <Text style={styles.nameText}>{item.name}</Text>
                    <Text style={styles.text}>{item.species}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.statusText}>{item.status}</Text>
                    <Text style={styles.separator}>from</Text>
                    <Text style={styles.statusText}>{item.origin.name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 16,
        margin:1,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        backgroundColor:'#FFFF',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        shadowColor: '#000',
    },
    row:{
        flexDirection:'row',
    },
    column:{ flexDirection:'column',
    marginLeft: 16,},
    nameText:{
        color: '#000',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    statusText:{
        color: '#000',
        fontSize: 12,
        marginTop: 12,
    },
    text:{
        color: '#000',
        fontSize: 14,
    },
    priceText:{
        fontSize:14,
        color:'#000'
    },
    separator:{
        color: '#000',
        fontSize: 12,
        marginTop: 12,
        marginHorizontal:4,
    }
});

export default CharacterItem;
