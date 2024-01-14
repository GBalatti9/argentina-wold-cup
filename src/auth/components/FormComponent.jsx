import { FormComponentCard } from "./FormComponentCard";
import { GmailButton } from "./GmailButton";

export const FormComponent = ({ type }) => {

    return (
        <div className="card col-sm-12 col-md-6 mx-auto container bg-light">
            <FormComponentCard type = { type }/>
            {
                type !== 'forget' &&
                <GmailButton type = { type }/>
            }
        </div>
    )
}
