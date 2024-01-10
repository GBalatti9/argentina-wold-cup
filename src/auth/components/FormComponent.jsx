import { FormComponentCard } from "./FormComponentCard";

export const FormComponent = ({ type }) => {

    return (
        <div className="card col-sm-12 col-md-5 mx-auto mt-4 container bg-light">
            <FormComponentCard type = { type }/>
        </div>
    )
}
