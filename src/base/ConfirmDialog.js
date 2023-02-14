import classNames from "../classNames";

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

function ConfirmDialog({title, message, icon, type}) {

    return (
        <div className="text-end">
            <div className="text-center">
                <i className={classNames(icon, 'text-' + type)} style={{fontSize: '5rem'}}></i>
                <h4 className="fw-bold">{title}</h4>
                <p className="m-0">{message}</p>
            </div>
        </div>
    );
}

ConfirmDialog.defaultProps = defaultProps;
export default ConfirmDialog;
