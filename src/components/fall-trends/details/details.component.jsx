import React from 'react'
import Tags from '../../tags/tags.component'
import Collaborators from '../collaborators/collaborators.component'
import { DetailsContainer, Text, HideButton } from './details.styled.component'

const FallDetails = ({ setShowMore, showMore, opacity, setOpacity, animateStyle, state }) => {
    const dummyTags = ['Fall', 'Summer', '2018', 'Season', 'New Trends']
    const dummyCollborators = [11, 12, 13, 14, 15, 16, 17, 18]

    const toggleAnimation = () => {
        opacity > 1 ? setOpacity(1) : setOpacity(0)
        setTimeout(() => {
            showMore ? setShowMore(false) : setShowMore(true)
        }, 1000)
    }
    const _hide = () => {
        toggleAnimation()
        showMore ? setShowMore(false) : setShowMore(true)
    }
    return (
        <DetailsContainer state={state} style={{ ...animateStyle }}>
            <Text opacity={opacity} style={{ ...animateStyle }}>
                the latest trends for Woman for next fall will be<br />
                represented in this collection and will be available in<br />
                all markets.
            </Text>
            <Tags opacity={opacity} tagsArray={dummyTags} style={{ ...animateStyle }}/>
            <Collaborators opacity={opacity} collabArray={dummyCollborators} style={{ ...animateStyle }}/>
            <HideButton onClick={_hide}>hide</HideButton>
        </DetailsContainer>
    )
}

export default FallDetails