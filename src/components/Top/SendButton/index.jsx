import React from 'react';
import { SendButton } from './styles';

const handleClick = () => {

}

const SendButton = () => {
    return (
        <div onClick={() => handleClick}>
            Send
        </div>
    )
}

export default SendButton;