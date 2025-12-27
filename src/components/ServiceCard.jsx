import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const ServiceCard = ({ icon, title, description, index }) => {
    const [active, setActive] = useState(false);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        e.currentTarget.style.setProperty("--x", `${x}%`);
        e.currentTarget.style.setProperty("--y", `${y}%`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            onMouseMove={handleMove}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            // onClick={() => setActive((p) => !p)}
            className={`service-card-main
        ${active ? "before:opacity-100" : ""}`}
            style={{
                backgroundClip: "padding-box",
            }}
        >
            {/* Gradient Border Layer */}
            <div
                className={`pointer-events-none absolute -inset-1 rounded-xl opacity-0 transition-opacity duration-500 ${active ? "opacity-100" : "group-hover:opacity-100"}`}
                style={{
                    background: `
            radial-gradient(
              300px circle at var(--x, 50%) var(--y, 50%),
              rgba(29,191,115,0.9),
              rgba(29,191,115,0.8),
              rgba(55,157,255,0.5),
              transparent 75%
            )
          `,
                    mask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
                    WebkitMask: `
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0)
          `,
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "3px",
                }}
            />

            {/* Content */}
            <div className="relative z-1 flex min-w-[20%]">
                <img
                    src={icon}
                    alt="service-icons"
                    draggable="false"
                    className="service-card-icon icon-primary"
                />
            </div>

            <div className="relative z-1 flex flex-col text-left gap-1">
                <h3 className="font-semibold md:text-base lg:text-lg">{title}</h3>
                <p className="text-dark-text/75 dark:text-light-text-dull md:text-sm lg:text-base">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
