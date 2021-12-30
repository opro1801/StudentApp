import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Dimensions, Easing, TouchableOpacity } from 'react-native';
import AppleButton from '../../components/SignInButton/AppleButton';
import GoogleButton from '../../components/SignInButton/GoogleButton';
import { AuthStackParamList } from './LandingNavigator';
import { useLandingContext } from '../../contexts/LandingContext';
import LandingHeaderText from '../../icons/LandingHeaderText';
import StatusBarBackGround from '../../components/StatusBarBackGround';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

const { width, height } = Dimensions.get('window');

type authScreenNavigationType = StackNavigationProp<AuthStackParamList, "EmailContinueScreen">

const LandingScreen = () => {
    const navigation = useNavigation<authScreenNavigationType>();

    const animatedSpeed = 250;

    const { statusBarHeight } = useLandingContext();
    
    const [xValue, setxValue] = useState(new Animated.Value(height/2-24-statusBarHeight));
    const [fadeValue, setfadeValue] = useState(new Animated.Value(0));
    const [subFadeValue, setSubFadeValue] = useState(new Animated.Value(0));
    const [subXValue, setsubXValue] = useState(new Animated.Value(height/2-25-statusBarHeight))
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    const [buttonXValue, setButtonXValue] = useState(new Animated.Value(-300))

    const animation = () => {   
        Animated.sequence([
            Animated.timing(fadeValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.parallel([
                Animated.timing(xValue, {
                    toValue: height/2-35-statusBarHeight,
                    duration: animatedSpeed,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(subFadeValue, {
                    toValue: 1,
                    duration: animatedSpeed,
                    useNativeDriver: false,
                })
            ]),
            Animated.delay(animatedSpeed),
            Animated.parallel([
                Animated.timing(xValue, {
                    toValue: 150-statusBarHeight,
                    duration: animatedSpeed,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(subXValue, {
                    toValue: 160-statusBarHeight,
                    duration: animatedSpeed,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(buttonXValue, {
                    toValue: 30,
                    duration: animatedSpeed,
                    useNativeDriver: false,
                })
            ]),

        ]).start();
    }

    const continueWithEmail = () => {
        navigation.navigate("EmailContinueScreen");
    }

    useEffect(() => {
        animation();
    }, []);


    return (
        <View style={styles.container}>
            <StatusBarBackGround/>
            <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
                    <Animated.View style={[styles.landingHeader, {top: xValue}]}>
                        <LandingHeaderText />
                    </Animated.View> 
                    <Animated.Text
                        style={[styles.landingSubheader, {top: subXValue, opacity: subFadeValue, fontSize: StyleSheetLibrary.fontSizeBigText}]}
                    >
                        AI-Powered Personalised Learning
                    </Animated.Text>
                    <Animated.View style={[styles.signInList, {bottom: buttonXValue}]}>
                        <GoogleButton />
                        <AppleButton />
                        <TouchableOpacity onPress={continueWithEmail}>
                            <Text style={[styles.emailButton, {fontSize: StyleSheetLibrary.fontSizeText}]}>
                            or continue with email
                            </Text>
                        </TouchableOpacity>
                    </Animated.View>
            </View>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    landingHeader: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingSubheader: {
        fontWeight: '600',
        width: '80%',
        textAlign: 'center',
    },
    signInList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 0,
    },
    thirdPartyButton: {
        width: 272,
        height: 56,
        margin: 6,
    },
    emailButton: {
        fontWeight: '600',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingBottom: 24,
    }
})

export default LandingScreen;