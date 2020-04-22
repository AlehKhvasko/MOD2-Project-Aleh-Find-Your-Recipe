import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
   display: flex;
   width:300px;
   background-image:url('https://cdn2.vectorstock.com/i/1000x1000/09/36/notebook-background-paper-in-line-vector-9180936.jpg');
   font-weight:bolder;
   background-repeat:no-repeat;
   background-size:cover;
   color:#3D4954;
   font-size:1.2em;
   margin-top:1px;
   text-align:left;
   border:1px solid black; 
`;
const StyledDiv = styled.p`
   font-size:0.9em;
   color:black;
   letter-spacing:normal;
   text-transform: uppercase;
   margin:1px;
   padding:5px;
   transition-delay:300ms;
   width:100%;
`
const StyledP = styled.p`
   color:#76051E;
   margin:5px;
 
`
const StyledInput = styled.input`
   border:4px solid black;
   transform : scale(1.5);
   margin-top:10px;
`

export default function Ingredients({ingredients}) {
    return ingredients.map((info,index) => {
       return ( 
       <StyledMain
         key={index}>
            <StyledInput type="checkbox"></StyledInput>
            <StyledP>{index}.</StyledP>
            <StyledDiv>{info.text}</StyledDiv> 
       </StyledMain>
        )
});
};
