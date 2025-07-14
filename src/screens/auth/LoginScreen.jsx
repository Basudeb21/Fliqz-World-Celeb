import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Images, NavigationStrings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import GradientTextButton from '../../components/framework/button/GradientTextButton';
import OutLineButton from '../../components/framework/button/OutLineButton';
import Link from '../../components/framework/boots/Link';
import Spacer from '../../components/framework/boots/Spacer';
import PasswordInputBox from '../../components/framework/input/PasswordInputBox';
import TextInputBox from '../../components/framework/input/TextInputBox';
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate(NavigationStrings.SIGNUP_SCREEN)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WHITE }}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <ImageBackground source={{ uri: Images.LOGIN_IMG }} style={styles.image}>
                        <FastImage
                            source={Images.WHITE_LOGO}
                            style={styles.logo}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </ImageBackground>
                    <Text style={styles.loginTxt}>Login</Text>
                    <Spacer height={30} />
                    <View style={styles.inputContainer}>
                        <TextInputBox value={userName} setValue={setUserName} placeholder='Email / Username*' />
                        <Spacer height={20} />
                        <PasswordInputBox value={password} setValue={setPassword} placeholder='Password' />
                    </View>
                    <View style={styles.btnContainer}>
                        <Link label={"Forgot Password?"} />
                        <Spacer height={10} />
                        <GradientTextButton label='Login' width='100%' />
                        <Spacer height={15} />
                        <OutLineButton label_one={"Don’t have an account? "} label_two={"Sign Up"} onPress={handleLoginPress} />

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: verticalScale(260)
    },
    logo: {
        width: moderateScale(230),
        height: verticalScale(230),
        marginLeft: moderateScale(-50),
        marginTop: verticalScale(-90)
    },
    loginTxt: {
        fontSize: scale(18),
        fontWeight: "400",
        marginStart: moderateScale(20),
        marginTop: verticalScale(20)
    },
    inputContainer: {
        paddingHorizontal: moderateScale(20)
    },
    btnContainer: {
        paddingHorizontal: moderateScale(20),
        marginTop: verticalScale(50)
    },
    linkContainer: {
        alignSelf: "flex-end",
        marginEnd: moderateScale(30)
    }
})