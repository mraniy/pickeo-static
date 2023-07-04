import {Image, StyleSheet, View} from "react-native";
import React from "react";

//let imagePath='';
//imagePath ='../assets/separators/grey-line.png';
//Alert.alert(imagePath);
const LineSeparator = (imageName) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../assets/images/separators/grey-line.png')}
            />
        </View>
    )
}

export default LineSeparator

const styles = StyleSheet.create({
    stretch: {
        width: "90%",
        height: 2,
        resizeMode: 'cover'
    },
})
