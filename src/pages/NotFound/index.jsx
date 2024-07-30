import React from "react";
import { TypewriterEffectSmooth } from "../../components/UI/typewriter-effect";

const NotFound = () => {
    const words = [
        {
            text: "This",
        },
        {
            text: "Page",
        },
        {
            text: "is",
        },
        {
            text: "Under",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Construction.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center pt-20">
                <svg
                    width="150"
                    height="150"
                    viewBox="0 0 2000 1649"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M470.219 833.78C512.942 778.857 576.295 748.05 648.082 748.05C730.621 748.05 801.526 788.435 843.376 859.071L1082.26 1272.9H1515.28L1059.88 483.871C1018.03 414.71 947.704 375.18 866.039 375.18C782.924 375.18 711.146 416.461 669.585 488.53L886.091 113.349C927.941 41.2615 999.432 0 1082.84 0C1165.96 0 1237.45 41.2615 1279.3 113.349L1970.1 1310.1C2010.5 1381.59 2009.91 1463.26 1968.65 1534.45C1927.08 1606.82 1855.59 1648.08 1772.19 1648.08H1067.15C887.55 1648.08 827.97 1582.98 741.948 1433.91L649.532 1273.78L556.829 1433.91C470.804 1582.98 411.524 1648.08 231.626 1648.08H0L470.219 833.78Z"
                        fill="#ffffff"
                    />
                </svg>
                <p className="text-neutral-200 dark:text-neutral-200 text-xs sm:text-base mt-8">
                    Sorry for the inconvenience, because{" "}
                </p>
                <TypewriterEffectSmooth words={words} />
                <div className="flex flex-col space-y-4 md:space-y-0 space-x-0 md:space-x-4 h-full justify-between pb-10 items-center gap-10">
                    <a href="https://ariff.site">
                        <button
                            type="button"
                            className="bg-black/[0.96] text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                        >
                            <div className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                                <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000000"
                                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                    ></path>
                                    <path
                                        fill="#000000"
                                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                    ></path>
                                </svg>
                            </div>
                            <p className="translate-x-2 text-neutral-200">
                                Go Back
                            </p>
                        </button>
                    </a>
                    <h1 className="text-neutral-200">Arif Febriansyah</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
