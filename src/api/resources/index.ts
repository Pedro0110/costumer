import Client from '../config';

export const getZipCode = (zipCode: string) => {
  return Client.get(`${zipCode}/json/`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
