import React from "react"
import { twMerge } from "tailwind-merge"

type Props = {
    children: React.ReactNode,
    className?: string,
    otherProps?: any
}

export const Container = (props: Props) => {

    const { children, className, otherProps } = props

    return (
        <div className={twMerge("w-[100vw] min-h-[86vh]", className)} {...otherProps}>
            {children}
        </div>
    )

}