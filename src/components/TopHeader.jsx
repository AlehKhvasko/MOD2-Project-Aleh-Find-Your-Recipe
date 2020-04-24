import React from 'react'

export default function TopHeader(props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <h2>{props.article}</h2>
        </div>
    )
}
