export default function Card9({ img, title, text, date, city }) {
    return (
        <>
            <div className="flex p-[10px] bg-[white] shadow-[0px_0px_70px_0px_rgba(138,138,138,0.1)] rounded-[16px]">
                <div className="mr-[38px]">
                    <img src={img} alt="" />
                </div>
                <div>
                    <div className="mb-[47px]">
                        <h3 className="mb-[6px] text-[17px] font-[bold]">{title}</h3>
                        <img className="mb-[15px]" src="/src/assets/star.svg" alt="" />
                        <p className="text-[rgba(31,36,40,1)] text-[16px]">{text}</p>
                    </div>
                    <div>
                        <li className="text-[rgba(31,36,40,1)] font-[bold] list-none text-[15px]">Дата:<span className="text-[14px] text-[rgba(31,36,40,1)] leading-[24px] pl-[20px]">{date}</span></li>
                        <li className="text-[rgba(31,36,40,1)] font-[bold] list-none text-[15px]">Город:<span className="text-[14px] text-[rgba(31,36,40,1)] pl-[15px]">{city}</span></li>
                    </div>
                </div>
            </div>
        </>
    )
}