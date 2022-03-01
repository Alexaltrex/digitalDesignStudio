import React, {DetailedHTMLProps, FC, HTMLAttributes} from "react";
import style from "./container.module.scss"
import clsx from "clsx";

interface IContainer {
    classNameContainer?: string
    classNameInner?: string
    id?: string
}

export const Container: FC<IContainer> = ({
                                              classNameContainer,
                                              classNameInner,
                                              children,
                                              id
                                          }) => {

    return (
        <div className={clsx(style.container, classNameContainer)}
             id={id}
        >
            <div className={clsx(style.inner, classNameInner)}>
                {children}
            </div>
        </div>
    )
}