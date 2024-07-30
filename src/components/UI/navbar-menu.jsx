import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // pastikan Anda telah menginstal react-router-dom
// import { Link } from "react-router-dom"; // jika menggunakan react-router-dom

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black hover:text-gray-600 hover:opacity-[0.9] dark:text-white text-xs font-medium md:text-base md:font-normal"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className={`${
                                    item !== "Portfolio"
                                        ? "bg-transparent"
                                        : "bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                                }  `}
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-2 md:p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({ setActive, children }) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({ title, description, href, src }) => {
    return (
        <Link to={href} target="blank" className="flex space-x-2">
            <img
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl w-[6.5rem] h-20 md:w-32 md:h-24 lg:w-44 lg:h-28 2xl:w-52 2xl:h-36"
            />
            <div>
                <h4 className="text-sm md:text-base lg:text-lg 2xl:text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-xs md:text-sm 2xl:text-base max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }) => {
    return (
        <a
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black "
        >
            {children}
        </a>
    );
};
