import React from 'react';

type ButtonType = {
    name: string
    callback: () => void

}

const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <span>
            <button onClick={onClickHandler}>{props.name}</button>
        </span>
    );
};

export default Button;