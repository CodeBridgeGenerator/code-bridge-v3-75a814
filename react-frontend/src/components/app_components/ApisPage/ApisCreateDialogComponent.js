import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";


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

const ApisCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
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
            apiName: _entity?.apiName,url: _entity?.url,request: _entity?.request,params: _entity?.params,method: _entity?.method,token: _entity?.token,authorization: _entity?.authorization,response: _entity?.response,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("apis").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Apis created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Apis" });
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
        <Dialog header="Create Apis" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="apis-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="apiName">Api Name:</label>
                <InputText id="apiName" className="w-full mb-3 p-inputtext-sm" value={_entity?.apiName} onChange={(e) => setValByKey("apiName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["apiName"]) ? (
              <p className="m-0" key="error-apiName">
                {error["apiName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="url">Url:</label>
                <InputText id="url" className="w-full mb-3 p-inputtext-sm" value={_entity?.url} onChange={(e) => setValByKey("url", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["url"]) ? (
              <p className="m-0" key="error-url">
                {error["url"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="request">Request:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["request"]) ? (
              <p className="m-0" key="error-request">
                {error["request"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="params">Params:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["params"]) ? (
              <p className="m-0" key="error-params">
                {error["params"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="method">Method:</label>
                <InputText id="method" className="w-full mb-3 p-inputtext-sm" value={_entity?.method} onChange={(e) => setValByKey("method", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["method"]) ? (
              <p className="m-0" key="error-method">
                {error["method"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="token">Token:</label>
                <InputText id="token" className="w-full mb-3 p-inputtext-sm" value={_entity?.token} onChange={(e) => setValByKey("token", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["token"]) ? (
              <p className="m-0" key="error-token">
                {error["token"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="authorization">Authorization:</label>
                <InputText id="authorization" className="w-full mb-3 p-inputtext-sm" value={_entity?.authorization} onChange={(e) => setValByKey("authorization", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["authorization"]) ? (
              <p className="m-0" key="error-authorization">
                {error["authorization"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="response">Response:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["response"]) ? (
              <p className="m-0" key="error-response">
                {error["response"]}
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

export default connect(mapState, mapDispatch)(ApisCreateDialogComponent);
