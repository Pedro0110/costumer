import React from 'react';
import {Text, View} from 'react-native';
import styles from './Registration.style';
import {TextInput} from '../../components';
import {useRegistration} from './useRegistration';

const Registration = () => {
  const {
    zipCode,
    setZipCode,
    dataClient,
    setStreet,
    setComplement,
    setNeighborhood,
    setCity,
    setState,
    setNumber,
  } = useRegistration();

  return (
    <View>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        label="CEP"
        value={zipCode}
        maxLength={8}
        onChangeText={value => {
          setZipCode(value);
        }}
      />
      {dataClient && (
        <>
          <TextInput
            label="Endereço"
            value={dataClient.logradouro}
            onChangeText={value => {
              setStreet(value);
            }}
          />
          <TextInput
            label="Bairro"
            value={dataClient.bairro}
            onChangeText={value => {
              setNeighborhood(value);
            }}
          />
          <TextInput
            label="Número"
            onChangeText={value => {
              setNumber(value);
            }}
          />
          <TextInput
            label="Complemento"
            value={dataClient.complemento}
            onChangeText={value => {
              setComplement(value);
            }}
          />
          <TextInput
            label="Cidade"
            value={dataClient.localidade}
            onChangeText={value => {
              setCity(value);
            }}
          />
          <TextInput
            label="Estado"
            value={dataClient.uf}
            onChangeText={value => {
              setState(value);
            }}
          />
        </>
      )}
    </View>
  );
};

export default Registration;
