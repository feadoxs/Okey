import React from 'react'

// ПЕРЕВОД
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useRef, useState } from "react";
import иконка from '../../assets/Иконка.svg'

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card1 from '../../component/Card1';
import Card2 from '../../component/Card2';
import Card3 from '../../component/Card3';
import Card4 from '../../component/Card4';
import Card5 from '../../component/Card5';
import Card6 from '../../component/Card6';
import Card7 from '../../component/Card7';
import Card9 from '../../component/Card9';

const Home = () => {
  const { t, i18n } = useTranslation();
  function TranslateClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <section className='header-section min-h-[680px] rounded-[36px] flex items-center transition-[1s]'>
        <div className='max-w-[1120px] m-[auto]'>
          <div className='flex justify-between md:flex-col'>
            {/* Левая часть */}
            <div className='w-[50%] md:w-[100%] md:mb-[30px]'>
              <h1 className='text-[60px] font-[bold] text-[white] mb-[8px] md:text-[30px] md:text-center'>{t('header.section.h1')}</h1>
              <p className='font-[light] leading-[42px] text-[white] mb-[36px] md:text-[14px] md:text-center md:leading-[30px]'>{t('header.section.p')}</p>
              <div className='md:flex md:justify-center'>
              <button className='p-[20px_35px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] '>{t('header.section.btn')}</button>
              </div>
            </div>

            {/* Правая часть */}
            <div className='w-[45%] md:m-[auto]'>
              <img src="/src/assets/Иллюстрация.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Вторая секция */}
      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='dark:text-[white] text-[rgba(31,36,40,1)] w-[477px] font-[bold] text-[40px] mb-[40px] md:text-center'>{t('section2.h2')}</h2>
          <Swiper slidesPerView={6}
            spaceBetween={30}
            className="mySwiper mb-[54px]">
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
            <SwiperSlide><Card1 img={"/src/assets/карточка.svg"} title={t('section2.title')} /></SwiperSlide>
          </Swiper>

          <div className='flex items-center justify-between mt-[54px] md:hidden'>
            <div>
              <h3 className='text-[26px] text-[#1F2428] font-[bold] mb-[44px] w-[350px] dark:text-[white]'>Columbia Barlow Pass 550 Turbodown Jacket</h3>
              <Card2 img="/src/assets/russia.svg" desc={t("card2.desc1")} title={"7891,46₽"} />
            </div>

            <div className='w-[300px]'>
              <img src="/src/assets/Куртка.svg" alt="" />
            </div>

            <div>
              <h3 className='text-[26px] text-[#1F2428] font-[bold] mb-[44px] w-[350px] dark:text-[white] text-end'>Доставка одежды из Великобритании  от £7.79</h3>
              <div className='flex justify-end'>
                <Card2 img='/src/assets/uk.svg' desc={t("card2.desc2")} title={"£80.62"} />
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between mb-[160px]'>
            <div>
              <img src='/src/assets/Футболка.svg' alt="" />
            </div>

            <div>
              <p className='text-[#1F2428] text-[17px] font-[light] text-center dark:text-[white]'>{t("bottomSec.desc")}</p>
              <h4 className='text-[26px] text-[#1F2428] font-[bold] text-center dark:text-[white]'>{t("bottomSec.title")}</h4>
            </div>

            <div>
              <img src='/src/assets/Джинсы.svg' alt="" />
            </div>
          </div>


          {/* Карточки */}
          <Swiper slidesPerView={4}
            spaceBetween={30}
            className="mySwiper mb-[54px] swiper3">
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title1')} /></SwiperSlide>
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title2')} /></SwiperSlide>
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title3')} /></SwiperSlide>
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title4')} /></SwiperSlide>
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title1')} /></SwiperSlide>
            <SwiperSlide><Card3 img={"/src/assets/карточка.svg"} title={t('card3.title3x')} /></SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Третья секция */}
      <section className='mt-[160px] header-section min-h-[380px] rounded-[36px] flex items-center'>
        <div className='max-w-[1120px] m-[auto] flex justify-center'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='w-[25%] flex justify-center mr-[75px] md:w-[60%] md:m-[auto] md:pt-[30px] md:mb-[30px]'>
              <img className='w-[100%]' src="/src/assets/section2.svg" alt="" />
            </div>
            <div className='w-[60%] md:w-[90%] md:pb-[30px]'>
              <h2 className='text-[rgba(255,255,255,1)] text-[30px] font-[bold] mb-[11px] md:text-[25px]'>{t("section1.title")}</h2>
              <p className='text-[15px] text-[rgba(255,255,255,1)] mb-[30px]'>{t("section1.desc")}</p>
              <button className='p-[20px_50px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)]'>{t('section1.btn')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Четвёртая секция */}
      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='text-[44px] font-[bold] text-[#1F2428] leading-[50px] w-[824px] mb-[20px] dark:text-[white] md:text-[30px] md:w-[100%]'>{t("section4.hero-text")}</h2>
          <p className='w-[760px] text-[20px] text-[#1F2428] leading-[36px] mt-[20px] mb-[50px] dark:text-[white] md:text-[16px] md:w-[100%]'>{t("section4.desc")}</p>

          <div className='min-h-[270px] shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] p-[40px_28px] dark:bg-[white]'>
            <div className='grid grid-cols-5 gap-[24px] mb-[42px] md:grid-cols-2'>
              <Card4 img="/src/assets/earth.svg" title={t("section4.card.title1")} name={t("section4.card.name1")} />
              <Card4 img="/src/assets/earth.svg" title={t("section4.card.title2")} name={t("section4.card.name2")} />
              <Card4 img="/src/assets/earth.svg" title={t("section4.card.title3")} name={t("section4.card.name3")} />
              <Card4 img="/src/assets/earth.svg" title={t("section4.card.title4")} name={t("section4.card.name4")} />
              <Card4 img="/src/assets/earth.svg" title={t("section4.card.title5")} name={t("section4.card.name5")} />
            </div>
            <button className='p-[20px_50px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)]'>{t('section4.btn')}</button>
          </div>
        </div >
      </section >

      {/* Пятая секция */}
      <section className='pt-[160px] md:hidden'>
        <div className='max-w-[1120px] m-[auto]'>
          <h1 className='text-[44px] font-[bold] text-[#1F2428] leading-[50px] mb-[30px] dark:text-[white] md:text-[30px]'>{t("section5.hero-text")}</h1>

          <div className='grid grid-cols-1 gap-[20px]'>
            <div className='mt-[30px]'>
              <div className='shadow-[0px_0px_70px_0px_#8A8A8A1A] mb-[20px] rounded-[16px] dark:bg-[white]'>
                <Card5 img="/src/assets/card.svg" title={t("section5.card.title1")} time={t("section5.card.time1")} price={t("section5.card.price1")} all={t("section5.card.all1")} />
              </div>

              <div className='shadow-[0px_0px_70px_0px_#8A8A8A1A] mb-[20px] rounded-[16px] dark:bg-[white]'>
                <Card5 img="/src/assets/card.svg" title={t("section5.card.title1")} time={t("section5.card.time1")} price={t("section5.card.price1")} all={t("section5.card.all1")} />
              </div>

              <div className='shadow-[0px_0px_70px_0px_#8A8A8A1A] rounded-[16px] dark:bg-[white]'>
                <Card5 img="/src/assets/card.svg" title={t("section5.card.title1")} time={t("section5.card.time1")} price={t("section5.card.price1")} all={t("header.section5.card.all1")} />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Шестая секция */}
      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h1 className='text-[44px] font-[bold] text-[#1F2428] leading-[50px] mb-[20px] dark:text-[white] md:text-[30px]'>{t("section6.hero-text")}</h1>

          <div className='grid grid-cols-4 gap-[30px] mt-[14px] md:grid-cols-1'>
            <Card6 img="/src/assets/card6.svg" title={t("section6.card.title1")} desc={t("section6.card.desc1")} />
            <Card6 img="/src/assets/card6.svg" title={t("section6.card.title1")} desc={t("section6.card.desc1")} />
            <Card6 img="/src/assets/card6.svg" title={t("section6.card.title1")} desc={t("section6.card.desc1")} />
            <Card6 img="/src/assets/card6.svg" title={t("section6.card.title1")} desc={t("section6.card.desc1")} />
          </div>

          <div className='w-[760px] mt-[49px]'>
            <p className='text-[#1F2428] text-[20px] leading-[36px] mb-[30px] dark:text-[white] md:text-[16px] md:w-[400px]'>{t("section6.desc")}</p>
            <button className='p-[20px_50px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)]'>{t('section6.btn')}</button>
          </div>
        </div>
      </section>

      {/* Седьмая секция */}
      <section className='header-section mt-[160px] min-h-[380px] rounded-[36px] flex items-center'>
        <div className='max-w-[1120px] m-[auto]'>
          <div className='flex items-center justify-center md:flex-col'>
            <div className='w-[25%] flex justify-center mr-[75px] md:w-[60%] md:m-[auto] md:pt-[30px] md:mb-[30px]'>
              <img className='w-[100%]' src="/src/assets/seven.svg" alt="" />
            </div>
            <div className='w-[60%] md:w-[90%] md:pb-[30px]'>
              <h2 className='text-[rgba(255,255,255,1)] text-[30px] font-[bold] mb-[11px]'>{t("section7.title")}</h2>
              <p className='text-[15px] text-[rgba(255,255,255,1)] mb-[30px]'>{t("section7.desc")}</p>
              <button className='p-[20px_50px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)]'>{t('section1.btn')}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Восьмая секция */}
      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='dark:text-[white] font-[bold] text-[44px] w-[834px] mb-[20px] md:w-[100%] md:text-[30px]'>{t("section8.hero-text")}</h2>
          <p className='dark:text-[white] text-[rgba(31,36,40,1)] text-[18px] w-[604px] mb-[40px] md:w-[100%]'>{t("section8.desc")}</p>
          <div className='grid grid-cols-3 gap-[30px] md:grid-cols-1'>
            <Card7 img={"/src/assets/card8.svg"} title={t("section8.card.title1")} text={t("section8.card.desc1")} />
            <Card7 img={"/src/assets/card8.svg"} title={t("section8.card.title1")} text={t("section8.card.desc1")} />
            <Card7 img={"/src/assets/card8.svg"} title={t("section8.card.title1")} text={t("section8.card.desc1")} />
          </div>
        </div>
      </section>

      {/* Девятая секция */}
      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='dark:text-[white] font-[bold] text-[44px] mb-[40px] md:text-[30px]'>{t("section9.hero-text")}</h2>
          <div className='grid grid-cols-2 gap-[30px] justify-center mb-[40px] md:grid-cols-1'>
            <Card9 img="/src/assets/фон.svg" title={t("section9.card.title")} text={t("section9.card.desc1")} date={t("section9.card.date")} city={t("section9.card.city")} />
            <Card9 img="/src/assets/фон.svg" title={t("section9.card.title")} text={t("section9.card.desc1")} date={t("section9.card.date")} city={t("section9.card.city")} />
            <Card9 img="/src/assets/фон.svg" title={t("section9.card.title")} text={t("section9.card.desc1")} date={t("section9.card.date")} city={t("section9.card.city")} />
            <Card9 img="/src/assets/фон.svg" title={t("section9.card.title")} text={t("section9.card.desc1")} date={t("section9.card.date")} city={t("section9.card.city")} />
          </div>
          <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>{t('section9.btn')}</button>
        </div>
      </section>

      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='mb-[12px] font-[bold] text-[40px] dark:text-[white] md:text-[30px]'>{t('section10.title')}</h2>
          <p className='text-[15px] text-[rgba(31,36,40,1)] leading-[36px] mb-[10px] dark:text-[white]'>{t("section10.text1")}</p>
          <p className='text-[15px] text-[rgba(31,36,40,1)] leading-[36px] mb-[10px] dark:text-[white]'>{t("section10.text2")}</p>
          <p className='text-[15px] text-[rgba(31,36,40,1)] leading-[36px] dark:text-[white]'>{t("section10.text3")}</p>
        </div>
      </section>
    </div >
  )
}

export default Home
