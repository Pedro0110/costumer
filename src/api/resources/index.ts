import Client from '../config';

export const getZipCode = (zipCode: string) => {
  return Client.get(`${zipCode}/json/`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
