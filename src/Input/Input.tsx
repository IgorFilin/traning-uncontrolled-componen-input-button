import React, {ChangeEvent, useState,KeyboardEvent} from 'react';

type InputType = {
    callback: () => void
    filterInput: string
    setFilterInput: (f: string) => void
}

const Input: React.FC<InputType> = (props) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setFilterInput(e.currentTarget.value)
    }


   const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
       if(e.key === 'Enter'){
           props.callback()
       }


   }


    return (
        <div>
            <input onKeyDown={onKeyPressHandler} value={props.filterInput} onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;