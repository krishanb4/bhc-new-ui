import React from "react";
import { ButtonProps } from "../../..";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    extraButtons?: Array<ButtonProps>;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
