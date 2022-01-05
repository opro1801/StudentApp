import React, { Dispatch, useRef, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextInputFocusEffectProps {
  fieldName: string;
  setFieldName: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  autoCapitalize: 'sentences' | 'none' | 'words' | 'characters' | undefined;
  autoFocus?: boolean;
  isPassword?: boolean;
}

type RefType = React.MutableRefObject<TextInput>;

const TextInputFocusEffect = React.forwardRef<
  TextInput,
  TextInputFocusEffectProps
>(
  (
    {
      fieldName,
      setFieldName,
      placeholder,
      autoCapitalize = 'sentences',
      autoFocus = true,
      isPassword = false,
    },
    ref,
  ) => {
    const [isFocus, setisFocus] = useState(autoFocus);
    return (
      <TextInput
        style={[
          styles.nameInput,
          { borderWidth: isFocus ? 1 : 0, borderColor: '#3145F5' },
        ]}
        placeholder={placeholder}
        underlineColorAndroid='transparent'
        onChangeText={(text) => {
          setFieldName(text);
        }}
        autoFocus={autoFocus}
        onFocus={() => setisFocus(true)}
        onBlur={() => setisFocus(false)}
        autoCapitalize={autoCapitalize}
        ref={ref}
        secureTextEntry={isPassword}
      />
    );
  },
);

const styles = StyleSheet.create({
  nameInput: {
    marginTop: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#F7F8FB',
    color: '#424242',
    height: 48,
  },
});

export default TextInputFocusEffect;
