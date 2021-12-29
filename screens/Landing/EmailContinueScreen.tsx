import { RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect, isValidElement } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, KeyboardAvoidingView, Button, Keyboard, Platform, TouchableWithoutFeedback, Alert } from 'react-native';
import MailIcon from '../../icons/MailIcon';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import BackButton from '../../components/BackButton';

const { width, height } = Dimensions.get('window');
type authScreenNavigationType = StackNavigationProp<AuthStackParamList, "EmailContinueScreen">

const EmailContinueScreen = () => {
    const navigation = useNavigation<authScreenNavigationType>();

    const { fontSizeLargeText, fontSizeText, fontSizeTitle, fontSizeSmallTitle } = useLandingContext();

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
                    <BackButton previousPage={previousPage} />
                    <View>
                        <Text style={[styles.header, {fontSize: fontSizeTitle}]}>Continue with Email</Text>
                        <Text style={[{fontSize: fontSizeText}]}>Please enter your email address to proceed</Text>
                    </View>
                    <View style={styles.inputSection}>
                        {/* <Image style={{margin: 12,}} source={require('../../assets/Mail.png')} /> */}
                        <MailIcon paddingleft={16}/>
                        <TextInput
                            style={styles.emailInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder="Your email"
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => handleOnChangeText(text)}
                            autoFocus={true}
                        />
                    </View>
                </View>
                <TouchableOpacity 
                style={[styles.continueButton, {backgroundColor: isValidEmail(userEmail) ? '#3145F5' : '#D0D0D7'}]} 
                onPress={nextPage}
                disabled={isValidEmail(userEmail) ? false : true}
                >
                    <Text style={[styles.continueButtonText, { fontSize: fontSizeSmallTitle }]}>Continue</Text>
                </TouchableOpacity>
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
        paddingTop: 68,
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
        height: 48,
        width: '80%'
    },
    continueButton: {
        borderRadius: 12,
        height: 48,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    }
})

export default EmailContinueScreen;