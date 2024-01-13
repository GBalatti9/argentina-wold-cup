import { fetchApi } from '../helpers';
import gmailIcon from '/assets/gmail/gmail.png'

export const GmailButton = ({ type }) => {
    const typeToUse = type.charAt(0).toUpperCase() + type.slice(1);

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        console.log('handlesubmit');
        await fetchApi(`${ type } with gmail`);
    }

    return (
        <>
            <form className='mx-auto mb-3' onSubmit={ handleSubmit }>
                <button type="submit" className='p-2 btn btn-secondary'> 
                    <img 
                        src   = { gmailIcon } 
                        style = {{ width: '25px' }} /> 
                    <span className='p-2'>
                        { typeToUse } with Gmail
                    </span>
                </button>
            </form>
        </>
    )
}
