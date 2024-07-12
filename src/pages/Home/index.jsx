import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Spotlight } from "../../components/UI/spotlight";
import { HoverEffect } from "../../components/UI/card-hover-effect";
import { DirectionAwareHover } from "../../components/UI/direction-aware-hover";
import { HoverBorderGradient } from "../../components/UI/hover-border-gradient";
import { HeroParallax } from "../../components/UI/hero-parallax";
import { TextRevealCard } from "../../components//UI/text-reveal-card";
import { useNavigate } from "react-router-dom";
import { stack } from "../../data/stack";
import { portfolio } from "../../data/portfolio";
import "./style.css";

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-black">
            <Navbar />
            <section
                className="h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
                id="home"
            >
                <div className="flex md:items-center md:justify-center m-auto max-w-screen-2xl">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20"
                        fill="white"
                    />
                    <div className=" p-4 max-w-7xl flex flex-col justify-center mt-20 items-center  mx-auto relative z-10  w-full pt-20 md:pt-0">
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
                                    <span>Mail Me</span>
                                </HoverBorderGradient>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="h-screen flex w-full gap-20 bg-black/[0.96] antialiased bg-grid-white/[0.02]"
                id="about"
            >
                <div
                    className="gap-20 flex max-w-screen-2xl m-auto w-full"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <div className="flex-1 flex justify-end items-center">
                        <div className="max-w-[30rem]">
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
                    <div className="flex-1 flex justify-start items-center">
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
                className="h-screen flex flex-col w-full max-w-screen-2xl m-auto gap-8 bg-black/[0.96] antialiased bg-grid-white/[0.02]"
            >
                <div data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="text-white font-medium text-center text-4xl">
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
                className="flex justify-center items-center w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]"
            >
                <HeroParallax products={portfolio} />;
            </section>
            <section
                id="contact"
                className="h-screen flex flex-col justify-center items-center w-full bg-black/[0.96] 2xl:-mt-44 antialiased bg-grid-white/[0.02]"
            >
                <div className="flex flex-col justify-center items-center w-full max-w-screen-2xl m-auto overflow-hidden">
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <h1 className="text-white font-medium text-center text-4xl">
                            Get in touch with me!
                        </h1>
                        <p className="text-neutral-300 text-sm text-center mt-2 max-w-[30rem]">
                            Do you have a project? Perhaps I can assist you. Or
                            are you looking to expand your network? Feel free to
                            contact me. I eagerly look forward to connecting
                            with you!
                        </p>
                    </div>
                    <div className="flex w-full justify-end items-center h-[70vh] ">
                        <div
                            className="w-1/3 flex justify-end items-center"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            <div className="cardContainer w-72 h-96">
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
                                        <p className="name">Arif Febriansyah</p>
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
                        <div
                            className="w-2/3 relative flex justify-start items-center"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            <div className="login-box max-w-[40rem]">
                                <form>
                                    <div className="user-box">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                        />
                                        <label>Name</label>
                                    </div>
                                    <div className="user-box">
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                        />
                                        <label>Email</label>
                                    </div>
                                    <div className="user-box">
                                        <textarea
                                            name="message"
                                            rows={6}
                                            required
                                        />
                                        <label>Message</label>
                                    </div>
                                    <button type="submit">
                                        <p href="">
                                            SEND
                                            <span></span>
                                        </p>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-[56vh] flex flex-col justify-start mt-32 items-center w-full bg-black/[0.96] antialiased bg-grid-white/[0.02]">
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
                className="w-full h-24 border-t-[0.5px] flex items-center justify-between px-12 border-t-white bg-black/[0.96] antialiased bg-grid-white/[0.02]"
            >
                <h1 className="text-white">@ 2024. All Rights Reserved</h1>
                <h1 className="text-white">Created by Arif Febriansyah</h1>
            </section>
        </div>
    );
};

export default Home;
