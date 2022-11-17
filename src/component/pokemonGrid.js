import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { PokemonCard } from '../component/pokemonCard';
import { pokemonGridAction } from '../store/action';

const Styled = {
    Grid: styled.div`
        width: 80%;
        height: auto;
        margin: auto;
        display: grid;
        grid-template-columns: 25vw 25vw 25vw;
        grid-template-rows: auto;
        gap: 2.5vw;
        justify-content: center;
        background-color: transparent;
    `,
}

export function PokemonGrid() {

    const dispatch = useDispatch();

    const { pokemonGrid } = useSelector(state => state.data);
    const { pokemonArray, loading } = pokemonGrid;

    const { searchbar, typeFilter } = useSelector(state => state.ui);

    useEffect(() => {
        if (pokemonArray == null) { dispatch(pokemonGridAction.loadList()); }
    }, [loading]);

    useEffect(() => {
        dispatch(pokemonGridAction.filter({ typeFilter: typeFilter, searchbar: searchbar }));
    }, [searchbar, typeFilter])

    return (
        <Styled.Grid>
            {pokemonArray && pokemonArray.map((item, index) => {
                return (
                    <PokemonCard key={index} pokemon={item} />
                )
            })}
        </Styled.Grid>
    );
}