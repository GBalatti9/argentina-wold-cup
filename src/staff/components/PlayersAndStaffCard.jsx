import { Link } from "react-router-dom";


export const PlayersAndStaffCard = ({
    id,
    name,
    lastName,
    role,
    team = '',
    position
}) => {

    const imageTeamMember = `/assets/seleccion-argentina/${ id }.jpg`;
    return (
        <>
            <div className="card">
                <div className="row no-gutters" style={{ height: '100%' }}>
                    <div className="col-4">
                        <img src={ imageTeamMember } className="card-img" alt={ `${ name } ${ lastName }` } style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="col-8 card-body">
                        <h4 className="card-title">{ `${ name }  ${ lastName }` }</h4>
                        {
                            (team !== '') && <p className="card-text"> <span className="fw-bold"> Team: </span> { team }</p>
                        }
                        <p className="card-text"> <span className="fw-bold"> Position: </span> { position }</p>
                        
                    <Link to={`/${role}/${id}`} >
                        More info...
                    </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
