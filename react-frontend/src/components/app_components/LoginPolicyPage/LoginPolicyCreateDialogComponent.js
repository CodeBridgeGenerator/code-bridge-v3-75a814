import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const LoginPolicyCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {useEmail: false,useGoogle: false,useStaffId: false,useLinkedIn: false,isDefault: false,googleAuthenticator: false,msAuthenticator: false};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            policyName: _entity?.policyName,useEmail: _entity?.useEmail || false,useGoogle: _entity?.useGoogle || false,useStaffId: _entity?.useStaffId || false,useLinkedIn: _entity?.useLinkedIn || false,isDefault: _entity?.isDefault || false,googleAuthenticator: _entity?.googleAuthenticator || false,msAuthenticator: _entity?.msAuthenticator || false,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("loginPolicy").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Login Policy created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Login Policy" });
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
        <Dialog header="Create Login Policy" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="loginPolicy-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="policyName">Policy Name:</label>
                <InputText id="policyName" className="w-full mb-3 p-inputtext-sm" value={_entity?.policyName} onChange={(e) => setValByKey("policyName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["policyName"]) ? (
              <p className="m-0" key="error-policyName">
                {error["policyName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="useEmail">Use Email:</label>
                <Checkbox id="useEmail" className="ml-3" checked={_entity?.useEmail} onChange={(e) => setValByKey("useEmail", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["useEmail"]) ? (
              <p className="m-0" key="error-useEmail">
                {error["useEmail"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="useGoogle">Use Google:</label>
                <Checkbox id="useGoogle" className="ml-3" checked={_entity?.useGoogle} onChange={(e) => setValByKey("useGoogle", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["useGoogle"]) ? (
              <p className="m-0" key="error-useGoogle">
                {error["useGoogle"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="useStaffId">Use Staff ID:</label>
                <Checkbox id="useStaffId" className="ml-3" checked={_entity?.useStaffId} onChange={(e) => setValByKey("useStaffId", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["useStaffId"]) ? (
              <p className="m-0" key="error-useStaffId">
                {error["useStaffId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="useLinkedIn">Use Linked In:</label>
                <Checkbox id="useLinkedIn" className="ml-3" checked={_entity?.useLinkedIn} onChange={(e) => setValByKey("useLinkedIn", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["useLinkedIn"]) ? (
              <p className="m-0" key="error-useLinkedIn">
                {error["useLinkedIn"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="isDefault">Is Default:</label>
                <Checkbox id="isDefault" className="ml-3" checked={_entity?.isDefault} onChange={(e) => setValByKey("isDefault", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["isDefault"]) ? (
              <p className="m-0" key="error-isDefault">
                {error["isDefault"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="googleAuthenticator">Google Authenticator:</label>
                <Checkbox id="googleAuthenticator" className="ml-3" checked={_entity?.googleAuthenticator} onChange={(e) => setValByKey("googleAuthenticator", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["googleAuthenticator"]) ? (
              <p className="m-0" key="error-googleAuthenticator">
                {error["googleAuthenticator"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="msAuthenticator">MS Authenticator:</label>
                <Checkbox id="msAuthenticator" className="ml-3" checked={_entity?.msAuthenticator} onChange={(e) => setValByKey("msAuthenticator", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["msAuthenticator"]) ? (
              <p className="m-0" key="error-msAuthenticator">
                {error["msAuthenticator"]}
              </p>
            ) : null}
          </small>
            </div>
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

export default connect(mapState, mapDispatch)(LoginPolicyCreateDialogComponent);
