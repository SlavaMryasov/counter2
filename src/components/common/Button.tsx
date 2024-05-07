
type ButtonType = {
    title: string
    disabled: boolean
    onClick: () => void
}


export const Button = ({ title, disabled, onClick }: ButtonType) => {

    return (
        <button disabled={disabled} onClick={onClick}>{title}</button>
    )
}