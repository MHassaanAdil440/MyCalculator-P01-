import { Text,TouchableOpacity } from "react-native";

const CustomButton = (props) => {
    return(
        <TouchableOpacity>
            <Text>{props.value}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;
