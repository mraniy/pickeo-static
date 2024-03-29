import {Image, StyleSheet, View} from "react-native";
import React from "react";

const HorizontalLineSeparator = (imageName) => {
    return (
        <View>
            <Image
                style={styles.stretch}
                source={require('../assets/images/separators/horizontal-grey-line.png')}
            />
        </View>
    )
};

export default HorizontalLineSeparator

const styles = StyleSheet.create({
    stretch: {
        width: "90%",
        height: 2,
        resizeMode: 'cover'
    },
});
