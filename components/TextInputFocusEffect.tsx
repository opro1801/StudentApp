import React, { Dispatch, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextInputFocusEffectProps {
    userName: string;
    setuserName: Dispatch<React.SetStateAction<string>>;
}

const TextInputFocusEffect = ({setuserName, userName}: TextInputFocusEffectProps) => {
    const [isFocus, setisFocus] = useState(true);
    return (
        <TextInput
            style={[styles.nameInput, {borderWidth: isFocus ? 1 : 0, borderColor: '#3145F5'}]}
            placeholder="Your name"
            underlineColorAndroid="transparent"
            onChangeText={(text) => {setuserName(text);}}
            autoFocus={true}
            onFocus={() => setisFocus(true)}
            onBlur={() => setisFocus(false)}
        />
    )
}

const styles = StyleSheet.create({
    nameInput: {
        marginTop: 12,
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#F7F8FB',
        color: '#424242',
        height: 48,
    },
})

export default TextInputFocusEffect;