export default function Card7({ img, title, text }) {
    return (
        <>
            <div className="p-[37px] shadow-[0px_0px_70px_0px_rgba(138,138,138,0.1)] bg-[white] rounded-[16px]">
                <div className="mb-[30px]">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3 className="font-[bold] text-[17px] mb-[10px]">{title}</h3>
                    <p className="text-[15px]">{text}</p>
                </div>
            </div>
        </>
    )
}