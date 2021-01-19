import React, { Fragment } from 'react';
import { IconType } from 'react-icons/lib';
import { Label } from './label/Label';
import { OutlinedField } from './outlined-field.style';

interface Props {
  icon: IconType;
  name: string;
  placeholder: string;
  type?: string;
}

export const LabeledField: React.FC<Props> = ({ icon, name, placeholder, type }) => {
  return (
    <Fragment>
      <Label icon={icon} htmlFor={name} value={name} />
      <OutlinedField
        // error
        name={name}
        id={name}
        size="medium"
        placeholder={placeholder}
        type={type}
        // defaultValue="Hello World"
        fullWidth
      />
    </Fragment>
  );
};
