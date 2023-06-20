import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";


const SignUp = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <View style={styles.formContainer}>
            <View style={styles.formControl}>
                <Text style={styles.label}>first name</Text>
                <TextInput
                    placeholder="enter your first name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>last name</Text>
                <TextInput
                    placeholder="enter your last name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>phone number</Text>
                <TextInput
                    placeholder="enter your phone number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>login</Text>
                <TextInput
                    placeholder="enter your e-mail"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>password</Text>
                <TextInput
                    placeholder="enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.label}>confirm your password</Text>
                <TextInput
                    placeholder="confirm your password"
                    value={passwordConfirmation}
                    onChangeText={text => setPasswordConfirmation(text)}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style = {styles.linkContainer}>
                <TouchableOpacity style={styles.sendContainer} onPress={() => navigation.navigate('SignUpConfirmation')}>
                    <Text style={styles.btnText}>send</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({

    linkContainer : {
        flexDirection: 'row'
    },
    btnText: {
        fontSize: 19,
    },
    sendContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 25,
        backgroundColor: 'lightblue',
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },
    signUpContainer: {
        borderRadius: 6,
        paddingHorizontal: 9,
        paddingVertical: 25,
        marginTop: 20,
        width: '40%',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 6,
        width: '100%'
    },
    formContainer: {
        backgroundColor: 'white',
        borderRadius: 9,
        padding: 20,
        margin: 20

    },
    formControl: {
        width: '100%',
        flexDirection: 'column'
    },
    label: {
        marginVertical: 15,
        color: 'green',
        fontWeight: 'bold'
    },
    linkText: {
        fontSize: 16,
        fontWeight: 'bold',
        color : 'blue'
    }
})

export default SignUp
