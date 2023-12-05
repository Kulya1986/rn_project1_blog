import React, {useContext} from "react";
import { StyleSheet} from 'react-native';
import { Context } from "../context/BlogContext";
import FormComponent from "../components/FormComponent";

const CreateScreen = ({navigation}) => {
    
    const {addBlogPost} = useContext(Context);
        
        return <FormComponent onSubmit={(title, content) => {
                addBlogPost(title, content, () => navigation.navigate('Index'))
            }}
        />;
};

const styles = StyleSheet.create({
});

export default CreateScreen;
