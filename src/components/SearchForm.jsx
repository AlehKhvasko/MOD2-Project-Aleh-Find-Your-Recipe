import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
    display: flex;
    justify-content:center;

&::after {
  content:'';
  margin: -30px 3%;
  border:2px solid black;
  background:url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f7c9b59749677.5a2e65b12b000.gif');
  height:80px;
  width:80px;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  border-radius:50%;
  box-shadow:4px 4px 2px black;
}

&::before {
  content:'';
  margin: -30px 3%;
  border:2px solid black;
  background:url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f7c9b59749677.5a2e65b12b000.gif');
  height:80px;
  width:80px;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  border-radius:50%;
  box-shadow:4px 4px 2px black;
}
`;


const Input =  styled.input`

    padding: 0.5em;
    font-size:0.9em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    height: 2em;
    width: 15em;
    border-radius: 10px;
    box-shadow:-4px -4px  2px black;
    transition: width 0.4s ease-in-out;

    &:focus {
        width: 34em;
    }
`;

export default function SearchForm(props) {
    return (
        <div>
            <SearchStyle >
                <Input
                type="text"
                onChange={props.inputChange}
                placeholder='Recipe search'
                value={props.info}/>
            </SearchStyle>
        </div>
    )
}
