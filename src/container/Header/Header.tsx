import React from 'react'
import HeaderRow from 'components/HeaderRow/HeaderRow'
import HeaderSlider from 'components/HeaderSlider/HeaderSlider'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderRow />
            <HeaderSlider />
        </>
    )
}

export default Header
