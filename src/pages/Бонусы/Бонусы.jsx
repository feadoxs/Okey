import React from 'react'
import Card19 from '../../component/Card19'
import icon from "../../assets/cardIcon.svg"
import { Link } from 'react-router-dom'

const Бонусы = () => {
  return (
    <>
      <div>
        <section className='header-section rounded-[36px] min-h-[380px] flex items-center justify-center'>
          <div className='max-w-[1120px] sa:max-w-[980px] xl:max-w-[390px] m-[auto] w-[100%] h-[100%] md:w-[90%]'>
            <Link to={"/"}><p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Бонусы и партнёрская программа</p></Link>
            <h2 className='font-[bold] text-[40px] mb-[10px] text-[white] md:text-[30px]'>Бонусы и партнёрская программа</h2>
            <p className='mb-[40px] font-[bold] text-[22px] text-[white] md:text-[19px]'>Платим $3 с каждой отправленной посылки</p>
            <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>Начать зарабатывать</button>
          </div>
        </section>

        <div className='max-w-[1120px] xl:max-w-[390px] sa:max-w-[980px] m-auto mt-[100px] mb-[180px]'>
          <h1 className='text-[44px] font-[bold] text-[#1F2428] mb-[40px] xl:text-center sa:text-center dark:text-[white]'>Зарабатывать с нами — проще простого:</h1>
          <div className='grid grid-cols-2 gap-[30px] justify-center md:grid-cols-1'>
            <Card19 img={icon} title={"Дарим скидку 10% вашим друзьям и подписчикам"} desc={"На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке."} />
            <Card19 img={icon} title={"Платим по £3 за отправленную посылку "} desc={"Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет."} />
            <Card19 img={icon} title={"Промо на любой вкус"} desc={"Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов."} />
            <Card19 img={icon} title={"Выплаты по запросу"} desc={"Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет."} />
            <Card19 img={icon} title={"Начисляем кэшбэк £1 на 1 посылку"} desc={"За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов "} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Бонусы
