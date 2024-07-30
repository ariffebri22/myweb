"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const HeroParallax = ({ products }) => {
    const navigate = useNavigate();
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );

    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-600, 300]),
        springConfig
    );
    // Mobile Version
    const translateXMobile = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 800]),
        springConfig
    );
    const translateXReverseMobile = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -800]),
        springConfig
    );
    const translateYMobile = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-400, 100]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[160vh] lg:h-[300vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px]  [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY:
                        window.innerWidth < 768 ? translateYMobile : translateY,
                    opacity,
                }}
                className=" "
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10  mb-10 md:mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={
                                window.innerWidth < 768
                                    ? translateXMobile
                                    : translateX
                            }
                            key={product.title}
                            navigate={navigate}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-10 md:mb-20 space-x-10 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={
                                window.innerWidth < 768
                                    ? translateXReverseMobile
                                    : translateXReverse
                            }
                            key={product.title}
                            navigate={navigate}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 ">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={
                                window.innerWidth < 768
                                    ? translateXMobile
                                    : translateX
                            }
                            key={product.title}
                            navigate={navigate}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-8 md:px-20 w-full left-0 top-0"
            data-aos="fade-up"
            data-aos-duration="2000"
        >
            <h1 className="text-3xl md:text-7xl font-bold text-white">
                Some of the best <br /> projects I have worked on
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
                I develop projects using the latest frameworks and technologies,
                creating innovative solutions that consistently follow current
                trends and meet industry standards.
            </p>
        </div>
    );
};

export const ProductCard = ({ product, translate, navigate }) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product lg:h-96 h-32 w-40 md:w-80 md:h-64 lg:w-[30rem] relative flex-shrink-0 cursor-pointer"
            onClick={() => navigate(`/myportfolio/${product.link}`)}
        >
            <div className="block group-hover/product:shadow-2xl z-50">
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};
