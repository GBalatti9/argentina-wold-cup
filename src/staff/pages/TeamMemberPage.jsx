import { useNavigate, useParams } from "react-router-dom"
import { getMemberById } from "../helpers/getMemberById";


export const TeamMemberPage = () => {

    const { id } = useParams();
    const member = getMemberById( id );
    
    const navigate = useNavigate();

    const handleNavigate = ( role ) => {
        if (role === 'player') navigate( '/players' );
        if (role === 'staff')  navigate( '/staff' );
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img 
                    src={`/assets/seleccion-argentina/${ id }.jpg`} 
                    alt={ `${member.name}  ${member.lastName}` }
                    className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3>{ `${member.name}  ${member.lastName}` }</h3>
                <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Role: </b> { member.role } </li>
                        <li className="list-group-item"> <b> Team: </b> { member.team } </li>
                        <li className="list-group-item"> <b> Position: </b> { member.position } </li>
                    </ul>
            
                    <div className="d-flex justify-content-around">
                        <button 
                            onClick = { () => handleNavigate( member.role ) }>
                                Go to { member.role } 
                            </button>
                        <button 
                            onClick = { () => handleNavigate( member.role === 'player' ? 'staff' : 'player') }>
                                Go to { member.role === 'player' ? 'staff' : 'player' } 
                        </button>
                    </div>

            </div>
        </div>
    )
}
