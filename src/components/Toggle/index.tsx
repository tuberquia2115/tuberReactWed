import { SwitchProps } from '@mui/material';
import React from 'react';
import { SwitchComponent } from '../UI/Switch';

type ToggleContextProps = {
  on: boolean;
  toggle: any;
};

interface ToggleProps {
  onToggle: (value: boolean) => void;
  children: JSX.Element | JSX.Element[];
}

const ToggleContext = React.createContext({} as ToggleContextProps);
ToggleContext.displayName = 'ToggleContext Switch';

const useEffectAfterMounted = (cb: () => void, dependencies: Array<boolean>) => {
  const justMounted = React.useRef(true);

  React.useEffect(() => {
    if (!justMounted.current) {
      return cb();
    }
    justMounted.current = false;
  }, [dependencies]);
};

const Toggle = ({ onToggle, children }: ToggleProps) => {
  const [on, setOn] = React.useState(false);

  const toggle = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => setOn(event.target.checked),
    [on]
  );

  useEffectAfterMounted(() => {
    onToggle(on);
  }, [on]);

  const value = React.useMemo(() => ({ on, toggle }), [on]);

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>;
};

const useToggleContext = () => {
  const context = React.useContext(ToggleContext);

  if (!context) {
    throw new Error(`Toggle compund components cannot be renderd outside the Toggle component`);
  }
  
  return context;
};

const On = ({ children }: { children: JSX.Element}) => {
  const { on } = useToggleContext();

  return on ? children : null;
};

const Off = ({ children }: { children:  JSX.Element }) => {
  const { on } = useToggleContext();
  return on ? null : children;
};



const Button = ( props:SwitchProps  ) => {
  const { on, toggle } = useToggleContext();
 return <SwitchComponent on={on} onClick={toggle} {...props} />;
};

Toggle.On = On;
Toggle.Off = Off;
Toggle.Button = Button;

export default Toggle;
