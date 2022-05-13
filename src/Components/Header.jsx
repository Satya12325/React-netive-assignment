import {StyleSheet,View, Text} from 'react-native'


export default function Header({title}){
    return(
            <View  style={styles.header}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60, 
        backgroundColor: "tomato",
        padding:20
    },
    text:{
        color: "white",
        fontSize: 20,
        alignSelf: "center"
    }
})