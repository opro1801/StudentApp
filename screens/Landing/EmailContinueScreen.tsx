import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect, isValidElement } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Button, Keyboard, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import MailIcon from '../../icons/MailIcon';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import BackButton from '../../components/BackButton';
import StatusBarBackGround from '../../components/StatusBarBackGround';
import ContinueButton from '../../components/ContinueButton';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const { width, height } = Dimensions.get('window');
type authScreenNavigationType = StackNavigationProp<AuthStackParamList, "EmailContinueScreen">

const EmailContinueScreen = () => {
    const navigation = useNavigation<authScreenNavigationType>();

    const [isFocus, setisFocus] = useState(true);

    const [userEmail, setuserEmail] = useState<string>('');

    const isValidEmail = (mail: string) => 
    {
        const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        return regx.test(mail);
    }

    const handleOnChangeText = ( value: string ) => {
        setuserEmail(value);
    }

    const nextPage = () => {
        if(isValidEmail(userEmail)) {
            navigation.navigate("EmailVerification", {
                email: userEmail,
            });
        } else {
            Alert.alert("Please enter a valid email!")
        }
    }
    const previousPage = () => {
        navigation.navigate("Landing");
    }

    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <StatusBar />
                <View>
                    <StatusBarBackGround />
                    <BackButton previousPage={previousPage} />
                    <View>
                        <Text style={[styles.header, {fontSize: StyleSheetLibrary.fontSizeBigTitle}]}>Continue with Email</Text>
                        <Text style={[{fontSize: StyleSheetLibrary.fontSizeBigText}]}>Please enter your email address to proceed</Text>
                    </View>
                    <View style={[styles.inputSection, {borderWidth: isFocus ? 1 : 0, borderColor: '#3145F5'}]}>
                        <MailIcon paddingleft={16}/>
                        <TextInput
                            style={[styles.emailInput]}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Your email"
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => handleOnChangeText(text)}
                            autoFocus={true}
                            onFocus={() => setisFocus(true)}
                            onBlur={() => setisFocus(false)}
                        />
                    </View>
                </View>
                <ContinueButton isValidInfo={isValidEmail} userInfo={userEmail} nextPage={nextPage} buttonText='Continue' />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-between",
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    backButton: {
        width: 40,
        height: 40,
    },
    header: {
        fontWeight: '600',
        fontSize: 24,
        marginTop: 24,
        marginBottom: 4,
        lineHeight: 32,
    },
    inputSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F8FB',
        borderRadius: 10,
        marginTop: 48,
        height: 48,
    },
    emailInput: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        marginLeft: 34,
        borderRadius: 10,
        backgroundColor: '#F7F8FB',
        color: '#424242',
        height: 46,
        width: '80%'
    },
})

export default EmailContinueScreen;