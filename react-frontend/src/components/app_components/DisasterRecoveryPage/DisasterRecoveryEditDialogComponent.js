import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


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

const DisasterRecoveryCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            drName: _entity?.drName,
isDefault: _entity?.isDefault,
username: _entity?.username,
password: _entity?.password,
port: _entity?.port,
url: _entity?.url,
        };

        setLoading(true);
        try {
            
        const result = await client.service("disasterRecovery").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info disasterRecovery updated successfully" });
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
        <Dialog header="Edit Disaster Recovery" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="disasterRecovery-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="drName">DR Name:</label>
                <InputText id="drName" className="w-full mb-3 p-inputtext-sm" value={_entity?.drName} onChange={(e) => setValByKey("drName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["drName"]) && (
              <p className="m-0" key="error-drName">
                {error["drName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="isDefault">Is Default:</label>
                <Checkbox id="isDefault" className="ml-3" checked={_entity?.isDefault} onChange={(e) => setValByKey("isDefault", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["isDefault"]) && (
              <p className="m-0" key="error-isDefault">
                {error["isDefault"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="username">Username:</label>
                <InputText id="username" className="w-full mb-3 p-inputtext-sm" value={_entity?.username} onChange={(e) => setValByKey("username", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["username"]) && (
              <p className="m-0" key="error-username">
                {error["username"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="password">Password:</label>
                <InputText id="password" className="w-full mb-3 p-inputtext-sm" value={_entity?.password} onChange={(e) => setValByKey("password", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["password"]) && (
              <p className="m-0" key="error-password">
                {error["password"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="port">Port:</label>
                <InputText id="port" className="w-full mb-3 p-inputtext-sm" value={_entity?.port} onChange={(e) => setValByKey("port", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["port"]) && (
              <p className="m-0" key="error-port">
                {error["port"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="url">URL:</label>
                <InputText id="url" className="w-full mb-3 p-inputtext-sm" value={_entity?.url} onChange={(e) => setValByKey("url", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["url"]) && (
              <p className="m-0" key="error-url">
                {error["url"]}
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

export default connect(mapState, mapDispatch)(DisasterRecoveryCreateDialogComponent);
