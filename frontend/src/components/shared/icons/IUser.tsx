import { IIconProps } from "./types";

export default function IUser({ width, height, color , stock}: IIconProps) {
    return (
        <svg
            width={`${width}px` || "28px"}
            height={`${height}px` || "28px"}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                <circle
                    cx="12"
                    cy="9"
                    r="3"
                    stroke={color ? `${color}` : "#333"}
                    strokeWidth={stock ? stock : "1.5"}
                ></circle>
                <path
                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                    stroke={color ? `${color}` : "#333"}
                    strokeWidth={stock ? stock : "1.5"}
                    strokeLinecap="round"
                ></path>
                <path
                    d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                    stroke={color ? `${color}` : "#333"}
                    strokeWidth={stock ? stock : "1.5"}
                    strokeLinecap="round"
                ></path>
            </g>
        </svg>
    );
}

