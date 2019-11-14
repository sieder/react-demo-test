import React from 'react'
import './tags.styles.scss'

const Tags = props => {
    const tagsArray = props.tagsArray
    const listTagsArray = tagsArray.map((tag) =>
        <span className="tagsContainer">{tag}</span>
    )
    return (
        <div >
            {listTagsArray}
        </div>
    )
}

export default Tags