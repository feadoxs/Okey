export default function Card4({ title, img, name }) {
    return (
        <div className="text-[#222222]">
            <h5 className="text-[14px] font-[bold] mb-[15px]">{title}</h5>

            <div className="flex items-center justify-between p-[15px_0] border-b border-solid border-[#222222]">
                <p className="text-[15px] flex items-center"><img className="mr-[15px]" src={img} alt="" />{name}</p>

                <div>
                    <img src='/src/assets/arrow.svg' alt="" />
                </div>
            </div>
        </div>
    )
}