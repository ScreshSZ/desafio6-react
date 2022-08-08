import React from 'react'
import Link from 'next/link'

const Cards = ({ name }) => {
    return (
        <>
            <Link href={name}>
                <h2>{name}</h2>
            </Link>
        </>
    )
}

export default Cards