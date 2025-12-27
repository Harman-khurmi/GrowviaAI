const Button = ({ text, icon, location,name }) => {
    const IconComponent = icon;
    return (
        <a href={location}>
            <button
                name={name}
                type="button"
                className="btn-primary"
            >
                {text}
                <IconComponent />
            </button>
        </a>
    )
}

export default Button
