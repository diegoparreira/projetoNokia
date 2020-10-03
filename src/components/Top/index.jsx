import React from 'react';
import SendButton from './SendButton'; 
import Screen from './Screen';
import {Container} from './styles';

const Top = () => {
    return (
        <Container>
            <Logo />
            <Screen />
            <SendButton />
        </Container>
    )
}

export default Top;