import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import StyledLabel from "../../components/StyledLabel";


const Login = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Login"}/>
                <TextInput
                    placeholder="Enter your e-mail"
                    value={login}
                    onChangeText={text => setLogin(text)}
                    style={GlobalStyles.input}
                />
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Password"}/>
                <TextInput
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                    style={GlobalStyles.input}
                />
            </View>
            <View style = {GlobalStyles.viewRowContainer}>
                <StyledButton buttonLink={"Home"} buttonLabel={"Login"}/>
                <StyledLink link={"SignUp"} linkLabel={"Sign up"} style={GlobalStyles.centeredLinkContainer}/>
            </View>
        </View>

    )
}

export default Login
