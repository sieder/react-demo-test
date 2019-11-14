import React, { useEffect, useState, useCallback, useReducer } from 'react'
import Tags from '../../tags/tags.component'
import Collaborators from '../collaborators/collaborators.component'
import './details.styles.scss'
import { Col } from 'antd'

const FallDetails = ({ setShowMore }) => {
    const dummyTags = ['Fall', 'Summer', '2018', 'Season', 'New Trends']
    const dummyCollborators = [1, 2, 3, 4, 5, 6, 7 ,8]
    const [opacity, setOpacity] = useState(1)
    useEffect(() => {
        (async () => {
            opacity === 0 && setShowMore(0)
        })()
    }, [opacity])
    const _hide = async () => {
        setOpacity(0)
    }
    const animateStyle = {
        transition: 'all .40s ease-out'
    }
    return (
        <div className="details-container" style={{ ...animateStyle, opacity }}>
            <p>the latest trends for Woman for next fall will be</p>
            <p>represented in this collection and will be available in</p>
            <p>all markets.</p>

            <h6>TAGS</h6>
            <Tags tagsArray={dummyTags} />
            
            <h6>COLLABORATORS</h6>
            <Collaborators collabArray={dummyCollborators} />
            <button onClick={_hide}>hide</button>
        </div>
    )
}

export default FallDetails