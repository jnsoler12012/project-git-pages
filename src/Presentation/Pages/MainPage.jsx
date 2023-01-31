import React from 'react'
import { Link } from 'react-router-dom'
import InteractiveRouterLink from '../Components/InteractiveRouterLink.jsx'

export default function MainPage() {
    return (
        <div>
            <div>MainPage </div>
            <InteractiveRouterLink as={Link} to={"/time-page"} visualText={"Link to time"}>
                GO to time page 
            </InteractiveRouterLink>
        </div>

    )
}