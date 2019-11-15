import React from 'react'
import { TagsContainer, TagsWrapper, SubTitle } from './tags.styled.component'

const Tags = props => {
    const tagsArray = props.tagsArray
    const listTagsArray = tagsArray.map((tag) =>
        <TagsWrapper>{tag}</TagsWrapper>
    )
    return (
        <TagsContainer>
            <SubTitle>TAGS</SubTitle>
            {listTagsArray}
        </TagsContainer>
    )
}

export default Tags