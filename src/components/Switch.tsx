import lightImage from "@/public/assets/img/sun.png";
// import { handleSwitchValue } from "@/utils";
import Image from "next/image";

import { useAppState } from "../context";
import { handleSwitchValue } from "../utils";

export const SwitchDark = () => {
    const {
        appState: { isDark, setIsDark },
    } = useAppState();

    const handleLabelClick = () => {
        if (isDark) {
            handleSwitchValue(true);
            setIsDark(false);
        } else {
            handleSwitchValue(false);
            setIsDark(true);
        }
    };

    return (
        <label className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}>
            <input type="checkbox" onClick={handleLabelClick} className="theme-switcher" />
            <div className="switch-handle">
                <span className="light-text">
                    <Image src={lightImage} alt="swicher" className="filter_1" priority />
                </span>
                <span className="dark-text">
                    <i className="fa fa-moon-o" aria-hidden="true"></i>
                </span>
            </div>
        </label>
    );
};
