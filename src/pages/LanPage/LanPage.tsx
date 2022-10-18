import LanPageTempl from 'components/LanPageTempl/LanPageTempl'
import LanPageTempl2 from 'components/LanPageTempl2/LanPageTempl2'
import lanPageContentArray from 'content/lanpages'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

type LanPageContent = {
    headTitle: string
    headImage: string
    headText: string

    itemImage1: string
    itemImage2: string
    itemImage3: string

    itemTitle1: string
    itemTitle2: string
    itemTitle3: string

    itemText1: string
    itemText2: string
    itemText3: string

    id: number
    category: string
    dscr: string
    idurl: string
}

const LanPage = (props: Props) => {
    const { idurl } = useParams()
    const currentidurl = idurl
    return (
        <>
            {lanPageContentArray
                .filter(({ idurl }: LanPageContent) => idurl === currentidurl)
                .map(
                    ({
                        id,
                        headTitle,
                        headImage,
                        headText,
                        itemImage1,
                        itemImage2,
                        itemImage3,
                        itemTitle1,
                        itemTitle2,
                        itemTitle3,
                        itemText1,
                        itemText2,
                        itemText3,
                        dscr,
                    }: LanPageContent) => (
                        <LanPageTempl
                            key={id}
                            headTitle={headTitle}
                            headImage={headImage}
                            headText={headText}
                            itemImage1={itemImage1}
                            itemImage2={itemImage2}
                            itemImage3={itemImage3}
                            itemTitle1={itemTitle1}
                            itemTitle2={itemTitle2}
                            itemTitle3={itemTitle3}
                            itemText1={itemText1}
                            itemText2={itemText2}
                            itemText3={itemText3}
                            dscr={dscr}
                        />
                    )
                )}
        </>
    )
}

export default LanPage
