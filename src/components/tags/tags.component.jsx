import React from 'react'
import { TagsContainer, TagsWrapper, SubTitle, TagsGroup } from './tags.styled.component'
import { Transition } from 'react-spring/renderprops'

const Tags = props => {
    const items = props.tagsArray
    return (
        <TagsContainer>
            <SubTitle>TAGS</SubTitle>
            <TagsGroup>
                <Transition
                    items={items} keys={item => item}
                    from={{ transform: 'translate3d(-100px, 0, 0)' }}
                    enter={{ transform: 'translate3d(0,0px,0)' }}
                    leave={{ transform: 'translate3d(0,0,-100px)' }}>
                    {item => props => <TagsWrapper style={{...props}}>{item}</TagsWrapper>}
                </Transition>  
            </TagsGroup>
        </TagsContainer>
    )
}

export default Tags