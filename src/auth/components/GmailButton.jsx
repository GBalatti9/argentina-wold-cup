import gmailIcon from '/assets/gmail/gmail.png'

export const GmailButton = ({ type }) => {
    const typeToUse = type.charAt(0).toUpperCase() + type.slice(1);
    return (
        <>
            <form className='mx-auto mb-3'>
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
