import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
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

const PasswordPolicyCreateDialogComponent = (props) => {
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
passwordLength: _entity?.passwordLength,
capitalLetters: _entity?.capitalLetters,
specialCharacters: _entity?.specialCharacters,
numbers: _entity?.numbers,
allowOldPasswordReuse: _entity?.allowOldPasswordReuse,
isDefault: _entity?.isDefault,
passwordRenewalTimeline: _entity?.passwordRenewalTimeline,
        };

        setLoading(true);
        try {
            
        const result = await client.service("passwordPolicy").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info passwordPolicy updated successfully" });
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
        <Dialog header="Edit Password Policy" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="passwordPolicy-edit-dialog-component">
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
                <label htmlFor="passwordLength">Password Length:</label>
                <InputNumber id="passwordLength" className="w-full mb-3 p-inputtext-sm" value={_entity?.passwordLength} onChange={(e) => setValByKey("passwordLength", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["passwordLength"]) && (
              <p className="m-0" key="error-passwordLength">
                {error["passwordLength"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="capitalLetters">Capital Letters:</label>
                <InputNumber id="capitalLetters" className="w-full mb-3 p-inputtext-sm" value={_entity?.capitalLetters} onChange={(e) => setValByKey("capitalLetters", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["capitalLetters"]) && (
              <p className="m-0" key="error-capitalLetters">
                {error["capitalLetters"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="specialCharacters">Special Characters:</label>
                <InputNumber id="specialCharacters" className="w-full mb-3 p-inputtext-sm" value={_entity?.specialCharacters} onChange={(e) => setValByKey("specialCharacters", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["specialCharacters"]) && (
              <p className="m-0" key="error-specialCharacters">
                {error["specialCharacters"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="numbers">Numbers:</label>
                <InputNumber id="numbers" className="w-full mb-3 p-inputtext-sm" value={_entity?.numbers} onChange={(e) => setValByKey("numbers", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["numbers"]) && (
              <p className="m-0" key="error-numbers">
                {error["numbers"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="allowOldPasswordReuse">Allow Old Password Reuse:</label>
                <InputNumber id="allowOldPasswordReuse" className="w-full mb-3 p-inputtext-sm" value={_entity?.allowOldPasswordReuse} onChange={(e) => setValByKey("allowOldPasswordReuse", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["allowOldPasswordReuse"]) && (
              <p className="m-0" key="error-allowOldPasswordReuse">
                {error["allowOldPasswordReuse"]}
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
                <label htmlFor="passwordRenewalTimeline">Password Renewal Timeline:</label>
                <InputNumber id="passwordRenewalTimeline" className="w-full mb-3 p-inputtext-sm" value={_entity?.passwordRenewalTimeline} onChange={(e) => setValByKey("passwordRenewalTimeline", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["passwordRenewalTimeline"]) && (
              <p className="m-0" key="error-passwordRenewalTimeline">
                {error["passwordRenewalTimeline"]}
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

export default connect(mapState, mapDispatch)(PasswordPolicyCreateDialogComponent);
