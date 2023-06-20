import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";


const Login = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
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
            <View style = {GlobalStyles.linkContainer}>
                <TouchableOpacity style={GlobalStyles.sendContainer} onPress={() => navigation.navigate('Home')}>
                    <Text style={GlobalStyles.btnText}>send</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.signUpContainer} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={GlobalStyles.linkText}>sign up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Login
