"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../UI/navbar-menu";
import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

export function Navbar() {
    const navigate = useNavigate();
    const [active, setActive] = useState(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}>
            <Menu setActive={setActive}>
                <a href="#home">
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item={"Home"}
                    ></MenuItem>
                </a>
                <a href="#about">
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="About Me"
                    ></MenuItem>
                </a>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Portfolio"
                >
                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Level Up Beaute"
                            href="https://levelupbeaute.id"
                            src="/AssetLUB.png"
                            description="This is Official Website for Level Up Beaute a company operating in the beauty sector."
                        />
                        <ProductItem
                            title="Shellasaukia.co"
                            href="https://shelasaukia.co"
                            src="/AssetSSS.png"
                            description="This is Official Website for Shellasaukia.co a company operating in the fashion sector."
                        />
                        <ProductItem
                            title="SS Group"
                            href="https://ssgroup.id"
                            src="/AssetSSG.png"
                            description="This is Official Website for SS Group a company operating in the beauty & fashion sector."
                        />
                        <ProductItem
                            title="Level Up Style"
                            href="https://levelupstyle.id"
                            src="/AssetLUS.png"
                            description="This is Official Website for Level Up Style a company operating in the fashion sector."
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <h1
                            className="text-center mt-4 cursor-pointer hover:text-gray-500"
                            onClick={() => navigate(`/myportfolio`)}
                        >
                            See All
                        </h1>
                    </div>
                </MenuItem>
                <a href="#contact">
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item={"Contact Me"}
                    ></MenuItem>
                </a>
            </Menu>
        </div>
    );
}

export default Navbar;
