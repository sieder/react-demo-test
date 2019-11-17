import React from 'react'
import Tags from '../../tags/tags.component'
import Collaborators from '../collaborators/collaborators.component'
import { DetailsContainer, Text, HideButton } from './details.styled.component'
import Faker from 'faker'

const FallDetails = ({ setShowMore, showMore }) => {
    const dummyTags = ['Fall', 'Summer', '2018', 'Season', 'New Trends']
    const dummyCollborators = Array.from({length:9}, _=>Faker.internet.avatar())
    const onClickHide = () => showMore ? setShowMore(false) : setShowMore(true)
    return (
        <DetailsContainer >
            <Text>
                the latest trends for Woman for next fall will be<br />
                represented in this collection and will be available in<br />
                all markets.
            </Text>
            <Tags tagsArray={dummyTags}/>
            <Collaborators collabArray={dummyCollborators}/>
            <HideButton onClick={onClickHide}>hide</HideButton>
        </DetailsContainer>
    )
}

export default FallDetails