import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const LoginBlockedCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            policyName: _entity?.policyName,
blockedIp: _entity?.blockedIp,
startBlockedIp: _entity?.startBlockedIp,
endBlockedIp: _entity?.endBlockedIp,
        };

        setLoading(true);
        try {
            
        const result = await client.service("loginBlocked").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info loginBlocked updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Login Blocked" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="loginBlocked-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="policyName">Policy Name:</label>
                <InputText id="policyName" className="w-full mb-3 p-inputtext-sm" value={_entity?.policyName} onChange={(e) => setValByKey("policyName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["policyName"]) && (
              <p className="m-0" key="error-policyName">
                {error["policyName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="blockedIp">Blocked IP:</label>
                <InputText id="blockedIp" className="w-full mb-3 p-inputtext-sm" value={_entity?.blockedIp} onChange={(e) => setValByKey("blockedIp", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["blockedIp"]) && (
              <p className="m-0" key="error-blockedIp">
                {error["blockedIp"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="startBlockedIp">Start Blocked IP:</label>
                <InputText id="startBlockedIp" className="w-full mb-3 p-inputtext-sm" value={_entity?.startBlockedIp} onChange={(e) => setValByKey("startBlockedIp", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["startBlockedIp"]) && (
              <p className="m-0" key="error-startBlockedIp">
                {error["startBlockedIp"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="endBlockedIp">End Blocked IP:</label>
                <InputText id="endBlockedIp" className="w-full mb-3 p-inputtext-sm" value={_entity?.endBlockedIp} onChange={(e) => setValByKey("endBlockedIp", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["endBlockedIp"]) && (
              <p className="m-0" key="error-endBlockedIp">
                {error["endBlockedIp"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(LoginBlockedCreateDialogComponent);
