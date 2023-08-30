import { ButtonHTMLAttributes } from "react";

type CustomButtonType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "">;

export const Button = (props: CustomButtonType) => {
    return <button {...props} />;
};
