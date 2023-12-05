import React, {useContext} from "react";
import {View, Text , StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
const {state, deleteBlogPost} = useContext(Context);

    return <View>
        <FlatList
            data={state}
            keyExtractor={(state) =>state.id}
            renderItem={({item}) =>{
                return <TouchableOpacity onPress={() => navigation.navigate('ShowPost', {id: item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() =>deleteBlogPost(item.id)}>
                            <Ionicons name="trash-outline" style={styles.icon} color="black" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                
            }}
        />
    </View>
};

IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Ionicons name="add-outline" size={24} color="black" />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    row: {
        borderColor: 'black',
        paddingHorizontal: 10,
        borderTopWidth: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title:{
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;