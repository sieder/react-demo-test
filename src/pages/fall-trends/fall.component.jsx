import React, { useState } from 'react'
import FallDetails from '../../components/fall-trends/details/details.component'
import FallMenu from '../../components/fall-trends/menu/menu.component'
import { animated, useTransition } from 'react-spring'

import { FallContainer, FallHeader, FallMenuWrapper, Title, CustomButton } from './fall.styled.component'

const FallPage = () => {
    const [showMore, setShowMore] = useState(false)
    const [containerHeight, setContainerHeight] = useState(130)
    const [paddingTop, setPaddingTop] = useState(0)
    const [titleSize, setTitleSize] = useState(42)
    const transitions = useTransition(showMore, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const animateStyle = {
        transition: 'all .30s linear'
    }
    const toggleAnimation = () => {
        containerHeight > 130 ? setContainerHeight(130) : setContainerHeight(window.innerHeight)
        paddingTop > 0 ? setPaddingTop(0) : setPaddingTop(window.innerHeight)
        titleSize > 42 ? setTitleSize(42) : setTitleSize(46)
        setTimeout(() => {
            showMore ? setShowMore(false) : setShowMore(true)
        }, 100)
    }
    const _showMore = () => {
        toggleAnimation()
    }
    const fallDetailsWithTransition = () => (
        <FallDetails
            animateStyle={animateStyle}
            setShowMore={toggleAnimation}
            showMore={showMore}
        />
    )
    return (
        <FallContainer height={containerHeight} style={{ ...animateStyle }}>
            <FallHeader>
                <Title titleSize={titleSize} style={{ ...animateStyle }}>Fall Trends 2018</Title>
                {transitions.map(({ item, key, props }) =>
                    item
                        ? <animated.div key={key} style={{ ...props }}>{fallDetailsWithTransition()}</animated.div>
                        : <animated.div key={key} style={{ ...props }}><CustomButton onClick={_showMore}>More</CustomButton></animated.div>
                )}
            </FallHeader>

            <FallMenuWrapper paddingTop={paddingTop} style={{ ...animateStyle }} >
                {!showMore && <FallMenu />}
            </FallMenuWrapper>

        </FallContainer>
    )
}

export default FallPage