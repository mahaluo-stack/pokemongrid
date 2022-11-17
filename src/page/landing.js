import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { PageContainer } from '../base';
import { TypeFilter, Searchbar, PokemonGrid } from '../component';

export function Landing() {

    return (
        <PageContainer.Body>
            <TypeFilter />
            <Searchbar />
            <PokemonGrid />
        </PageContainer.Body>
    );
}