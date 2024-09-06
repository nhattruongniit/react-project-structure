import { ButtonHTMLAttributes} from 'react'
import './button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

function Button({ children, variant = 'primary', className, ...restProps }: ButtonProps) {
   const buttonClass = `c-button c-button--${variant} ${className || ''}`

  return (
    <button 
      className={buttonClass.trim()} 
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button