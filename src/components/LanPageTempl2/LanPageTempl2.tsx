import React from 'react'
import './LanPageTempl2.scss'
import HandymanIcon from '@mui/icons-material/Handyman'
import { Link } from 'react-router-dom'
import HeadPageSlider from 'components/HeadPageSlider/HeadPageSlider'

type Props = {}

const LanPageTempl2 = (props: Props) => {
    return (
        <>
            <div className="page-templ-container">
                {/* .......Head Block......... */}
                <div className="head-block">
                    <div className="head-block-ttl">
                        {/* <HeadPageSlider /> */}
                        Ремонт пилососів
                    </div>
                    <div className="head-block-slider">
                        {/* <img
                            src="./images/remont_promyshlennyh_pylesosov.jpeg"
                            alt=""
                        /> */}
                        <div className="head-block-slider-size">
                            <HeadPageSlider />
                        </div>
                    </div>
                    <div className="head-block-text">
                        <Link
                            className="head-block-text-item"
                            to={`../repaircenter`}
                        >
                            <div className="head-block-text-item-square">
                                <HandymanIcon />
                            </div>
                            Як швидко полагодити пилосос
                        </Link>

                        <Link
                            className="head-block-text-item"
                            to={`../repaircenter`}
                        >
                            <div className="head-block-text-item-square">
                                <HandymanIcon />
                            </div>
                            Наші переваги
                        </Link>

                        <Link
                            className="head-block-text-item"
                            to={`../repaircenter`}
                        >
                            <div className="head-block-text-item-square">
                                <HandymanIcon />
                            </div>
                            Терміни та гарантія
                        </Link>

                        <Link
                            className="head-block-text-item"
                            to={`../repaircenter`}
                        >
                            <div className="head-block-text-item-square">
                                <HandymanIcon />
                            </div>
                            Питання та відповіді
                        </Link>
                    </div>
                </div>

                {/* .......Select Block......... */}
                <div className="select-block">
                    <div className="select-block-ttl">
                        Оберіть Ваш варіант, щоб ми могли більш детально
                        розповісти Вам про ремонт вашого пилососа.
                    </div>

                    <div className="select-block-items-zone">
                        <Link
                            className="select-block-item"
                            to={`../repaircenter`}
                        >
                            <div className="select-block-text-item-square">
                                <img
                                    src="./images/remont_pilesosov_ph.jpg"
                                    alt="Побутові пилососи"
                                />
                            </div>

                            <div className="select-block-item-name">
                                Побутові пилососи
                            </div>
                        </Link>

                        <Link
                            className="select-block-item"
                            to={`../repaircenter`}
                        >
                            <div className="select-block-text-item-square">
                                <img
                                    src="./images/robo_vcc.jpg"
                                    alt="Роботи пилососи"
                                />
                            </div>

                            <div className="select-block-item-name">
                                Роботи пилососи
                            </div>
                        </Link>

                        <Link
                            className="select-block-item"
                            to={`../repaircenter`}
                        >
                            <div className="select-block-text-item-square">
                                <img
                                    src="./images/BatVCC3.jpg"
                                    alt="Акумуляторні пилососи"
                                />
                            </div>

                            <div className="select-block-item-name">
                                Акумуляторні пилососи
                            </div>
                        </Link>

                        <Link
                            className="select-block-item"
                            to={`../repaircenter`}
                        >
                            <div className="select-block-text-item-square">
                                <img
                                    src="./images/remont_promyshlennyh_pylesosov.jpeg"
                                    alt="Промислові пилососи"
                                />
                            </div>

                            <div className="select-block-item-name">
                                Промислові пилососи
                            </div>
                        </Link>
                    </div>
                </div>

                {/* .......Options Block 01......... */}
                {/* <div className="options-block-01">
                    <div className="options-block-ttl-01">
                        Оберіть Ваш варіант, щоб ми могли більш детально
                        розповісти Вам про ремонт вашого пилососа.
                    </div>

                    <div className="options-block-items-zone-01">
                        <Link
                            className="options-block-item-01"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item-image-square-01">
                                <img
                                    src="./images/dostavkapres.jpg"
                                    alt="Замовити кур'єра"
                                />
                            </div>

                            <div className="options-block-item-name-01">
                                Замовити кур'єра
                            </div>
                        </Link>

                        <Link
                            className="options-block-item-01"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item-image-square-01">
                                <img
                                    src="./images/geolocation.jpg"
                                    alt="Привезти самостійно"
                                />
                            </div>

                            <div className="options-block-item-name-01">
                                Привезти самостійно
                            </div>
                        </Link>

                        <Link
                            className="options-block-item-01"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item-image-square-01">
                                <img
                                    src="./images/NovaPoshta.jpg"
                                    alt="Відправити Новою Поштою"
                                />
                            </div>

                            <div className="options-block-item-name-01">
                                Відправити Новою Поштою
                            </div>
                        </Link>
                    </div>
                </div> */}

                {/* .......Options Block......... */}
                <div className="options-block">
                    <div className="options-block-ttl">
                        Ми піклуємось про те, щоб Вам було зручно скористатись
                        нашими послугами. Ви можете безкоштовно замовити виїзд
                        кур'єра по Києву чи привезти пилосос на ремонт
                        самостійно в найближчий пункт прийому/видачі, або в
                        сервісний центр. Якщо Вам не підходить ні один з двох
                        варіантів, Ви можете відправити пилосос на ремонт із
                        будь-якого відділення Нової Пошти, з Києва чи з
                        будь-якого іншого міста України.
                    </div>

                    <div className="options-block-items-zone">
                        <Link
                            className="options-block-item-link"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item">
                                <div className="options-block-item-image-square">
                                    <img
                                        src="./images/dostavkapres.jpg"
                                        alt="Замовити кур'єра"
                                    />
                                </div>

                                <div className="options-block-item-name">
                                    Замовити кур'єра
                                </div>
                            </div>
                        </Link>

                        <Link
                            className="options-block-item-link"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item">
                                <div className="options-block-item-image-square">
                                    <img
                                        src="./images/geolocation.jpg"
                                        alt="Привезти самостійно"
                                    />
                                </div>

                                <div className="options-block-item-name">
                                    Привезти самостійно
                                </div>
                            </div>
                        </Link>

                        <Link
                            className="options-block-item-link"
                            to={`../repaircenter`}
                        >
                            <div className="options-block-item">
                                <div className="options-block-item-image-square">
                                    <img
                                        src="./images/NovaPoshta.jpg"
                                        alt="Відправити Новою Поштою"
                                    />
                                </div>

                                <div className="options-block-item-name">
                                    Відправити Новою Поштою
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LanPageTempl2
