import React from 'react'

const Card15 = ({ title, desc, st, parag }) => {
    return (
        <div className={`min-h - [80px] pr-[41px]pl - [38px] flex rounded - [16px] text - [#222222] justify - between items - center shadow - [0px_0px_70px_0px_#8A8A8A1A] dark:bg-[white] p-[10px] ${st}`}>
            <div className='flex flex-col justify-center'>
                <h4 className="text-[18px] font-[bold]">{title}</h4>
                <p className='text-[14px] mt-[4px]'>{parag}</p>
            </div>

            <p className="text-[16px] pl-[30px] border-l h-[64px] flex items-center border-solid border-[#C0C9D7] font-[bold]">{desc}</p>
        </div >
    )
}

export default Card15