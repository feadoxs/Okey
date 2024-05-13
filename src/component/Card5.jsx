import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Card5({ img, title, time, price, all }) {
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }
    return (
        <div className="p-[26px_29px] grid grid-cols-4">
            <div className="border-r border-[rgba(192,201,215,1)]">
                <div className="mr-[27px]">
                    <img src={img} alt="" />
                </div>
                <div>
                    <p className="text-[18px] text-[rgba(31,36,40,1)] font-[bold]">{title}</p>
                </div>
            </div>
            <div className='flex justify-center items-center border-r border-[rgba(192,201,215,1)]'>
                <div>
                    <p className='text-[rgba(34,34,34,1)]'>{t('section5.card.text1')}</p>
                    <h3 className='text-[18px] font-[bold]'>{time}</h3>
                </div>
            </div>

            <div className='flex justify-center items-center border-r border-[rgba(192,201,215,1)]'>
                <div>
                    <p className='text-[rgba(34,34,34,1)]'>{t('section5.card.стоимость')}</p>
                    <div className='flex justify-between w-[130px]'>
                        <h3 className='text-[18px] font-[bold]'>{price}</h3>
                        <img src="/src/assets/Инфо.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='border-r h-[100%] w-[100%] flex items-center pl-[43px] border-[rgba(192,201,215,1)]'>
                    <div>
                        <p className='text-[rgba(34,34,34,1)]'>{t('section5.card.text1')}</p>
                        <h3 className='text-[18px] font-[bold]'>{time}</h3>
                    </div>
                </div>
                <div className='flex justify-center w-[20%] items-center'>
                    <img src='/src/assets/green-arrow.svg' alt="" />
                </div>
            </div>
        </div>
    )
}