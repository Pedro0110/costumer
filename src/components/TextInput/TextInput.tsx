import React from 'react';
import {TextInput as TextInputPaper, TextInputProps} from 'react-native-paper';

interface ITextInput extends TextInputProps {}

const TextInput = ({label, value, maxLength, onChangeText}: ITextInput) => (
  <TextInputPaper
    mode="outlined"
    label={label}
    maxLength={maxLength}
    value={value}
    onChangeText={onChangeText}
  />
);

export default TextInput;
