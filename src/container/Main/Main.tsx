import About from 'pages/About/About'
import Contacts from 'pages/Contacts/Contacts'
import Delivery from 'pages/Delivery/Delivery'
import LanPage from 'pages/LanPage/LanPage'
import OurClients from 'pages/OurClients/OurClients'
import OurServices from 'pages/OurServices/OurServices'
import ReceptionPoints from 'pages/ReceptionPoints/ReceptionPoints'
import RepairCenter from 'pages/RepairCenter/RepairCenter'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<About />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/clients" element={<OurClients />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/repaircenter" element={<RepairCenter />} />
                <Route path="/receptionpoints" element={<ReceptionPoints />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path=":idurl" element={<LanPage />} />
            </Routes>
        </>
    )
}

export default Main
