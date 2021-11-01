import React, { MouseEventHandler } from 'react';
import Switch from '@mui/material/Switch';

interface Props {
  on: boolean;
  onClick:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SwitchComponent = ({ on, onClick, ...props }: Props) => (
  <Switch inputProps={{ 'aria-label': 'Switch demo' }} onChange={onClick} {...props} />
);
