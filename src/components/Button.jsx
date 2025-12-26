const Button = ({ text, icon, location }) => {
    const IconComponent = icon;
    return (
        <a href={location}>
            <button
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
