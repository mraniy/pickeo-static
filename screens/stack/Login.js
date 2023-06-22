import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";


const Login = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
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
            <View style = {GlobalStyles.viewRowContainer}>
                <TouchableOpacity style={GlobalStyles.buttonContainer} onPress={() => navigation.navigate('Home')}>
                    <Text style={GlobalStyles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.centeredLinkContainer} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={GlobalStyles.linkText} >Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Login
