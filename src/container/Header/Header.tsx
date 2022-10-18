import React from 'react'
import HeaderRow from 'components/HeaderRow/HeaderRow'
import HeaderSlider from 'components/HeaderSlider/HeaderSlider'
import HeadPageSlider from 'components/HeadPageSlider/HeadPageSlider'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderRow />
            <HeaderSlider />
            {/* <HeadPageSlider /> */}
        </>
    )
}

export default Header
