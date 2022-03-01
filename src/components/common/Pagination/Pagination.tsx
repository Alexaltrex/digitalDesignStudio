import React, {FC} from "react";
import style from "./Pagination.module.scss";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";

interface IPagination {
    dotsNumber: number
    onClick: (index: number) => void
    currentIndex: number
    className?: string
}

export const Pagination: FC<IPagination> = ({
                                                dotsNumber,
                                                onClick,
                                                currentIndex,
                                                className
}) => {
    const dots = [];
    for (let i = 0; i < dotsNumber; i++) {
        dots.push(i);
    }
    const themeType = useSelector(selectThemeType);

    return (
        <div className={clsx(style.pagination, className)}>
            {
                dots.map((el) => (
                    <div key={el}
                        className={clsx({
                        [style.dot]: true,
                        [style.dot_light]: themeType === "light",
                        [style.dot_dark]: themeType === "dark",
                    })}
                         onClick={() => onClick(el)}
                    >
                        {
                            currentIndex === el &&
                            <div className={style.inner}/>
                        }
                    </div>
                ))
            }
        </div>
    )
}