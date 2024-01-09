import { getFormByType } from "../helpers"


export const FormComponent = ({ type }) => {

    const formElements = getFormByType( type );
    const { type: formType, inputs } = formElements ? formElements : [];

    return (
        <div className="card col-4 mx-auto mt-4 container">
            {
                formType === 'register'
                ? <h2 className="text-center pt-3"> Register </h2>
                : <h2 className="text-center pt-3"> Login </h2>
            }
            <hr />
            <form>
                {
                    inputs.map(( input ) => (
                        <div key={ input.name + formType }>
                        <label className="form-label" htmlFor={ input.name }>{ input.label }</label>
                        <input
                            type = { input.type }
                            name = { input.name }
                            id   = { input.name }
                            className="form-control"
                            />
                        </div>
                    ))
                }
                {
                    formType === 'register'
                    ? <button className="btn btn-primary mt-3 mb-3"> Register </button>
                    : <button className="btn btn-primary mt-3 mb-3"> Login </button>
                }
            </form>
        </div>
    )
}
