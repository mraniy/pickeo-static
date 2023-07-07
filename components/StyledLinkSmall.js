import {Text, TouchableOpacity} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import {useNavigation} from "@react-navigation/core";

const StyledLinkSmall = ({link, linkLabel, style}) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity style={style} onPress={() => navigation.navigate(link)}>
            <Text style={GlobalStyles.linkTextSmall}>{linkLabel}</Text>
        </TouchableOpacity>
    )
}
export default StyledLinkSmall
