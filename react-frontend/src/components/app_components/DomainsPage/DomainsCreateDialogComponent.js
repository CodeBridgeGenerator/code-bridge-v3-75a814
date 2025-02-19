import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
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

const DomainsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    const [environment, setEnvironment] = useState([])

    useEffect(() => {
        let init  = {isDefault: false};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [environment], setError);
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
            name: _entity?.name,environment: _entity?.environment?._id,domain: _entity?.domain,appName: _entity?.appName,appDir: _entity?.appDir,appProjectName: _entity?.appProjectName,appObjectName: _entity?.appObjectName,appPortNumber: _entity?.appPortNumber,isDefault: _entity?.isDefault || false,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("domains").create(_data);
        const eagerResult = await client
            .service("domains")
            .find({ query: { $limit: 10000 ,  _id :  { $in :[result._id]}, $populate : [
                {
                    path : "environment",
                    service : "environments",
                    select:["name"]}
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Domains updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Domains" });
        }
        setLoading(false);
    };

    

    

    useEffect(() => {
                    // on mount environments
                    client
                        .service("environments")
                        .find({ query: { $limit: 10000, $sort: { createdAt: -1 }, _id : urlParams.singleEnvironmentsId } })
                        .then((res) => {
                            setEnvironment(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.debug({ error });
                            props.alert({ title: "Environments", type: "error", message: error.message || "Failed get environments" });
                        });
                }, []);

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

    const environmentOptions = environment.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create Domains" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="domains-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="name">Name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) ? (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="environment">Environment:</label>
                <Dropdown id="environment" value={_entity?.environment?._id} optionLabel="name" optionValue="value" options={environmentOptions} onChange={(e) => setValByKey("environment", {_id : e.value})}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["environment"]) ? (
              <p className="m-0" key="error-environment">
                {error["environment"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="domain">Domain:</label>
                <InputText id="domain" className="w-full mb-3 p-inputtext-sm" value={_entity?.domain} onChange={(e) => setValByKey("domain", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["domain"]) ? (
              <p className="m-0" key="error-domain">
                {error["domain"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="appName">App Name:</label>
                <InputText id="appName" className="w-full mb-3 p-inputtext-sm" value={_entity?.appName} onChange={(e) => setValByKey("appName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["appName"]) ? (
              <p className="m-0" key="error-appName">
                {error["appName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="appDir">App Dir:</label>
                <InputText id="appDir" className="w-full mb-3 p-inputtext-sm" value={_entity?.appDir} onChange={(e) => setValByKey("appDir", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["appDir"]) ? (
              <p className="m-0" key="error-appDir">
                {error["appDir"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="appProjectName">App Project Name:</label>
                <InputText id="appProjectName" className="w-full mb-3 p-inputtext-sm" value={_entity?.appProjectName} onChange={(e) => setValByKey("appProjectName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["appProjectName"]) ? (
              <p className="m-0" key="error-appProjectName">
                {error["appProjectName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="appObjectName">App Object Name:</label>
                <InputText id="appObjectName" className="w-full mb-3 p-inputtext-sm" value={_entity?.appObjectName} onChange={(e) => setValByKey("appObjectName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["appObjectName"]) ? (
              <p className="m-0" key="error-appObjectName">
                {error["appObjectName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="appPortNumber">App Port Number:</label>
                <InputNumber id="appPortNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.appPortNumber} onChange={(e) => setValByKey("appPortNumber", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["appPortNumber"]) ? (
              <p className="m-0" key="error-appPortNumber">
                {error["appPortNumber"]}
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

export default connect(mapState, mapDispatch)(DomainsCreateDialogComponent);
