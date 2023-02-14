import {Progress,Spinner} from "nq-component";

function noop() {
}

const defaultProps = {
    positiveButton: 'YES',
    negativeButton: 'CANCEL',
    onPositiveClick: noop,
    onNegativeClick: noop,
    type: 'danger',
    icon: 'bi bi-exclamation-circle'
}

function ConfirmDialog({}) {
    return (
        <div className="p-3 px-lg-5 py-lg-4">
            <div className="text-center">
                <Spinner className="mb-2"/>
                <h5>Processing...</h5>
            </div>
        </div>

    );
}

ConfirmDialog.defaultProps = defaultProps;
export default ConfirmDialog;
