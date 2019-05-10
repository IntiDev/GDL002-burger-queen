import React from 'react';
import '../App.css'
import { Button } from 'react-materialize';

const SimpleButton = () => {
    return(
        <Button
            node='a'
            waves='light'
            large
            style={{marginRight: '5px'}}
            onClick={showMessage}
        >
        Enviar
        </Button>

        /* <Button node='a' waves='light' large>
        Button
        <Icon right>
        cloud
        </Icon>
        </Button> */
    );
}

const showMessage =  () => {
    alert('Hola');
}

export default SimpleButton;