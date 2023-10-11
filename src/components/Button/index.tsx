import { FC } from 'react'
import { cls } from '../../utils/Helpers'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'filled' | 'outlined'
}

const classes = {
  base: 'rounded-xl px-4 py-2',
  variant: {
    filled: 'bg-primary text-white',
    outlined: 'border-primary text-primary border'
  }
}
const Button: FC<ButtonProps> = ({ children, variant = 'filled', className = '', ...props }) => (
  <button {...props} className={cls(`${classes.base} ${classes.variant[variant]} ${className}`)}>
    {children}
  </button>
)

export default Button
