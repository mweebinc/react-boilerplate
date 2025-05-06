import React from "react";
import {InputFactory as _InputFactory} from "nq-component";
import {findObjectUseCase, saveObjectUseCase} from "../../usecases/object";
import {saveFileUseCase, saveImageUseCase} from "../../usecases/file";
import Context from "../../AppContext";

const defaultProps = {};

function InputFactory({type, _type, field, object, onChange, onProps, ...props}) {
    const context = React.useContext(Context);
    const value = object && object[field];
    if (typeof onProps === "function") {
        props = onProps(props, object, field) || props;
    }

    const _onChange = (field, value) => {
        if (object) {
            object[field] = value;
        }
        onChange(value, field);
    }

    switch (_type || type) {
        default:
            return (
                <_InputFactory
                    type={type}
                    _type={_type}
                    field={field}
                    object={object}
                    schemas={context.schemas}
                    onChange={onChange}
                    findObject={findObjectUseCase()}
                    saveObject={saveObjectUseCase()}
                    saveImage={saveImageUseCase()}
                    saveFile={saveFileUseCase()}
                    {...props}
                />
            );
    }
}

InputFactory.defaultProps = defaultProps;
export default InputFactory;
