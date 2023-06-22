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
                <Text style={GlobalStyles.label}>First name</Text>
                <TextInput
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>Last name</Text>
                <TextInput
                    placeholder="Enter your last name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>Phone number</Text>
                <TextInput
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>Login</Text>
                <TextInput
                    placeholder="Enter your e-mail"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>Password</Text>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <Text style={GlobalStyles.label}>Confirm your password</Text>
                <TextInput
                    placeholder="Confirm your password"
                    value={passwordConfirmation}
                    onChangeText={text => setPasswordConfirmation(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style = {GlobalStyles.viewRowContainer}>
                <TouchableOpacity style={GlobalStyles.buttonContainer} onPress={() => navigation.navigate('SignUpConfirmation')}>
                    <Text style={GlobalStyles.btnText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}


export default SignUp
