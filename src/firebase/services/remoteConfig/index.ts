import { getValue } from 'firebase/remote-config';
import { remoteConfig } from '../';

export const getTemplate = () => {
  remoteConfig.settings.minimumFetchIntervalMillis = 0;
  
  const desings: string = getValue(remoteConfig, 'desings').asString();
  const title: string = getValue(remoteConfig, 'title').asString();

  return {
    desings: JSON.parse(desings),
    title,
  };
};
