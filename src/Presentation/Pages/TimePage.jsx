import React from 'react'
import { Link } from 'react-router-dom'
import InteractiveRouterLink from '../Components/InteractiveRouterLink.jsx'

export default function TimePage() {
    return (
        <div>
            <div>TimePage</div>
            <InteractiveRouterLink as={Link} to={"/"}>
                GO to MainPage
            </InteractiveRouterLink>
        </div>

    )
}