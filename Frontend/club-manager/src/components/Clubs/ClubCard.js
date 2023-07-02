import React from 'react'

const ClubCard = ({ club }) => {
    return (
        <div>
            <h3>{club.name}</h3>
            <p>{club.description}</p>
        </div>
    )
}

export default ClubCard