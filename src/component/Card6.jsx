export default function Card6({ img, title, desc }) {
    return (
        <div className="dark:bg-[white] rounded-[10px] overflow-hidden">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="text-[#1F2428] p-[15px]">
                <h4 className="text-[20px] font-[bold] w-[210px] leading-[24px]">{title}</h4>
                <p className="text-[16px]  leading-[30px] mt-[7px]">{desc}</p>
            </div>
        </div>
    )
}