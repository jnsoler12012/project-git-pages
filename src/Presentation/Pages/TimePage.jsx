import React from 'react'
import { Link } from 'react-router-dom'
import InteractiveRouterLink from '../Components/InteractiveRouterLink.jsx'

export default function TimePage() {
    const fetchFunction = async() => {

        return await fetch('http://worldtimeapi.org/api/timezone/America/Bogota')
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => console.log(data));
    }

    console.log(fetchFunction())
    return (
        <div>
            <div>TimePage</div>
            <InteractiveRouterLink as={Link} to={"/"}>
                GO to MainPage
            </InteractiveRouterLink>
        </div>

    )
}