import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CountryFlag from "react-native-country-flag";
import { useGlobalContext } from '@/context/GlobalProvider';
import { Language } from '@/utils/types.util';

type LanguageDropdownProps = {
    containerStyle?: ViewStyle;
}

const data: {
    label: string,
    value: Language
}[] = [
        { label: 'Việt Nam', value: 'vn' },
        { label: 'English', value: 'uk' },
    ]

const LanguageDropdown = ({ containerStyle }: LanguageDropdownProps) => {
    const [isFocus, setIsFocus] = useState(false);
    const { language, setLanguage } = useGlobalContext();

    const renderLabel = () => {
        if (language || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    function renderItem(item: {
        label: string,
        value: Language
    }) {
        <View style={styles.item}>
            <CountryFlag isoCode={item.value} size={25} />
            {/* <Text style={[styles.textItem]}>
                {item.label}
            </Text> */}
        </View>
    }

    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField='label'
                valueField="value"
                value={language}
                onChange={item => {
                    setLanguage(item);
                }}
                renderItem={renderItem as any}
            />
        </View>
    )
}

export default LanguageDropdown

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background
    },
    dropdown: {
        margin: 8,
        height: 50,
        minWidth: 150,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})