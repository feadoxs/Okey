import React from 'react'
import Card11 from '../../component/Card11'

const Распродажи = () => {
  return (
    <>
      <section className='header-section rounded-[36px] min-h-[380px] flex items-center justify-center'>
        <div className='max-w-[1120px] m-[auto] w-[100%] h-[100%] md:w-[90%]'>
          <p className='mb-[29px] text-[white] text-[13px]'>Главная  /  Распродажи</p>
          <h2 className='font-[bold] text-[40px] mb-[10px] text-[white]'>Распродажи</h2>
          <p className='mb-[40px] font-[bold] text-[22px] text-[white]'>ранний доступ к распродажам в магазинах</p>
          <button className='p-[20px_60px] text-[white] bg-[rgba(0,201,123,1)] rounded-[36px] shadow-[0px_4px_4px_0px_rgba(1,203,124,0.2)] font-[bold]'>Получить адрес в UK</button>
        </div>
      </section>

      <section className='pt-[160px]'>
        <div className='max-w-[1120px] m-[auto]'>
          <h2 className='font-[bold] text-[40px] mb-[40px] dark:text-[white] text-[rgba(31,36,40,1)] w-[834px] md:text-[30px] md:w-[100%]'>Black Friday Early Access
            ранний доступ к распродажам
            в магазинах Великобритании!</h2>
            <div className='grid grid-cols-2 gap-[33px] md:grid-cols-1'>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
              <Card11 img={"/src/assets/2.svg"} title={"Abercrombie & Fitch"} price={" £7.99 (3365₽)"} man={"CLEARANCE"} woman={"CLEARANCE"} kids={"Abercrombie kids"}/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Распродажи
