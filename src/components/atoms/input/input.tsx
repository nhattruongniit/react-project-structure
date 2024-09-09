import React, { InputHTMLAttributes } from 'react';

import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, type, placeholder, value, onChange, ...props }: InputProps) {
  return (
    <input
      className={`c-input ${className || ''}`}
      type={type || 'text'}
      placeholder={placeholder || 'Enter text'}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

export default Input;
