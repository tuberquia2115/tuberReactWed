import { collection, addDoc } from 'firebase/firestore';

import { firestore } from '../';
import { User } from '../../../interfaces/interfaceGlobal';

const dataUser: User = {
  name: 'Jose Manuel',
  lastName: 'Tuberquia',
  age: 23,
  direction: 'calle 23 Bis Oeste Av 8-42',
};

export const createUser = async () => {
  const usersCol = collection(firestore, 'users');
  const result = await addDoc(usersCol, { name: 'jose', lastname: 'tuberquia' });
  console.log('result', result);
};

export const getUser = (): Promise<User> => {
  return new Promise((resolve, _reject) => {
     setTimeout(() => {
      resolve({ ...dataUser });
    }, 3000);   
    // reject( new Error(Nose se pudo cargar la data del usuario))
  });
};
