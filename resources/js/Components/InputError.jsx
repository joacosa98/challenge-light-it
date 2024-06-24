import "../../css/inputError.css";

export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={
                "text-sm text-red-600 animate-slide-in-left " + className
            }
        >
            {message}
        </p>
    ) : null;
}
