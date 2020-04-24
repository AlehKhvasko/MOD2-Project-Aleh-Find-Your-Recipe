import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
   display: flex;
   flex-flow:column;
   justify-content:center;
   align-items:center;
   border:2px solid black;
   background-color:rgb(168, 182, 179, 0.7);
   padding:5%;
   border-radius:50px;
   box-shadow:10px 10px 4px black;
   margin:5%;
   font-size:1.4rem;
   text-align:center;
   font-weight:bold;
   font-style:italic;
`;   

const StyledDiv2 = styled.div`
   list-style-type:none;
   border:1px solid black;
   padding:8%;
   color:green;
   background-image:url('https://www.ppt-backgrounds.net/thumbs/pics-photos--notebook-notebook-paper-for---clip-art-background-backgrounds.jpg');
   box-shadow:2px 2px 1px black;
   font-style:italic;
   font-weight: normal;
`;
const StyledImg = styled.img`
    border:2px solid black;
    box-shadow:10px 10px 4px black;
`

export default function TopStateless(props) {
    return (
        <StyledDiv>

            <h2>{props.article}</h2>
            <StyledImg src={props.imgpath} alt='no img' width='550' height='600'/>
            <p>{props.article2}</p>
            <ul>
                <StyledDiv2>
                <li>{props.list}</li>
                <li>{props.list2}</li>
                <li>{props.list3}</li>
                <li>{props.list4}</li>
                <li>{props.list5}</li>
                <li>{props.list6}</li>
                <li>{props.list7}</li>
                <li>{props.llist7}</li>
                <li>{props.llist1}</li>
                <li>{props.llist2}</li>
                <li>{props.llist3}</li>
                </StyledDiv2>
            </ul>
            <h3>{props.title2}</h3>
            <ul>
                <StyledDiv2>
                <li>{props.list8}</li>
                <li>{props.list9}</li>
                <li>{props.list10}</li>
                <li>{props.list11}</li>
                <li>{props.list12}</li>
                </StyledDiv2>
            </ul>
        </StyledDiv>
    )
}
