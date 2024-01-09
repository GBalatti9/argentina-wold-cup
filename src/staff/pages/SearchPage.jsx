import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { getMemberByName } from '../helpers';
import { PlayersAndStaffCard } from '../components/PlayersAndStaffCard';


export const SearchPage = () => {

    const navigate = useNavigate();
    const { search } = useLocation();

    const { q = '' } = queryString.parse(search);
    console.log({q});

    const members = getMemberByName(q);

    const showSearchMessage = q.length === 0;
    const showErrorMessage = (q.length > 0) && ( members.length === 0 );

    const { searchText, handleInputChange } = useForm({
        searchText: q,
    })

    const handleSumit = ( e ) => {
        e.preventDefault();

        navigate(`?q=${ searchText }`);
        
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ handleSumit }>
                        <input 
                        type="text"
                        placeholder="Search an argentinan member..."
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value ={ searchText }
                        onChange={ handleInputChange }
                        />
                        <button type="submit" className="btn btn-outline-primary mt-1">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                        <h4>Results</h4>
                        <hr />

                        {
                            showSearchMessage && 
                                <div className="alert alert-primary animate__animated animate__fadeIn"> 
                                    Search a member of argentina's team 
                                </div> 
                        }

                        {
                            showErrorMessage 
                            && <div className="alert alert-danger animate__animated animate__fadeIn"> 
                                    No member was found
                                </div>
                        }

                        {
                            members.map(( member ) => (
                                <PlayersAndStaffCard key={ member.id } { ...member }/>
                            ))
                        }
                </div>
            </div>
        </>
    )
}
