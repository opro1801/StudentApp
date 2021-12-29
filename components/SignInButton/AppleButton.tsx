import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { SvgProps, Path, SvgUri } from "react-native-svg"
import AppleIcon from '../../icons/AppleIcon';
import { useLandingContext } from '../../contexts/LandingContext';

const {width, height} = Dimensions.get('window');

const AppleButton = () => {
    const { fontSizeLargeText } = useLandingContext();
    const signInWithApple = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            // signed in
            } catch (error: any) {
            if (error.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
            } else {
                // handle other errors
            }
            }
    }
    return (
        <TouchableOpacity onPress={signInWithApple} style={styles.appleButton}>
            <AppleIcon height={24} width={24}/>
            <Text style={[styles.appleText, {fontSize: fontSizeLargeText}]}>Continue with Apple</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    appleButton: {
        width: width-48,
        height: 56,
        margin: 6,
        backgroundColor: 'black',
        flexDirection: 'row',
        borderRadius: 12,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appleLogo: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 16,
    },
    appleText: {
        fontWeight: '600',
        color: 'white',
    }
})

export default AppleButton;
