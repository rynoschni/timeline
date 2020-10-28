import React, { useState } from 'react';

const ButtonTest = ({ onSend }) =>{
  const [inputText, setInputText] = useState('');

  const _handleClick = () =>{
    setInputText('1898')
    onSend(inputText);
  };

  return(
    <div>
      <button type="button"
      data-testid="sendButton" onClick={_handleClick}>Send</button>

    </div>  
  )
}

export default ButtonTest;