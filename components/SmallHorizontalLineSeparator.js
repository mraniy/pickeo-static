import {Image, StyleSheet, View} from "react-native";
import React from "react";

const SmallHorizontalLineSeparator = (imageName) => {
    return (
        <View style={{width:"100%", alignItems:"center"}}>
            <Image
                style={styles.stretch}
                source={require('../assets/images/separators/dashed-red-line.webp')}
            />
        </View>
    )
};

export default SmallHorizontalLineSeparator

const styles = StyleSheet.create({
    stretch: {
        width: "90%",
        height: 2,
        resizeMode: 'cover'
    },
});
