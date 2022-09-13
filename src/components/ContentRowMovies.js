import React from 'react';
import PropTypes from 'prop-types';

const ContentRowMovies = (props) => {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card ${props.borde} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`${props.icono} text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
ContentRowMovies.propTypes = {
    titulo: PropTypes.string,
    cifra: PropTypes.number,
    icono: PropTypes.string,
    borde: PropTypes.string
}

export default ContentRowMovies;
