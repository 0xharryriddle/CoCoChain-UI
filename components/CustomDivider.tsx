import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

type Props = {
    label?: string;
    containerStyles?: ViewStyle;
    textStyles?: TextStyle,
    dividerStyle?: ViewStyle
}

const CustomDivider = (props: Props) => {
    return (
        <View style={[
            { flexDirection: 'row', alignItems: 'center' },
            props.containerStyles
        ]}>
            <View style={[
                { flex: 1, height: 1, backgroundColor: 'black' },
                props.dividerStyle
            ]} />
            <View>
                <Text style={[
                    { width: 50, textAlign: 'center' },
                    props.textStyles
                ]}>{props.label}</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>
    )
}

export default CustomDivider

const styles = StyleSheet.create({
    text: {

    }
})