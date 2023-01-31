import React from 'react'
import { Link } from 'react-router-dom'
import InteractiveRouterLink from '../Components/InteractiveRouterLink'

export default function ErrorPage() {
    return (
        <div>
            <div>404 ErrorPage</div>
            <InteractiveRouterLink as={Link} to={"/"}>
                GO to MainPage
            </InteractiveRouterLink>
        </div>
        

    )
}