import {Text, TouchableOpacity} from "react-native";
import GlobalStyles from "../screens/styles/GlobalStyles";
import {useNavigation} from "@react-navigation/core";

const StyledLink = ({link, linkLabel, style, smallFont}) => {
    let navigation = useNavigation();
    return (
        <TouchableOpacity style={style} onPress={() => navigation.navigate(link)}>
            <Text style={smallFont ? GlobalStyles.linkTextSmall : GlobalStyles.linkText}>{linkLabel}</Text>
        </TouchableOpacity>
    )
}
export default StyledLink
