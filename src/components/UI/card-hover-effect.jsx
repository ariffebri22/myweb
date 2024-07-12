import { cn } from "../../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10"
            )}
        >
            {items.map((category, idx) => (
                <div
                    key={category.title}
                    className="relative group block p-4"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card title={category.title} items={category.items} />
                </div>
            ))}
        </div>
    );
};

export const Card = ({ title, items }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-8 bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20"
            )}
        >
            <div className="relative z-50">
                <CardTitle>{title}</CardTitle>
                <CardList items={items} />
            </div>
        </div>
    );
};

export const CardTitle = ({ children }) => {
    return (
        <h4 className={cn("text-white font-bold tracking-widest text-lg mt-4")}>
            {children}
        </h4>
    );
};

export const CardList = ({ items }) => {
    return (
        <div className="mt-4">
            {items.map((item) => (
                <div
                    key={item.link}
                    className="flex items-center gap-2 justify-start mb-4"
                >
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="w-8 h-8 rounded-full bg-cover mr-2"
                    />
                    <a
                        href={item.link}
                        className="flex items-center text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.name}
                    </a>
                </div>
            ))}
        </div>
    );
};
