import { useForm } from "../../hooks/useForm"


export const SearchPage = () => {

    const { searchText, handleInputChange } = useForm({
        searchText: '',
    })

    const handleSumit = ( e ) => {
        e.preventDefault();
        console.log({searchText});
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
            </div>
        </>
    )
}
