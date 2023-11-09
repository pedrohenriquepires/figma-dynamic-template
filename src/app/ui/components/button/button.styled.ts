import styled from 'styled-components';
import { ButtonProps } from './button.component';

export const ButtonStyled = styled.button<ButtonProps>`
  ${props => props.theme.button[props.variant || 'secondary']};
  display: inline-block;
  height: 4rem;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.borderRadius.default};
  cursor: pointer;

  &:hover {
    ${props => props.theme.button[props.variant || 'secondary'].hover};
  }
`