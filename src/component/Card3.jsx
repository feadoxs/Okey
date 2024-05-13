export default function Card1({ img, title }) {
    return (
        <>
            <div className="p-[24px]">
                    <div className="flex items-center border-r min-h-[80px] pr-[10px]">
                        <div className="mr-[17px]">
                            <img src={img} alt="" />
                        </div>
                        <p className="text-[rgba(31,36,40,1)] text-[16px] font-[semibold] text-start">{title}</p>
                    </div>
                </div>
        </>
    )
}