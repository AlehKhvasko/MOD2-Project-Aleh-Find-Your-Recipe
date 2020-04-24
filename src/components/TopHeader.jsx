import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled.h3`
    font-family:Arial, Helvetica, sans-serif;
    font-style:italic;
    font-weight:300;
`

export default function TopHeader(props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <StyledH3>'{props.article}'</StyledH3>
        </div>
    )
}
