import {useState, useEffect, use} from 'react';
import {getZipCode} from '../../api/resources';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const useRegistration = () => {
  const [zipCode, setZipCode] = useState('');
  const [street, setStreet] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');

  const [dataClient, setDataClient] = useState<Address | null>(null);

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

  useEffect(() => {}, [dataClient]);

  return {
    zipCode,
    setZipCode,
    dataClient,
    setStreet,
    setComplement,
    setNeighborhood,
    setCity,
    setState,
    setNumber,
  };
};
