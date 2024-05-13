import React from "react";

const Card18 = ({ title }) => {
    return (
        <div
            className={`h-[90px] p-[0_39px] flex rounded-[16px] text-[#222222] justify-between items-center shadow-[0px_0px_70px_0px_#8A8A8A1A] dark:bg-[white]`}
        >
            <h4 className="text-[18px] font-[bold] leading-[16px]">{title}</h4>

            <div>
                <img src="/src/assets/arrow.svg" alt="" />
            </div>
        </div>
    );
};

export default Card18;