import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { getMemberByName } from '../helpers';
import { PlayersAndStaffCard } from '../components/PlayersAndStaffCard';


export const SearchPage = () => {

    const navigate = useNavigate();
    const { search } = useLocation();

    const { q = '' } = queryString.parse(search);

    const members = getMemberByName(q);

    const { searchText, handleInputChange } = useForm({
        searchText: q,
    })

    const handleSumit = ( e ) => {
        e.preventDefault();
        console.log({searchText});

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
                            members.map(( member ) => (
                                <PlayersAndStaffCard key={ member.id } { ...member }/>
                            ))
                        }
                </div>
            </div>
        </>
    )
}
