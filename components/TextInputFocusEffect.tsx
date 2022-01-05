import React, { Dispatch, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface TextInputFocusEffectProps {
  fieldName: string;
  setFieldName: Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  autoCapitalize: 'sentences' | 'none' | 'words' | 'characters' | undefined;
}

const TextInputFocusEffect = ({
  fieldName,
  setFieldName,
  placeholder,
  autoCapitalize = 'sentences',
}: TextInputFocusEffectProps) => {
  const [isFocus, setisFocus] = useState(true);
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
      autoFocus={true}
      onFocus={() => setisFocus(true)}
      onBlur={() => setisFocus(false)}
      autoCapitalize={autoCapitalize}
    />
  );
};

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
