import React from 'react'
import styled from 'styled-components';

const StyledError = styled.h3`
    display: flex;
    justify-content:center;
    color:red;
    text-decoration:none;
    font-size:1em;
    margin:10px auto;
`
export default function Error(error) {
    return (
        <div>
            <StyledError>{error.error}</StyledError>
        </div>
    )
}
