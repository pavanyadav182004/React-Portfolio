import { RiDownloadLine } from "@remixicon/react";


export default function Button({label,classes, icon})
{
    return(
        <>
        <button className={`${classes} flex items-center gap-2`}>
            {label}
            {icon && (
                <span>
                <RiDownloadLine/>
                </span>
            )}
        </button>
        </>
    )
}