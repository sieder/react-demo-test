import React from 'react'
import './collaborators.styles.scss'

const Collaborators = props => {
    const collabArray = props.collabArray
    const listCollabArray = collabArray.map((person) =>
        <span>{person}</span>
    )
    return (
        <div className="collab-container">
        <h6>COLLABORATORS</h6>
            {listCollabArray}
        </div>
    )
}

export default Collaborators