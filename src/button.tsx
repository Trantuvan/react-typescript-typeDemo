import React, { ComponentProps, MouseEventHandler, ReactNode } from "react";

export type buttonProps = {
  className: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
};

const Button = ({
  className,
  children,
  ...props
}: ComponentProps<"button">) => (
  <button {...props} className={className}>
    {children}
  </button>
);
// const Button: React.FC<buttonProps> = ({
//   className,
//   children,
// }) => (
//   <button className={className}>
//     {children}
//   </button>
// );

export default Button;
