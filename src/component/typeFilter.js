import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { typeFilterAction } from '../store/action';
import { typeIcon } from '../img/typeIcon';
import { type } from '../pokemonResource';

const Styled = {
    TypeRow: styled.div`
        width: 60%;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 30px auto; 
    `,
    TypeIcon: styled.div`
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
            opacity: 1 !important;
            height: 120%;
            width: 120%;
        }
    `,
}

export function TypeFilter() {

    const dispatch = useDispatch();

    const { typeFilter } = useSelector(state => state.ui);
    const { enabled } = typeFilter;

    function handleChange(icon) {
        dispatch(typeFilterAction.onChange({ enabled: enabled, icon }));
    }

    return (
        <Styled.TypeRow>
            {Object.values(type).map((icon, index) => {
                return (
                    <Styled.TypeIcon
                        key={index}
                        style={{ opacity: (enabled[icon.name] ? 1 : 0.5), backgroundImage: `url("${typeIcon[icon.name]}")` }}
                        onClick={() => handleChange(icon)} />
                );
            })}
        </Styled.TypeRow>
    );
}