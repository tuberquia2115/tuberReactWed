import React from 'react';
import { fetchAndActivate } from '@firebase/remote-config';
import { remoteConfig } from '../../firebase/services';
import { getTemplate } from '../../firebase/services/remoteConfig';

export const RemoteConfig = () => {
  const [info, setInfo] = React.useState<any>();
  const getInfoRemote = () => {
    const { desings, title } = getTemplate();
    setInfo({ desings, title });
  };

  React.useEffect(() => {
    fetchAndActivate(remoteConfig).then((val) => {
      console.log('val', val);
    });
  }, []);

  return (
    <div>
      <h3>Hola mundo</h3>
      <button onClick={() => getInfoRemote()}>Obtener valores de remote config</button>
      <br />
      {JSON.stringify(info, null, 10)}
    </div>
  );
};
