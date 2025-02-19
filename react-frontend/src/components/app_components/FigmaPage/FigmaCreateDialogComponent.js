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

const FigmaCreateDialogComponent = (props) => {
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
            name: _entity?.name,fileId: _entity?.fileId,description: _entity?.description,isDefault: _entity?.isDefault || false,textBody: _entity?.textBody,textEmphasis: _entity?.textEmphasis,textSecondary: _entity?.textSecondary,textTertiary: _entity?.textTertiary,textCode: _entity?.textCode,textHighlight: _entity?.textHighlight,bgBorderTranslucent: _entity?.bgBorderTranslucent,bgBody: _entity?.bgBody,bgBorder: _entity?.bgBorder,bgHighlight: _entity?.bgHighlight,bgSecondary: _entity?.bgSecondary,bgTertiary: _entity?.bgTertiary,formInvalidBorder: _entity?.formInvalidBorder,formInvalidBg: _entity?.formInvalidBg,formValidBorder: _entity?.formValidBorder,formValidBg: _entity?.formValidBg,textHeading: _entity?.textHeading,textLink: _entity?.textLink,textLinkHover: _entity?.textLinkHover,signalPrimaryFill: _entity?.signalPrimaryFill,signalPrimaryBg: _entity?.signalPrimaryBg,signalPrimaryBorder: _entity?.signalPrimaryBorder,signalPrimaryText: _entity?.signalPrimaryText,signalSecondaryFill: _entity?.signalSecondaryFill,signalSecondaryBg: _entity?.signalSecondaryBg,signalSecondaryBorder: _entity?.signalSecondaryBorder,signalSecondaryText: _entity?.signalSecondaryText,signalTertiaryFill: _entity?.signalTertiaryFill,signalTertiaryBg: _entity?.signalTertiaryBg,signalTertiaryBorder: _entity?.signalTertiaryBorder,signalTertiaryText: _entity?.signalTertiaryText,signalSuccessFill: _entity?.signalSuccessFill,signalSuccessBg: _entity?.signalSuccessBg,signalSuccessBorder: _entity?.signalSuccessBorder,signalSuccessText: _entity?.signalSuccessText,signalInfoFill: _entity?.signalInfoFill,signalInfoBg: _entity?.signalInfoBg,signalInfoBorder: _entity?.signalInfoBorder,signalInfoText: _entity?.signalInfoText,signalDangerFill: _entity?.signalDangerFill,signalDangerBg: _entity?.signalDangerBg,signalDangerBorder: _entity?.signalDangerBorder,signalDangerText: _entity?.signalDangerText,signalWarningFill: _entity?.signalWarningFill,signalWarningBg: _entity?.signalWarningBg,signalWarningBorder: _entity?.signalWarningBorder,signalWarningText: _entity?.signalWarningText,signalInvertFill: _entity?.signalInvertFill,signalInvertBg: _entity?.signalInvertBg,signalInvertBorder: _entity?.signalInvertBorder,signalInvertText: _entity?.signalInvertText,components: _entity?.components,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("figma").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Figma created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Figma" });
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
        <Dialog header="Create Figma" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="figma-create-dialog-component">
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
                <label htmlFor="fileId">File Id:</label>
                <InputText id="fileId" className="w-full mb-3 p-inputtext-sm" value={_entity?.fileId} onChange={(e) => setValByKey("fileId", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["fileId"]) ? (
              <p className="m-0" key="error-fileId">
                {error["fileId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="description">Description:</label>
                <InputText id="description" className="w-full mb-3 p-inputtext-sm" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["description"]) ? (
              <p className="m-0" key="error-description">
                {error["description"]}
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
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textBody">Text Body:</label>
                <InputText id="textBody" className="w-full mb-3 p-inputtext-sm" value={_entity?.textBody} onChange={(e) => setValByKey("textBody", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textBody"]) ? (
              <p className="m-0" key="error-textBody">
                {error["textBody"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textEmphasis">Text Emphasis:</label>
                <InputText id="textEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.textEmphasis} onChange={(e) => setValByKey("textEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textEmphasis"]) ? (
              <p className="m-0" key="error-textEmphasis">
                {error["textEmphasis"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textSecondary">Text Secondary:</label>
                <InputText id="textSecondary" className="w-full mb-3 p-inputtext-sm" value={_entity?.textSecondary} onChange={(e) => setValByKey("textSecondary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textSecondary"]) ? (
              <p className="m-0" key="error-textSecondary">
                {error["textSecondary"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textTertiary">Text Tertiary:</label>
                <InputText id="textTertiary" className="w-full mb-3 p-inputtext-sm" value={_entity?.textTertiary} onChange={(e) => setValByKey("textTertiary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textTertiary"]) ? (
              <p className="m-0" key="error-textTertiary">
                {error["textTertiary"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textCode">Text Code:</label>
                <InputText id="textCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.textCode} onChange={(e) => setValByKey("textCode", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textCode"]) ? (
              <p className="m-0" key="error-textCode">
                {error["textCode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textHighlight">Text Highlight:</label>
                <InputText id="textHighlight" className="w-full mb-3 p-inputtext-sm" value={_entity?.textHighlight} onChange={(e) => setValByKey("textHighlight", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textHighlight"]) ? (
              <p className="m-0" key="error-textHighlight">
                {error["textHighlight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgBorderTranslucent">Bg Border Translucent:</label>
                <InputText id="bgBorderTranslucent" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgBorderTranslucent} onChange={(e) => setValByKey("bgBorderTranslucent", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgBorderTranslucent"]) ? (
              <p className="m-0" key="error-bgBorderTranslucent">
                {error["bgBorderTranslucent"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgBody">Bg Body:</label>
                <InputText id="bgBody" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgBody} onChange={(e) => setValByKey("bgBody", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgBody"]) ? (
              <p className="m-0" key="error-bgBody">
                {error["bgBody"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgBorder">Bg Border:</label>
                <InputText id="bgBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgBorder} onChange={(e) => setValByKey("bgBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgBorder"]) ? (
              <p className="m-0" key="error-bgBorder">
                {error["bgBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgHighlight">Bg Highlight:</label>
                <InputText id="bgHighlight" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgHighlight} onChange={(e) => setValByKey("bgHighlight", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgHighlight"]) ? (
              <p className="m-0" key="error-bgHighlight">
                {error["bgHighlight"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgSecondary">Bg Secondary:</label>
                <InputText id="bgSecondary" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgSecondary} onChange={(e) => setValByKey("bgSecondary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgSecondary"]) ? (
              <p className="m-0" key="error-bgSecondary">
                {error["bgSecondary"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bgTertiary">Bg Tertiary:</label>
                <InputText id="bgTertiary" className="w-full mb-3 p-inputtext-sm" value={_entity?.bgTertiary} onChange={(e) => setValByKey("bgTertiary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bgTertiary"]) ? (
              <p className="m-0" key="error-bgTertiary">
                {error["bgTertiary"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formInvalidBorder">Form Invalid Border:</label>
                <InputText id="formInvalidBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.formInvalidBorder} onChange={(e) => setValByKey("formInvalidBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formInvalidBorder"]) ? (
              <p className="m-0" key="error-formInvalidBorder">
                {error["formInvalidBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formInvalidBg">Form Invalid Bg:</label>
                <InputText id="formInvalidBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.formInvalidBg} onChange={(e) => setValByKey("formInvalidBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formInvalidBg"]) ? (
              <p className="m-0" key="error-formInvalidBg">
                {error["formInvalidBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formValidBorder">Form Valid Border:</label>
                <InputText id="formValidBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.formValidBorder} onChange={(e) => setValByKey("formValidBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formValidBorder"]) ? (
              <p className="m-0" key="error-formValidBorder">
                {error["formValidBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formValidBg">Form Valid Bg:</label>
                <InputText id="formValidBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.formValidBg} onChange={(e) => setValByKey("formValidBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formValidBg"]) ? (
              <p className="m-0" key="error-formValidBg">
                {error["formValidBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textHeading">Text Heading:</label>
                <InputText id="textHeading" className="w-full mb-3 p-inputtext-sm" value={_entity?.textHeading} onChange={(e) => setValByKey("textHeading", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textHeading"]) ? (
              <p className="m-0" key="error-textHeading">
                {error["textHeading"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textLink">Text Link:</label>
                <InputText id="textLink" className="w-full mb-3 p-inputtext-sm" value={_entity?.textLink} onChange={(e) => setValByKey("textLink", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textLink"]) ? (
              <p className="m-0" key="error-textLink">
                {error["textLink"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="textLinkHover">Text Link Hover:</label>
                <InputText id="textLinkHover" className="w-full mb-3 p-inputtext-sm" value={_entity?.textLinkHover} onChange={(e) => setValByKey("textLinkHover", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["textLinkHover"]) ? (
              <p className="m-0" key="error-textLinkHover">
                {error["textLinkHover"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalPrimaryFill">Signal Primary Fill:</label>
                <InputText id="signalPrimaryFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalPrimaryFill} onChange={(e) => setValByKey("signalPrimaryFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalPrimaryFill"]) ? (
              <p className="m-0" key="error-signalPrimaryFill">
                {error["signalPrimaryFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalPrimaryBg">Signal Primary Bg:</label>
                <InputText id="signalPrimaryBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalPrimaryBg} onChange={(e) => setValByKey("signalPrimaryBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalPrimaryBg"]) ? (
              <p className="m-0" key="error-signalPrimaryBg">
                {error["signalPrimaryBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalPrimaryBorder">Signal Primary Border:</label>
                <InputText id="signalPrimaryBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalPrimaryBorder} onChange={(e) => setValByKey("signalPrimaryBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalPrimaryBorder"]) ? (
              <p className="m-0" key="error-signalPrimaryBorder">
                {error["signalPrimaryBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalPrimaryText">Signal Primary Text:</label>
                <InputText id="signalPrimaryText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalPrimaryText} onChange={(e) => setValByKey("signalPrimaryText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalPrimaryText"]) ? (
              <p className="m-0" key="error-signalPrimaryText">
                {error["signalPrimaryText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSecondaryFill">Signal Secondary Fill:</label>
                <InputText id="signalSecondaryFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSecondaryFill} onChange={(e) => setValByKey("signalSecondaryFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSecondaryFill"]) ? (
              <p className="m-0" key="error-signalSecondaryFill">
                {error["signalSecondaryFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSecondaryBg">Signal Secondary Bg:</label>
                <InputText id="signalSecondaryBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSecondaryBg} onChange={(e) => setValByKey("signalSecondaryBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSecondaryBg"]) ? (
              <p className="m-0" key="error-signalSecondaryBg">
                {error["signalSecondaryBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSecondaryBorder">Signal Secondary Border:</label>
                <InputText id="signalSecondaryBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSecondaryBorder} onChange={(e) => setValByKey("signalSecondaryBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSecondaryBorder"]) ? (
              <p className="m-0" key="error-signalSecondaryBorder">
                {error["signalSecondaryBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSecondaryText">Signal Secondary Text:</label>
                <InputText id="signalSecondaryText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSecondaryText} onChange={(e) => setValByKey("signalSecondaryText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSecondaryText"]) ? (
              <p className="m-0" key="error-signalSecondaryText">
                {error["signalSecondaryText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalTertiaryFill">Signal Tertiary Fill:</label>
                <InputText id="signalTertiaryFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalTertiaryFill} onChange={(e) => setValByKey("signalTertiaryFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalTertiaryFill"]) ? (
              <p className="m-0" key="error-signalTertiaryFill">
                {error["signalTertiaryFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalTertiaryBg">Signal Tertiary Bg:</label>
                <InputText id="signalTertiaryBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalTertiaryBg} onChange={(e) => setValByKey("signalTertiaryBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalTertiaryBg"]) ? (
              <p className="m-0" key="error-signalTertiaryBg">
                {error["signalTertiaryBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalTertiaryBorder">Signal Tertiary Border:</label>
                <InputText id="signalTertiaryBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalTertiaryBorder} onChange={(e) => setValByKey("signalTertiaryBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalTertiaryBorder"]) ? (
              <p className="m-0" key="error-signalTertiaryBorder">
                {error["signalTertiaryBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalTertiaryText">Signal Tertiary Text:</label>
                <InputText id="signalTertiaryText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalTertiaryText} onChange={(e) => setValByKey("signalTertiaryText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalTertiaryText"]) ? (
              <p className="m-0" key="error-signalTertiaryText">
                {error["signalTertiaryText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSuccessFill">Signal Success Fill:</label>
                <InputText id="signalSuccessFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSuccessFill} onChange={(e) => setValByKey("signalSuccessFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSuccessFill"]) ? (
              <p className="m-0" key="error-signalSuccessFill">
                {error["signalSuccessFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSuccessBg">Signal Success Bg:</label>
                <InputText id="signalSuccessBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSuccessBg} onChange={(e) => setValByKey("signalSuccessBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSuccessBg"]) ? (
              <p className="m-0" key="error-signalSuccessBg">
                {error["signalSuccessBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSuccessBorder">Signal Success Border:</label>
                <InputText id="signalSuccessBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSuccessBorder} onChange={(e) => setValByKey("signalSuccessBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSuccessBorder"]) ? (
              <p className="m-0" key="error-signalSuccessBorder">
                {error["signalSuccessBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalSuccessText">Signal Success Text:</label>
                <InputText id="signalSuccessText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalSuccessText} onChange={(e) => setValByKey("signalSuccessText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalSuccessText"]) ? (
              <p className="m-0" key="error-signalSuccessText">
                {error["signalSuccessText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInfoFill">Signal Info Fill:</label>
                <InputText id="signalInfoFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInfoFill} onChange={(e) => setValByKey("signalInfoFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInfoFill"]) ? (
              <p className="m-0" key="error-signalInfoFill">
                {error["signalInfoFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInfoBg">Signal Info Bg:</label>
                <InputText id="signalInfoBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInfoBg} onChange={(e) => setValByKey("signalInfoBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInfoBg"]) ? (
              <p className="m-0" key="error-signalInfoBg">
                {error["signalInfoBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInfoBorder">Signal Info Border:</label>
                <InputText id="signalInfoBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInfoBorder} onChange={(e) => setValByKey("signalInfoBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInfoBorder"]) ? (
              <p className="m-0" key="error-signalInfoBorder">
                {error["signalInfoBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInfoText">Signal Info Text:</label>
                <InputText id="signalInfoText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInfoText} onChange={(e) => setValByKey("signalInfoText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInfoText"]) ? (
              <p className="m-0" key="error-signalInfoText">
                {error["signalInfoText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalDangerFill">Signal Danger Fill:</label>
                <InputText id="signalDangerFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalDangerFill} onChange={(e) => setValByKey("signalDangerFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalDangerFill"]) ? (
              <p className="m-0" key="error-signalDangerFill">
                {error["signalDangerFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalDangerBg">Signal Danger Bg:</label>
                <InputText id="signalDangerBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalDangerBg} onChange={(e) => setValByKey("signalDangerBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalDangerBg"]) ? (
              <p className="m-0" key="error-signalDangerBg">
                {error["signalDangerBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalDangerBorder">Signal Danger Border:</label>
                <InputText id="signalDangerBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalDangerBorder} onChange={(e) => setValByKey("signalDangerBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalDangerBorder"]) ? (
              <p className="m-0" key="error-signalDangerBorder">
                {error["signalDangerBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalDangerText">Signal Danger Text:</label>
                <InputText id="signalDangerText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalDangerText} onChange={(e) => setValByKey("signalDangerText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalDangerText"]) ? (
              <p className="m-0" key="error-signalDangerText">
                {error["signalDangerText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalWarningFill">Signal Warning Fill:</label>
                <InputText id="signalWarningFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalWarningFill} onChange={(e) => setValByKey("signalWarningFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalWarningFill"]) ? (
              <p className="m-0" key="error-signalWarningFill">
                {error["signalWarningFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalWarningBg">Signal Warning Bg:</label>
                <InputText id="signalWarningBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalWarningBg} onChange={(e) => setValByKey("signalWarningBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalWarningBg"]) ? (
              <p className="m-0" key="error-signalWarningBg">
                {error["signalWarningBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalWarningBorder">Signal Warning Border:</label>
                <InputText id="signalWarningBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalWarningBorder} onChange={(e) => setValByKey("signalWarningBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalWarningBorder"]) ? (
              <p className="m-0" key="error-signalWarningBorder">
                {error["signalWarningBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalWarningText">Signal Warning Text:</label>
                <InputText id="signalWarningText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalWarningText} onChange={(e) => setValByKey("signalWarningText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalWarningText"]) ? (
              <p className="m-0" key="error-signalWarningText">
                {error["signalWarningText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInvertFill">Signal Invert Fill:</label>
                <InputText id="signalInvertFill" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInvertFill} onChange={(e) => setValByKey("signalInvertFill", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInvertFill"]) ? (
              <p className="m-0" key="error-signalInvertFill">
                {error["signalInvertFill"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInvertBg">Signal Invert Bg:</label>
                <InputText id="signalInvertBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInvertBg} onChange={(e) => setValByKey("signalInvertBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInvertBg"]) ? (
              <p className="m-0" key="error-signalInvertBg">
                {error["signalInvertBg"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInvertBorder">Signal Invert Border:</label>
                <InputText id="signalInvertBorder" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInvertBorder} onChange={(e) => setValByKey("signalInvertBorder", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInvertBorder"]) ? (
              <p className="m-0" key="error-signalInvertBorder">
                {error["signalInvertBorder"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="signalInvertText">Signal Invert Text:</label>
                <InputText id="signalInvertText" className="w-full mb-3 p-inputtext-sm" value={_entity?.signalInvertText} onChange={(e) => setValByKey("signalInvertText", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["signalInvertText"]) ? (
              <p className="m-0" key="error-signalInvertText">
                {error["signalInvertText"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="components">Components:</label>
                undefined
            </span>
            <small className="p-error">
            {!_.isEmpty(error["components"]) ? (
              <p className="m-0" key="error-components">
                {error["components"]}
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

export default connect(mapState, mapDispatch)(FigmaCreateDialogComponent);
