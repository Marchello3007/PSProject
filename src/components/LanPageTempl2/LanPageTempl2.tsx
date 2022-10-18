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
                            Терміни тагарантія
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
            </div>
        </>
    )
}

export default LanPageTempl2
