import React from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
    display: flex;
    justify-content:center;

&::after {
  content:'';
  margin: -10px 1%;
  border:2px solid black;
  background:url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f7c9b59749677.5a2e65b12b000.gif');
  height:50px;
  width:50px;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  border-radius:50%;
}
&::before {
  content:'';
  margin: -10px 1%;
  border:2px solid black;
  background:url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/7f7c9b59749677.5a2e65b12b000.gif');
  height:50px;
  width:50px;
  background-size:cover;
  background-repeat:no-repeat;
  background-position:center;
  border-radius:50%;
}
`;


const Input =  styled.input`
    height: 2.5em;
    width: 30em;
    border-radius: 10px;
    box-shadow:-4px -4px  2px black;
`

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
