import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
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

const LocaleCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {isDefault: false};
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
            localeName: _entity?.localeName,dateFormat: _entity?.dateFormat,timeFormat: _entity?.timeFormat,timeZone: _entity?.timeZone,currencyFormat: _entity?.currencyFormat,currencyIndex: _entity?.currencyIndex,currencySymbol: _entity?.currencySymbol,country: _entity?.country,language: _entity?.language,languages: _entity?.languages,intlDialing: _entity?.intlDialing,isDefault: _entity?.isDefault || false,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("locale").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Locale created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Locale" });
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
        <Dialog header="Create Locale" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="locale-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="localeName">Locale Name:</label>
                <InputText id="localeName" className="w-full mb-3 p-inputtext-sm" value={_entity?.localeName} onChange={(e) => setValByKey("localeName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["localeName"]) ? (
              <p className="m-0" key="error-localeName">
                {error["localeName"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dateFormat">Date Format:</label>
                <InputText id="dateFormat" className="w-full mb-3 p-inputtext-sm" value={_entity?.dateFormat} onChange={(e) => setValByKey("dateFormat", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dateFormat"]) ? (
              <p className="m-0" key="error-dateFormat">
                {error["dateFormat"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="timeFormat">Time Format:</label>
                <InputText id="timeFormat" className="w-full mb-3 p-inputtext-sm" value={_entity?.timeFormat} onChange={(e) => setValByKey("timeFormat", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["timeFormat"]) ? (
              <p className="m-0" key="error-timeFormat">
                {error["timeFormat"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="timeZone">Time Zone:</label>
                <InputText id="timeZone" className="w-full mb-3 p-inputtext-sm" value={_entity?.timeZone} onChange={(e) => setValByKey("timeZone", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["timeZone"]) ? (
              <p className="m-0" key="error-timeZone">
                {error["timeZone"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="currencyFormat">Currency Format:</label>
                <InputText id="currencyFormat" className="w-full mb-3 p-inputtext-sm" value={_entity?.currencyFormat} onChange={(e) => setValByKey("currencyFormat", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["currencyFormat"]) ? (
              <p className="m-0" key="error-currencyFormat">
                {error["currencyFormat"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="currencyIndex">Currency Index:</label>
                <InputText id="currencyIndex" className="w-full mb-3 p-inputtext-sm" value={_entity?.currencyIndex} onChange={(e) => setValByKey("currencyIndex", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["currencyIndex"]) ? (
              <p className="m-0" key="error-currencyIndex">
                {error["currencyIndex"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="currencySymbol">Currency Symbol:</label>
                <InputText id="currencySymbol" className="w-full mb-3 p-inputtext-sm" value={_entity?.currencySymbol} onChange={(e) => setValByKey("currencySymbol", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["currencySymbol"]) ? (
              <p className="m-0" key="error-currencySymbol">
                {error["currencySymbol"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="country">Country:</label>
                <InputText id="country" className="w-full mb-3 p-inputtext-sm" value={_entity?.country} onChange={(e) => setValByKey("country", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["country"]) ? (
              <p className="m-0" key="error-country">
                {error["country"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="language">Language:</label>
                <InputText id="language" className="w-full mb-3 p-inputtext-sm" value={_entity?.language} onChange={(e) => setValByKey("language", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["language"]) ? (
              <p className="m-0" key="error-language">
                {error["language"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="languages">Languages:</label>
                <InputText id="languages" className="w-full mb-3 p-inputtext-sm" value={_entity?.languages} onChange={(e) => setValByKey("languages", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["languages"]) ? (
              <p className="m-0" key="error-languages">
                {error["languages"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="intlDialing">Intl Dialing:</label>
                <InputNumber id="intlDialing" className="w-full mb-3 p-inputtext-sm" value={_entity?.intlDialing} onChange={(e) => setValByKey("intlDialing", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["intlDialing"]) ? (
              <p className="m-0" key="error-intlDialing">
                {error["intlDialing"]}
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

export default connect(mapState, mapDispatch)(LocaleCreateDialogComponent);
