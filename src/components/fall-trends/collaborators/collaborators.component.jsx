import React from 'react'
import { CollaboratorsContainer, CollaboratorsWrapper, SubTitle } from './collaboratos.styled.components'

const Collaborators = props => {
    const collabArray = props.collabArray
    const listCollabArray = collabArray.map((person, index) =>
        <CollaboratorsWrapper key={index}>{person}</CollaboratorsWrapper>
    )
    return (
        <CollaboratorsContainer>
        <SubTitle>COLLABORATORS</SubTitle>
            {listCollabArray}
        </CollaboratorsContainer>
    )
}

export default Collaborators