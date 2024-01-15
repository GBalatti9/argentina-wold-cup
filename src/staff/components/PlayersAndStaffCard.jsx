import { Link, useLocation } from "react-router-dom";
// import teamMemberImages from '../../seleccionArgentina/*.jpg';

export const PlayersAndStaffCard = ({
    id,
    name,
    lastName,
    role,
    team = '',
    position
}) => {

    // const imageTeamMember = `../../assets/seleccionArgentina/${ id }.jpg`;

    // Production
    const imageTeamMember = `assets/seleccionArgentina/${id}.jpg`;
    // const teamMemberImage = teamMemberImages(`./${id}.jpg`);

    const { pathname } = useLocation(); 
    return (
        <>
            <div className="card animate__animated animate__fadeIn">
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
                        {
                            pathname.includes('search') && <p className="card-text"> <span className="fw-bold"> Role: </span> { role }</p>
                        }
                        
                    <Link to={`/${role}/${id}`} >
                        More info...
                    </Link>
                    </div>

                </div>
            </div>
        </>
    )
}
