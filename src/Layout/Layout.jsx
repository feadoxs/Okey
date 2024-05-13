import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Switcher from '../component/switcher/Switcher';
import { changeLanguage } from 'i18next';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from 'react';

const Layout = () => {
    const { t, i18n } = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <nav className='sticky top-[0] dark:bg-[#161b22] z-[2] bg-[white]'>
                <div className='max-w-[1120px] m-[auto] h-[100px] flex items-center justify-between'>
                    <div>
                        <Link><img src="/src/assets/Лого.svg" alt="" /> </Link>
                    </div>
                    <ul className='flex md:hidden'>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={"/как покупать"}>{t('header.nav.l1')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={'/распродажи'}>{t('header.nav.l2')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={'/цены'}>{t('header.nav.l3')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={'/бонусы'}>{t('header.nav.l5')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={'/блог'}>{t('header.nav.l6')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] mr-[40px] dark:text-[white]' to={'/помощь'}>{t('header.nav.l4')}</Link></li>
                        <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px] dark:text-[white]' to={'/магазины'}>{t('header.nav.l7')}</Link></li>
                    </ul>
                    <button variant="outlined" onClick={handleClickOpen} className='hidden md:block dark:text-[white] text-[20px]'>
                        <MenuIcon />
                    </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Menu"}
                        </DialogTitle>
                        <DialogContent>
                            <ul className='w-[250px]'>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={"/как покупать"}>{t('header.nav.l1')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/распродажи'}>{t('header.nav.l2')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/цены'}>{t('header.nav.l3')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/бонусы'}>{t('header.nav.l5')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/блог'}>{t('header.nav.l6')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/помощь'}>{t('header.nav.l4')}</Link></li>
                                <li><Link className='text-[rgba(31,36,40,1)] font-[semibold] text-[15px]' onClick={() => handleClose()} to={'/магазины'}>{t('header.nav.l7')}</Link></li>
                            </ul>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>close</Button>
                        </DialogActions>
                    </Dialog>
                    <div className='flex items-center'>
                        <div className='mr-[25px]'>
                            <p className='text-[15px] font-[semibold] dark:text-[white] md:hidden'>{t('header.nav.text')}</p>
                        </div>
                        <select name="" id="" onChange={(e) => changeLanguage(e.target.value)} className='mr-[25px] outline-none text-[15px] text-[rgba(31,36,40,1)] bg-transparent dark:text-[white] border-none shadow-[0] font-[semibold]'>
                            <option value="ru" className='dark:bg-[#0f172a]'>Ru</option>
                            <option value="en" className='dark:bg-[#0f172a]'>En</option>
                        </select>
                        <Switcher />
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer className='pt-[160px]'>
                <section className='header-section rounded-[36px] mb-[15px]'>
                    <div className='max-w-[1120px] m-[auto]'>
                        <div className='flex justify-between min-h-[250px] items-center'>
                            <div className='md:w-[90%] md:m-[auto]'>
                                <h3 className='text-[30px] font-[bold] text-[white]'>{t("section10.title")}</h3>
                            </div>
                            <div className='flex md:hidden'>
                                <img src="/src/assets/Ватсап.svg" className='mr-[10px]' alt="" />
                                <img src="/src/assets/Вайбер.svg" className='mr-[10px]' alt="" />
                                <img src="/src/assets/Чат.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='max-w-[1120px] m-[auto]'>
                        <div className='grid grid-cols-4 gap-[30px] mb-[55px] pt-[70px] md:grid-cols-2'>

                            {/* 1 */}
                            <div className='dark:text-[white]'>
                                <img src="/src/assets/Лого.svg" className='mb-[35px]' alt="" />
                                <div className='flex md:hidden'>
                                    <img src="/src/assets/Ватсап.svg" className='mr-[10px]' alt="" />
                                    <img src="/src/assets/Вайбер.svg" className='mr-[10px]' alt="" />
                                    <img src="/src/assets/Чат.svg" alt="" />
                                </div>
                            </div>

                            {/* 2 */}
                            <ul className='dark:text-[white]'>
                                <p className='mb-[15px] font-[bold] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.p")}</p>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l1")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l2")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l3")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l4")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l5")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l6")}</li>
                            </ul>
                            <ul className='dark:text-[white]'>
                                <p className='mb-[15px] font-[bold] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.p")}</p>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l1")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l2")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l3")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l4")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l5")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l6")}</li>
                            </ul>
                            <ul className='dark:text-[white]'>
                                <p className='mb-[15px] font-[bold] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.p")}</p>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l1")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l2")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l3")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l4")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l5")}</li>
                                <li className='pb-[10px] text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>{t("footer.l6")}</li>

                            </ul>
                        </div>
                    </div>
                    <div className='border-t border-[rgba(192,201,215,1)] h-[65px] flex items-center'>
                        <div className='max-w-[1120px] m-[auto]'>
                            <p className='text-[14px] text-[rgba(31,36,40,1)] dark:text-[white]'>© 2021 Okeypost . Все права защищены.</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}


export default Layout