import {Text, TouchableOpacity, View} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
const CustomizedButton = ({navigation}) => {
    return (
        <TouchableOpacity style={GlobalStyles.sendContainer} onPress={() => navigation.navigate('Home')}>
            <Text style={GlobalStyles.btnText}>send</Text>
        </TouchableOpacity>
    )
}
export default CustomizedButton
