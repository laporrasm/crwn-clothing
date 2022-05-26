import { FormInputLabel, Input, Group } from './form-input.styles';

/* true && expression always evaluates to expression, and false && expression always evaluates to false */
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
