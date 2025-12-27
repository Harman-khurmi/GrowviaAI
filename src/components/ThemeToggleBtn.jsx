import React, { useEffect } from 'react'
import { icons } from '../assets/assets'
const IconComponent = icons;

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(theme === "light" ? "dark" : "light");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <div>
                {theme === "light" ? (
                    <button
                        name='theme toggle button'
                        onClick={() => setTheme("dark")}
                        className="bg-bg-light/60 text-dark-text rounded-full border hover:border-bg-dark p-1 md:p-2 hover:bg-bg-dark hover:text-white transition-all duration-200 "
                    >
                        <IconComponent.darkIcon className="stroke-2" />
                    </button>
                ) : (
                        <button
                            name='theme toggle button'
                        onClick={() => setTheme("light")}
                        className="text-white bg-transparent rounded-full border p-1 md:p-2 hover:border-bg-light hover:bg-bg-light hover:text-dark-text transition-all duration-200 "
                    >
                        <IconComponent.lightIcon className="stroke-2" />
                    </button>
                )}
            </div>
        </>
    )
}

export default ThemeToggleBtn
