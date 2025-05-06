import React from "react";
import Context from "../../AppContext";
import InputFactory from "../InputFactory";
import {FormFactory as _FormFactory} from "nq-component";

function FormFactory({schema, object, onChange, excludeFields, ...props}) {
    const context = React.useContext(Context);
    return <_FormFactory
        className="col-md-4"
        schema={schema}
        schemas={context.schemas}
        object={object}
        onChange={onChange}
        excludeFields={excludeFields}
        componentFactory={InputFactory}
        {...props}/>
}

export default FormFactory;
