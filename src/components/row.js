import React from 'react';

const Row = (props) => {
    return (
        <tr>
            <td>{props.titulo}</td>
            <td>{props.duracion}</td>
            <td>{props.rating}</td>
            <td><ul>{props.genero.map(genre => <li>{genre}</li>)}</ul></td>
            <td>{props.premios}</td>
        </tr>
    );
}

export default Row;
