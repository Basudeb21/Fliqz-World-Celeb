import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

import Fontisto from 'react-native-vector-icons/dist/Fontisto'

const SearchBar = ({ placeholder, value, setValue }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                cursorColor={Colors.BLACK}
                value={value}
                onChangeText={setValue}
            />
            <TouchableOpacity style={styles.searchIcon}>
                <Fontisto
                    name={"search"}
                    size={16}
                    color={Colors.PLACEHOLDER}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(20),
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 100,
        paddingHorizontal: moderateScale(20),
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(10)
    },
    inputBox: {
        color: Colors.BLACK
    },
    searchIcon: {
        position: "absolute",
        right: 0,
        marginEnd: moderateScale(20)
    }
})