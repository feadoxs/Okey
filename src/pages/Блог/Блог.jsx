import React from 'react'
import Card12 from '../../component/Card12'

const Блог = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[230px] flex items-center justify-center'>
        <div className='max-w-[1120px] m-[auto] w-[100%] h-[100%] md:w-[90%] md:m-[auto]'>
          <p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Распродажи</p>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Блог</h2>
        </div>
      </section>

      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <div className='grid grid-cols-3 gap-[31px] md:grid-cols-1'>
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
            <Card12 title={"Интернет-магазин Urban Outfitters в UK: обзор"} date={"22.10.2021"} time={"8 минут"} img={"/src/assets/3.svg"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Блог
