import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { theme } from '~/app/core/Theme'
import { ButtonStyled } from './button.styled'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof theme.button
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}