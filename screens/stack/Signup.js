import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";


const SignUp = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>first name</Text>
                <TextInput
                    placeholder="enter your first name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>last name</Text>
                <TextInput
                    placeholder="enter your last name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>phone number</Text>
                <TextInput
                    placeholder="enter your phone number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>login</Text>
                <TextInput
                    placeholder="enter your e-mail"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>password</Text>
                <TextInput
                    placeholder="enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>confirm your password</Text>
                <TextInput
                    placeholder="confirm your password"
                    value={passwordConfirmation}
                    onChangeText={text => setPasswordConfirmation(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style = {GlobalStyles.linkContainer}>
                <TouchableOpacity style={GlobalStyles.sendContainer} onPress={() => navigation.navigate('SignUpConfirmation')}>
                    <Text style={GlobalStyles.btnText}>send</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}


export default SignUp
