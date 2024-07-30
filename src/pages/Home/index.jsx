import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import { Spotlight } from "../../components/UI/spotlight";
import { HoverEffect } from "../../components/UI/card-hover-effect";
import { DirectionAwareHover } from "../../components/UI/direction-aware-hover";
import { HoverBorderGradient } from "../../components/UI/hover-border-gradient";
import { HeroParallax } from "../../components/UI/hero-parallax";
import { TextRevealCard } from "../../components/UI/text-reveal-card";
import { useNavigate } from "react-router-dom";
import { stack } from "../../data/stack";
import { portfolio } from "../../data/portfolio";
import { message } from "antd";
import "./style.css";

let urlSheet = import.meta.env.VITE_REACT_APP_SHEET_KEY;

const Home = () => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.name || !formData.email || !formData.message) {
            message.error("Please fill out all fields");
            setIsLoading(false);
            return;
        }

        try {
            const formDataObj = new URLSearchParams();
            formDataObj.append("name", formData.name);
            formDataObj.append("email", formData.email);
            formDataObj.append("message", formData.message);

            const response = await fetch(urlSheet, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formDataObj,
                mode: "cors",
            });

            if (response.ok) {
                message.success(
                    "Message sent successfully! I'll get back to you soon, see you soon!"
                );
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message to Google Sheet");
            }
        } catch (error) {
            message.error("Failed to send message to Google Sheet");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="bg-black">
            <Navbar />
            <section
                className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
                id="home"
            >
                <div className="flex md:items-center md:justify-center m-auto max-w-screen-2xl">
                    <Spotlight
                        className="-top-10 -left-20 md:left-20 md:top-32 lg:left-60 lg:-top-20"
                        fill="white"
                    />
                    <div className="p-4 max-w-7xl flex flex-col justify-center mt-20 items-center mx-auto relative z-10 w-full pt-0 px-8 md:px-0">
                        <h1
                            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            Hi! I&apos;m Arif, a <br />
                            Fullstack Developer
                        </h1>
                        <p
                            className="mt-4 font-normal text-sm text-neutral-300 max-w-lg text-center mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="2500"
                        >
                            I&apos;m glad to connect with you! Welcome to my
                            personal website, where you can learn more about me,
                            see the technologies I&apos;m currently working on,
                            and explore some of the projects I&apos;ve
                            completed. I&apos;m here to help you solve problems
                            or create solutions in the field of technology. I
                            hope we can collaborate. Please feel free to contact
                            me.
                        </p>
                        <div
                            className="flex mt-10 justify-center text-center"
                            data-aos="fade-up"
                            data-aos-duration="2500"
                        >
                            <a href="mailto:muhammadariffebriansyah@gmail.com">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="bg-black text-white flex items-center space-x-2"
                                >
                                    <span>Get in touch with me</span>
                                </HoverBorderGradient>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="h-screen flex w-full gap-20 antialiased bg-grid-white/[0.02]"
                id="about"
            >
                <div
                    className="gap-20 md:gap-0 overflow-hidden lg:gap-20 lg:-mt-10 md:items-center md:justify-start flex max-w-screen-2xl m-auto w-full flex-col-reverse lg:flex-row h-screen"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="flex-1 flex justify-end md:justify-start lg:justify-end items-center md:items-start lg:items-center px-8 md:px-0 ">
                        <div className="max-w-[30rem] ">
                            <h1 className="text-white text-2xl font-medium">
                                Hello there!
                            </h1>
                            <p className="text-neutral-300 mt-4">
                                How are you? I hope you're doing well. Let me
                                share a bit about myself. My name is Arif
                                Febriansyah, but you can call me Arif. I'm a
                                Fullstack Developer with over a year of
                                experience in this field. Before diving into
                                fullstack development, I worked as a UI/UX
                                designer. This background has equipped me with
                                the skills to create comprehensive solutions and
                                tackle problems effectively. I believe in the
                                skills and creativity that I have to in building
                                web and Android applications from start to
                                finish(end-to-end).
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-start items-center">
                        <DirectionAwareHover imageUrl="/assetPorto.png">
                            <p className="font-bold text-xl">
                                Arif Febriansyah
                            </p>
                            <a
                                href="https://www.instagram.com/fm.arif/"
                                target="_blank"
                                className="font-normal text-sm"
                            >
                                @fm.arif
                            </a>
                        </DirectionAwareHover>
                    </div>
                </div>
            </section>
            <section
                id="stack"
                className="md:h-screen flex flex-col w-full max-w-screen-2xl m-auto gap-8 bg-black/[0.96] antialiased bg-grid-white/[0.02] mt-36 md:mt-0"
            >
                <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="px-8 md:px-0"
                >
                    <h1 className="text-white font-medium text-center text-3xl md:text-4xl">
                        The technology I use
                    </h1>
                    <p className="text-neutral-300 text-sm text-center mt-2">
                        Below are some of my top tools in end-to-end application
                        development.
                    </p>
                </div>
                <div
                    className="mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <HoverEffect items={stack} />
                </div>
                <p
                    className="text-neutral-300 text-sm text-center mt-2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    There are also supporting technologies for collaboration
                    such as Github, Trello, Notion, etc
                </p>
            </section>

            <section
                id="Portfolio"
                className="flex justify-center items-center w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] mt-36 md:mt-0"
            >
                <HeroParallax products={portfolio} />
            </section>

            <section id="contact" className=" w-full py-20">
                <div className="w-full max-w-screen-2xl m-auto h-full flex flex-col items-center justify-start">
                    <div
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="px-8 md:px-0 flex flex-col items-center justify-center"
                    >
                        <h1 className="text-white font-medium text-center text-3xl md:text-4xl">
                            Get in touch with me!
                        </h1>
                        <p className="text-neutral-300 text-sm text-center mt-2 max-w-[30rem]">
                            Do you have a project? Perhaps I can assist you. Or
                            are you looking to expand your network? Feel free to
                            contact me. I eagerly look forward to connecting
                            with you!
                        </p>
                    </div>
                    <div className="w-full h-full  flex flex-col md:flex-row py-32 gap-16 md:gap-10">
                        <div
                            className="md:w-1/3 flex items-center justify-center md:justify-end "
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <div className="relative md:flex">
                                <div className="cardContainer w-56 md:w-72 h-72 md:h-96">
                                    <div className="profileDiv shadow-md relative">
                                        <img
                                            src="/Profile.png"
                                            alt="FotoProfile"
                                            width={20}
                                            height={20}
                                            className="w-full h-full"
                                        />
                                        <h1 className="absolute bottom-0 font- mb-2">
                                            Hover Me
                                        </h1>
                                    </div>
                                    <div className="infoDiv">
                                        <div className="nameDiv">
                                            <p className="name">
                                                Arif Febriansyah
                                            </p>
                                            <p className="role">
                                                Fullstack Developer
                                            </p>
                                        </div>
                                        <div className="socialDiv">
                                            <a
                                                href="https://github.com/ariffebri22"
                                                target="blank"
                                            >
                                                <svg
                                                    viewBox="0 0 496 512"
                                                    className="socials github"
                                                >
                                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.linkedin.com/in/ariffebri/"
                                                target="blank"
                                            >
                                                <svg
                                                    viewBox="0 0 448 512"
                                                    className="socials linkdin"
                                                >
                                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.instagram.com/fm.arif/"
                                                target="blank"
                                            >
                                                <svg
                                                    className="socials instagram"
                                                    viewBox="0 0 448 512"
                                                >
                                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-2/3 xl:pr-40 2xl:pr-52"
                            data-aos="fade-up"
                            data-aos-duration="2000"
                        >
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="space-y-6 md:px-8 w-72 md:w-[35rem] lg:w-auto md:mt-14 lg:mt-0 m-auto"
                            >
                                <div className="relative">
                                    <input
                                        placeholder="John Doe"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                        required
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        placeholder="email"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                                        required
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        className="peer h-32 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent border-t-0 border-r-0 border-l-0 outline-none focus:outline-none focus:border-white"
                                        required
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    <label
                                        className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-white peer-focus:text-sm"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                </div>
                                <button
                                    className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 hover:bg-slate-800 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                                        {isLoading ? (
                                            <>Sending...</>
                                        ) : (
                                            <>
                                                Contact me
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 448 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className=""
                                                >
                                                    <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-96 md:h-[56vh] flex flex-col justify-start mt-32 items-center w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
                <div
                    className="max-w-[40rem]"
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                >
                    <TextRevealCard
                        text="Need a website like this?"
                        revealText="Let's talk about that's! "
                    >
                        {" "}
                    </TextRevealCard>
                </div>
            </section>
            <section
                id="Footer"
                className="w-full h-24 border-t-[0.5px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 md:justify-between px-12 border-t-white bg-black/[0.96] antialiased bg-grid-white/[0.02]"
            >
                <h1 className="text-white">@ 2024. All Rights Reserved</h1>
                <h1 className="text-white">Created by Arif Febriansyah</h1>
            </section>
        </div>
    );
};

export default Home;
