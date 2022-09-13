import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';


function ContentRowTop(){

	let propiedades = [
		{
			titulo : "MOVIES IN DATA BASE",
			borde : "border-left-primary",
			cifra : 21,
			icono : "fas fa-film fa-2x"
		},
		{
			titulo : "TOTAL AWARDS",
			borde : "border-left-success",
			cifra : 79,
			icono : "fas fa-award fa-2x"
		},
		{
			titulo : "ACTORS QUANTITY",
			borde : "border-left-warning",
			cifra : 49,
			icono : "fas fa-user fa-2x"
		}
	]

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">

					{
						propiedades.map(({titulo, borde, cifra, icono}, i) => <ContentRowMovies borde={borde} titulo={titulo} cifra={cifra} icono={icono} key={titulo + i}/>)
					}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb/>
						{/*<!-- End content row last movie in Data Base -->*/}
						<GenresInDb/>
						{/*<!-- Genres in DB -->*/}
						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;