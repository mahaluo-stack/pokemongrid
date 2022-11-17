import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Styled = {
    NavContainer: styled.div`
        width: 100%;
        height: 32px;
        border-bottom: 1px solid black;
        background: linear-gradient(0deg, #0D0A0B, #161a1d);
    `,
}

export function Navbar() {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    function handle() {

    }

    return (
        <Styled.NavContainer>

        </Styled.NavContainer>
    );
}