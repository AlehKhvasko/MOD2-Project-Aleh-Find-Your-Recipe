import React from 'react'

export default function Ingredients({ingredients}) {
    return ingredients.map((info,index) => {
       return ( 
       <div 
       className="ingredients"
       key={index}>
          <p>{info.text}</p>  
       </div>
        )
});
};
