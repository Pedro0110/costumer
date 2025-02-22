import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './Registration.style';
import {TextInput} from '../../components';
import {useRegistration} from './useRegistration';
import {Button} from 'react-native-paper';

const Registration = () => {
  const {
    zipCode,
    setZipCode,
    dataClient,
    setDataClient,
    saveRegister,
    getRegister,
  } = useRegistration();
  return (
    <SafeAreaView>
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
              setDataClient(() => ({...dataClient, ['logradouro']: value}));
            }}
          />
          <TextInput
            label="Bairro"
            value={dataClient.bairro}
            onChangeText={value => {
              setDataClient(() => ({...dataClient, ['bairro']: value}));
            }}
          />
          <TextInput
            label="Número"
            keyboardType="numeric"
            onChangeText={value => {
              setDataClient({...dataClient, ['numero']: value});
            }}
          />
          <TextInput
            label="Complemento"
            value={dataClient.complemento}
            onChangeText={value => {
              setDataClient({...dataClient, ['complemento']: value});
            }}
          />
          <TextInput
            label="Cidade"
            value={dataClient.localidade}
            onChangeText={value => {
              setDataClient({...dataClient, ['localidade']: value});
            }}
          />
          <TextInput
            label="Estado"
            value={dataClient.uf}
            onChangeText={value => {
              setDataClient({...dataClient, ['uf']: value});
            }}
          />
        </>
      )}
      <Button
        style={styles.buttonBottom}
        mode="contained"
        disabled={dataClient == null}
        onPress={() => {
          saveRegister(dataClient);
        }}>
        <Text>Continuar</Text>
      </Button>
      <Button
        style={styles.buttonBottom}
        mode="contained"
        disabled={dataClient == null}
        onPress={() => {
          console.log(getRegister());
        }}>
        <Text>exibir banco</Text>
      </Button>
    </SafeAreaView>
  );
};

export default Registration;
