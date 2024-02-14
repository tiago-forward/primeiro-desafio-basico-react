const Button = ({label}) => {

    const displayingAlert = () => {
        alert(`A label desse botão é ${label}`)
    }

    return (
        <>
            <button onClick={displayingAlert}>{label}</button>
        </>
    )
}

export default Button