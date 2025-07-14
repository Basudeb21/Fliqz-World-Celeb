import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BackpressTopBar from '../../../components/framework/navbar/BackpressTopBar'
import { Colors } from '../../../constants'
import TextInputBox from '../../../components/framework/input/TextInputBox'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import PhoneNumberInput from '../../../components/framework/input/PhoneNumberInput'
import PasswordInputBox from '../../../components/framework/input/PasswordInputBox'
import Checkbox from '../../../components/framework/input/CheckBox'
import Link from '../../../components/framework/boots/Link'
import GradientTextButton from '../../../components/framework/button/GradientTextButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const BecomeACreator = () => {
    const [countryCode, setCountryCode] = useState('IN');
    const [callingCode, setCallingCode] = useState('91');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <BackpressTopBar title={"Become a creator"} />
            <View style={styles.form}>
                <TextInputBox placeholder='First Name' />
                <TextInputBox placeholder='Last Name' />
                <TextInputBox placeholder='Email' />
                <PhoneNumberInput
                    placeholder={"Enter phone number"}
                    countryCode={countryCode}
                    setCountryCode={setCountryCode}
                    callingCode={callingCode}
                    setCallingCode={setCallingCode}
                />
                <PasswordInputBox placeholder={"Enter password"} />
                <PasswordInputBox placeholder={"Confirm password"} />
                <View style={styles.checkBoxContainer}>
                    <Checkbox />
                    <Text style={styles.checkBoxLabel}>I agree to the <Link label={"Terms of use"} /> and <Link label={"Privacy Policy"} /></Text>
                </View>
                <GradientTextButton label='Signup' />
                <View style={styles.checkBoxContainer}>
                    <Text style={styles.checkBoxLabel}>Already have an account? <Link label={"Signin"} /> </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BecomeACreator

const styles = StyleSheet.create({
    form: {
        marginTop: verticalScale(20),
        marginHorizontal: moderateScale(20),
        gap: scale(20)
    },
    checkBoxContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    checkBoxLabel: {
        fontSize: scale(14),
        fontWeight: "500"
    }
})