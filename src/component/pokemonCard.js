import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';
import { getPokemonResource } from '../util/getPokemonResource';
import { typeIcon } from '../img/typeIcon';

const Styled = {
    Wrapper: styled.div`
        border: 1px #F3EFF5 solid;
        border-radius: 20px;
    `,
    Container: styled.div`
        height: 250px;
        border-radius: 20px;
        cursor: pointer;
        position: relative;
    `,
    TypeImage: styled.div`
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        opacity: 0.1;
    `,
    PokemonImage: styled.div`
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: bottom right;
        opacity: 0.45;
        position: absolute;
        top: auto;
        right: 5px;
        bottom: 5px;
        left: auto;
    `,
    TextBody: styled.div`
        height: 100%;
        position: absolute;
        top: 16px;
        right: auto;
        bottom: auto;
        left: 16px;
    `
}

export function PokemonCard({ pokemon }) {

    const { name, types, img, variations, bestMoves, cp } = pokemon;
    const { fastMove, chargeMove } = bestMoves;

    const ref = useRef();
    const [inViewRef, inView] = useInView();

    const setRefs = useCallback((node) => {
        ref.current = node;
        inViewRef(node);
    }, [inViewRef]);

    return (
        <Styled.Wrapper ref={setRefs}>
            {inView && inView ?
                <Styled.Container style={{ textShadow: `0px 0px 3px ${getPokemonResource('type', types[0]).colour}` }}>

                    {types.length > 1 ?
                        <Styled.TypeImage
                            style={{
                                backgroundPosition: 'left bottom, right top',
                                backgroundSize: '70% 70%',
                                backgroundImage: `url("${typeIcon[types[0]]}"), url("${typeIcon[types[1]]}")`
                            }} />
                        :
                        <Styled.TypeImage
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: '70%',
                                backgroundImage: `url("${typeIcon[types[0]]}")`
                            }} />
                    }

                    <Styled.PokemonImage
                        style={{
                            backgroundImage: `url("${getPokemonResource('pokemonImg', img[0])}")`,
                        }} />

                    <Styled.TextBody>
                        <p style={{ margin: '0', fontSize: '30px' }}>{name}</p>
                        <p style={{ margin: '5px 0', fontSize: '24px' }}>{cp}cp</p>
                        <p style={{ margin: '10px 0 0 0', fontSize: '24px' }}>{fastMove}</p>
                        <p style={{ margin: '0', fontSize: '24px' }}>{chargeMove}</p>

                        <div style={{ margin: '16px auto auto 0' }}>
                            {variations.includes('shadow') ?
                                <p style={{ margin: '0', fontSize: '18px' }}>
                                    shadow ✓
                            </p>
                                :
                                null
                            }
                            {variations.includes('shiny') ?
                                <p style={{ margin: '5px 0', fontSize: '18px' }}>
                                    shiny ✓
                            </p>
                                :
                                null
                            }
                        </div>
                    </Styled.TextBody>

                </Styled.Container>
                :
                <div style={{ height: '250px', width: '100%' }}>
                    {/* <ComponentLoader /> */}
                </div>
            }
        </Styled.Wrapper>
    );
}


PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
}