import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import StyleSheetLibrary from '../../stylesheet/StyleSheetLibrary';

interface ProfileHeaderProps {
    userName?: string
}

const ProfileHeader = ({userName='Peter Mok'}: ProfileHeaderProps) => {
    return (
        <View style={styles.container}>
            <Image style={{width: 64, height: 64}} source={require('../../assets/demoAvt.png')}/>
            <View style={styles.textField}>
                <Text style={styles.userName}>{userName}</Text>
                <TouchableOpacity>
                    <Text style={styles.edit}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 150,
    },
    textField: {
        height: 42,
    },
    userName: {
        fontSize: StyleSheetLibrary.fontSizeSmallTitle,
        fontWeight: '600',
        lineHeight: 24,
        textAlign: 'center',
    },
    edit: {
        fontSize: StyleSheetLibrary.fontSizeText,
        fontWeight: '600',
        color: '#3145F5',
        textAlignVertical: 'center',
        textAlign: 'center',
        lineHeight: 18,
    }
})

export default ProfileHeader;