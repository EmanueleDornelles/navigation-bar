import React from "react";
import {StyleSheet, View, Text } from "react-native-reanimated/lib/typescript/Animated";

const HomePage = () =>{

    return(
    <View style={styles.container}>
        <Text>Home Page</Text>
    </View>
    );
}

const styles = StyleSheet({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    }
});
export default HomePage;