import React from 'react';

import LoadingCompound from '../../components/LoadingCompound';
import { getUser } from '../../firebase/services/firestore';
import { User } from '../../interfaces/interfaceGlobal';

export const Home = () => {
  const [hasLoading, setHasLoading] = React.useState<boolean>(true);
  const [userData, setUserData] = React.useState<User>();

  React.useEffect(() => {
    getUser()
      .then((dataUser) => {
        setUserData(dataUser);
        setHasLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <LoadingCompound isLoading={hasLoading}>
      <code>{JSON.stringify(userData, null, 10)}</code>
    </LoadingCompound>
  );
};
