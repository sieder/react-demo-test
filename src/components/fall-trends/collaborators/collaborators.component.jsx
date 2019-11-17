import React, { useState } from 'react'
import { CollaboratorsContainer, CollaboratorsGroup, MoreButton, ImageContainer, SubTitle } from './collaboratos.styled.components'
import { Transition } from 'react-spring/renderprops'
import { useTransition, animated } from 'react-spring'

const Collaborators = ({ collabArray }) => {
    const [showItems, setShowItems] = useState(6)
    const [toggleItems, setToggleItems] = useState(false)
    const [moreButtonMargin, setMoreButtonMargin] = useState(396) // 396/6 = 66 #66 per image
    const [moreButtonFromTransition, setMoreButtonFromTransition] = useState(-100)
    const transitions = useTransition(toggleItems, null, {
        from: { position: 'absolute', transform: `translate3d(${moreButtonFromTransition}px, 0, 0)`, opacity: 0 },
        enter: { marginLeft: moreButtonMargin, transform: 'translate3d(0,0px,0)', opacity: 1 },
        leave: { transform: 'translate3d( 0,0,100px)', opacity: 0 },
    })
    const onClickToggleItems = () => {
        console.log(toggleItems)
        if (toggleItems) {
            setShowItems(6)
            setToggleItems(false)
            setMoreButtonMargin(396)
            setMoreButtonFromTransition(100)
        } else {
            setShowItems(collabArray.length)
            setToggleItems(true)
            setMoreButtonMargin(collabArray.length * 66)
            setMoreButtonFromTransition(-100)
        }
    }
    return (
        <CollaboratorsContainer>
            <SubTitle>COLLABORATORS</SubTitle>
            <CollaboratorsGroup>
                <Transition
                    items={collabArray.slice(0, showItems)} keys={(item, index) => index}
                    from={{ transform: 'translate3d(-100px, 0, 0)', opacity: 0 }}
                    enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
                    leave={{ transform: 'translate3d( 0,0,0)', opacity: 0 }}
                >
                    {(item, index) => props =>
                        <ImageContainer style={{ ...props }} src={item} alt="Profile photo" />
                    }
                </Transition>
                {transitions.map(({ item, key, props }) =>
                    item
                        ? <animated.div key={key} style={{ ...props }}><MoreButton onClick={onClickToggleItems}>less</MoreButton></animated.div>
                        : <animated.div key={key} style={{ ...props }}><MoreButton onClick={onClickToggleItems}>{collabArray.length - showItems}+</MoreButton></animated.div>
                )}
            </CollaboratorsGroup>
        </CollaboratorsContainer>
    )
}

export default Collaborators