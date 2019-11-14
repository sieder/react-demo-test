import React, { useState } from 'react'
import FallDetails from '../../components/fall-trends/details/details.component'
import FallMenu from '../../components/fall-trends/menu/menu.component'
import './fall.styles.scss'

const FallPage = () => {
    const [showMore, setShowMore] = useState(false)
    const [width, setWidth] = useState(170)
    const animateStyle = {
        transition: 'all 1s ease-out'
    }
    const toggleShowMore = () => {
        width > 170 ? setWidth(170) : setWidth(340)
        setTimeout(() => {
            showMore ? setShowMore(false) : setShowMore(true)
        }, 1000)
    }
    const _showMore = () => {
         toggleShowMore()
    }
    return (
        <div className="fall-container" style={{...animateStyle,  height: `${width}px`}}>
            <h2>Fall Trends 2018</h2>
            { showMore ? <FallDetails setShowMore={toggleShowMore} /> : <button onClick={_showMore}>more</button> }
            { !showMore && <FallMenu /> }
        </div>
    )
}

export default FallPage