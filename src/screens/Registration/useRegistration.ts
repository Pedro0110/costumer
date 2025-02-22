import {useState, useEffect} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {getZipCode} from '../../api/resources';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  numero: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const useRegistration = () => {
  const [zipCode, setZipCode] = useState('');
  const [dataClient, setDataClient] = useState<Address | null>(null);

  const saveRegister = async address => {
    try {
      await EncryptedStorage.setItem(
        'REG_COSTUMER',
        JSON.stringify({teste: 'tresate'}),
      );
    } catch (_err) {
      console.log(_err);
    }
  };

  const getRegister = async () => {
    return await EncryptedStorage.getItem('REG_COSTUMER');
  };

  useEffect(() => {
    const fetch = async () => {
      if (zipCode.length === 8) {
        const address = await getZipCode(zipCode);
        console.log(address);
        setDataClient(address);
      }
    };

    fetch();
  }, [zipCode]);

  return {
    zipCode,
    setZipCode,
    dataClient,
    setDataClient,
    saveRegister,
    getRegister,
  };
};
