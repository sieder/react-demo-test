import React, { useState } from 'react'
import FallDetails from '../../components/fall-trends/details/details.component'
import FallMenu from '../../components/fall-trends/menu/menu.component'
import { Transition } from "react-transition-group"

import { FallContainer, FallHeader, FallMenuWrapper, Title, CustomButton } from './fall.styled.component'

const FallPage = () => {
    const [showMore, setShowMore] = useState(false)

    const [containerHeight, setContainerHeight] = useState(130)
    const [paddingTop, setPaddingTop] = useState(0)
    const [opacity, setOpacity] = useState(0)
    const [titleSize, setTitleSize] = useState(42)

    const animateStyle = {
        transition: 'all .30s linear'
    }
    const toggleAnimation = () => {
        containerHeight > 130 ? setContainerHeight(130) : setContainerHeight(window.innerHeight)
        paddingTop > 0 ? setPaddingTop(0) : setPaddingTop(window.innerHeight)
        titleSize > 42 ? setTitleSize(42) : setTitleSize(46)
        opacity > 0 ? setOpacity(0) : setOpacity(1)
        setTimeout(() => {
            showMore ? setShowMore(false) : setShowMore(true)
        }, 100)
    }
    const _showMore = () => {
        toggleAnimation()
    }
    const fallDetailsWithTransition = () => (
        <Transition in={showMore} appear={true} timeout={10}>
            {state => (
                <FallDetails
                    state={state}
                    animateStyle={animateStyle}
                    opacity={opacity}
                    setOpacity={setOpacity}
                    setShowMore={toggleAnimation}
                    showMore={showMore}
                    style={{ ...animateStyle }} />
            )}
        </Transition>
    )
    return (
        <FallContainer height={containerHeight} style={{ ...animateStyle }}>
            <FallHeader>
                <Title titleSize={titleSize} style={{ ...animateStyle }}>Fall Trends 2018</Title>
                {showMore
                    ? fallDetailsWithTransition()
                    : <CustomButton onClick={_showMore}>More</CustomButton>}
            </FallHeader>

            <FallMenuWrapper paddingTop={paddingTop} style={{ ...animateStyle }} >
                {!showMore && <FallMenu />}
            </FallMenuWrapper>

        </FallContainer>
    )
}

export default FallPage