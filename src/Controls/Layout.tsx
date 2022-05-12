import * as React from "react";
import styles from "../assets/scss/Estilo.module.scss";

interface ILayoutProps { }

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
        <div>
            <div>
                <div>
                    {children}
                </div>
            </div>
        </div>
        </>
    );
};
