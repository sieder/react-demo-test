import React from 'react'
import './collaborators.styles.scss'

const Collaborators = props => {
    const collabArray = props.collabArray
    const listCollabArray = collabArray.map((person) =>
        <span>{person}</span>
    )
    return (
        <div className="collab-container">
            {listCollabArray}
        </div>
    )
}

export default Collaborators