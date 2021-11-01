import React, { memo } from 'react';

import './styles.css';

interface PropsGeneric {
  isLoading?: boolean;
  children: any;
}

const WrapperComponent = ({ children, isLoading }: PropsGeneric) => {
  return !isLoading ? <>{children}</> : <></>;
};

const LoadingComponent = ({ isLoading, children }: PropsGeneric) => {
  return isLoading ? <div className="container">{children}</div> : <></>;
};

const Loading = ({ children, isLoading }: PropsGeneric) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { isLoading });
  });
};

const LoadingCompound = ({ children, isLoading }: PropsGeneric) => (
  <Loading isLoading={isLoading}>
    <WrapperComponent>
      <>{children}</>
    </WrapperComponent>
    <LoadingComponent>
      <p className="loading">Cargando...</p>
    </LoadingComponent>
  </Loading>
);

const MemoryLoadingCompound = memo(LoadingCompound);

export default MemoryLoadingCompound;
