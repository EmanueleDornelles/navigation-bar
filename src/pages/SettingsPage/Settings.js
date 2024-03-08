import React from "react";
import {StyleSheet, View, Text } from "react-native-reanimated/lib/typescript/Animated";

const SettingsPage =() =>{
    return(
        <View>
            <Text style={styles.title}>Settings</Text>
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

export default SettingsPage;