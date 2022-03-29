import React from  'react';

const MyButton = (props) =>  {
  return ( 
    <button onClick={props.onClick} className='submitBtn'>{props.children}</button>
   );
}

export default MyButton;