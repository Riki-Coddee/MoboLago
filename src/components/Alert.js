import React from 'react'

function Alert(props) {
    const capitalize=(word)=>{
        if (!word) return "";
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && (
            <div key={props.alert.msg} className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.typ)}!</strong> {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    )
}    

export default Alert
