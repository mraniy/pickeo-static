import {StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledButton from "../../../components/StyledButton";
import StyledLink from "../../../components/StyledLink";
import StyledLabel from "../../../components/StyledLabel";
import StyledTextInput from "../../../components/StyledTextInput";


const Login = ({navigation}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={GlobalStyles.formContainer}>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Login"}/>
                <StyledTextInput placeholder="Enter your e-mail"
                                 value={login}
                                 onChangeText={text => setLogin(text)}/>
            </View>
            <View style={GlobalStyles.formControl}>
                <StyledLabel labelText={"Password"}/>
                <StyledTextInput placeholder="Enter your password"
                                 value={password}
                                 onChangeText={text => setPassword(text)}
                                 secure={true}
                />
            </View>
            <View style={GlobalStyles.viewRowContainer}>
                <StyledButton buttonLink={"Home"} buttonLabel={"Login"}/>
                <StyledLink link={"SignUp"} linkLabel={"  ->  Sign up"} style={GlobalStyles.linkContainer}/>

            </View>
        </View>

    )
}


export default Login
