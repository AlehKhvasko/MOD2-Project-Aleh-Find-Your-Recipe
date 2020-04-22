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
   padding-top:15px;
   text-align:left; 
`;
const StyledDiv = styled.p`
   color:lightcoral;
   margin:5px;
`
const StyledP = styled.p`
   color:#76051E;
   margin:5px;
`


export default function Ingredients({ingredients}) {
    return ingredients.map((info,index) => {
       return ( 
       <StyledMain
         key={index}>
            <StyledP>{index}.</StyledP><StyledDiv>{info.text}</StyledDiv> 
       </StyledMain>
        )
});
};
