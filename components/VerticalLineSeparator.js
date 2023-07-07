import {Image, StyleSheet, View} from "react-native";
import React from "react";

const VerticalLineSeparator = (imageName) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.stretch}
                source={require('../assets/images/separators/vertical-grey-line.png')}
            />
        </View>
    )
}

export default VerticalLineSeparator

const styles = StyleSheet.create({
    stretch: {
        height: "90%",
        width: 2,
        resizeMode: 'cover'
    },
})
