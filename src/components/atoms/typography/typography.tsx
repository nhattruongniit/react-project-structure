import React, { ReactNode } from 'react';

import './typography.scss';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const Component = variant;
  return <Component className={`typography ${variant} ${className}`}>{children}</Component>;
};

export default Typography;
