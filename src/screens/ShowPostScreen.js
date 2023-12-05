import React, {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from "../context/BlogContext";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ShowPostScreen = ({navigation}) => {
    // console.log(navigation.getParam('id'));
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};

ShowPostScreen.navigationOptions = ({navigation}) =>{
    return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        <MaterialCommunityIcons name="lead-pencil" size={30} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({

});

export default ShowPostScreen;


