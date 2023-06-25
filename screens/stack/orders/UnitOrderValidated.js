import {StyleSheet, Text, View} from 'react-native';

const UnitOrderValidated = ({message, totalPrice, status,expectedDeliveryDate, deliveryDate}) => {
    return (
        <View style={styles.products}>
            <Text style={styles.element}>{message}</Text>
            <Text style={styles.element}>{totalPrice}</Text>
            <Text style={styles.element}>{status}</Text>
            <Text style={styles.element}>{expectedDeliveryDate}</Text>
            <Text style={styles.element}>{deliveryDate}</Text>
        </View>
    )
};

const styles = StyleSheet.create({

    products: {
        marginTop: 10,
        flexDirection : 'column',
        backgroundColor: 'white'

    },
    element: {
        backgroundColor: 'white',
        padding: 20,
        fontSize: 17,
        marginVertical: 5
    }
});


export default UnitOrderValidated
