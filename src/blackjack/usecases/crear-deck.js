
import _ from "underscore"

/**
 * 
 * @param {Array <String>} tiposdeCartas ejemplo: ['C','D','H','S']
 * @param {Array <String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array <String>}} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposdeCartas, tiposEspeciales) => {

    if( !tiposdeCartas || tiposdeCartas.length === 0) 
        throw new Error('tiposdeCartas es obligatorio como un arreglo de string');

    if( !tiposEspeciales || tiposEspeciales.length === 0) 
    throw new Error('tiposEspeciales es obligatorio como un arreglo de string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposdeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposdeCartas ) {
        for( let esp of tiposdeCartas ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}