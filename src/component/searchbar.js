import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { searchbarAction } from '../store/action';

const Styled = {
    Searchbar: styled.input`
        width: 60%;
        height: 20px;
        display: block;
        margin: 30px auto;
        font-size: 22px;
        padding: 12px 20px 12px 40px;
        border: 1px solid white;
        border-radius: 5px;
        background-color: transparent;
        color: #F3EFF5;
    `,
}

export function Searchbar() {

    const dispatch = useDispatch();

    const { searchbar } = useSelector(state => state.ui);
    const { fieldValue } = searchbar;

    function handleChange(e) {
        dispatch(searchbarAction.onChange(e.target.value));
    }

    return (
        <Styled.Searchbar
            value={fieldValue}
            type="text"
            id="pokemonSearch"
            placeholder="Search name.. "
            onChange={(e) => {handleChange(e)}}
        />
    );
}