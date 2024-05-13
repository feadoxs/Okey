import React from 'react'
import Card13 from '../../component/Card13'

const Магазины = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[230px] flex items-center justify-center'>
        <div className='max-w-[1120px] m-[auto] w-[100%] h-[100%] md:w-[90%] md:m-[auto]'>
          <p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Популярные магазины</p>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Популярные магазины</h2>
        </div>
      </section>

      <section className='pt-[160px]'>
        <div className='grid grid-cols-5 gap-[15px] md:grid-cols-2'>
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
          <Card13 img={"/src/assets/puma.svg"} title={"Primark (Форма заказа)"} />
        </div>
      </section>
    </>
  )
}

export default Магазины
