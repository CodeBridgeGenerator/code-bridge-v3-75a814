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

const ThemeCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            themeName: _entity?.themeName,
bodyColor: _entity?.bodyColor,
emphasisColor: _entity?.emphasisColor,
secondaryColor: _entity?.secondaryColor,
tertiaryColor: _entity?.tertiaryColor,
codeColor: _entity?.codeColor,
highlightColor: _entity?.highlightColor,
borderColorTranslucent: _entity?.borderColorTranslucent,
bodyBg: _entity?.bodyBg,
borderColor: _entity?.borderColor,
highlightBg: _entity?.highlightBg,
secondaryBg: _entity?.secondaryBg,
tertiaryBg: _entity?.tertiaryBg,
formInvalidBorderColor: _entity?.formInvalidBorderColor,
formInvalidColor: _entity?.formInvalidColor,
formValidBorderColor: _entity?.formValidBorderColor,
formValidColor: _entity?.formValidColor,
headingColor: _entity?.headingColor,
linkColor: _entity?.linkColor,
linkHoverColor: _entity?.linkHoverColor,
primary: _entity?.primary,
primaryBgSubtle: _entity?.primaryBgSubtle,
primaryBorderSubtle: _entity?.primaryBorderSubtle,
primaryTextEmphasis: _entity?.primaryTextEmphasis,
secondary: _entity?.secondary,
secondaryBgSubtle: _entity?.secondaryBgSubtle,
secondaryBorderSubtle: _entity?.secondaryBorderSubtle,
secondaryTextEmphasis: _entity?.secondaryTextEmphasis,
tertiary: _entity?.tertiary,
tertiaryBgSubtle: _entity?.tertiaryBgSubtle,
tertiaryBorderSubtle: _entity?.tertiaryBorderSubtle,
tertiaryTextEmphasis: _entity?.tertiaryTextEmphasis,
success: _entity?.success,
successBgSubtle: _entity?.successBgSubtle,
successBorderSubtle: _entity?.successBorderSubtle,
successTextEmphasis: _entity?.successTextEmphasis,
info: _entity?.info,
infoBgSubtle: _entity?.infoBgSubtle,
infoBorderSubtle: _entity?.infoBorderSubtle,
infoTextEmphasis: _entity?.infoTextEmphasis,
danger: _entity?.danger,
dangerBgSubtle: _entity?.dangerBgSubtle,
dangerBorderSubtle: _entity?.dangerBorderSubtle,
dangerTextEmphasis: _entity?.dangerTextEmphasis,
warning: _entity?.warning,
warningBgSubtle: _entity?.warningBgSubtle,
warningBorderSubtle: _entity?.warningBorderSubtle,
warningTextEmphasis: _entity?.warningTextEmphasis,
dark: _entity?.dark,
darkBgSubtle: _entity?.darkBgSubtle,
darkBorderSubtle: _entity?.darkBorderSubtle,
darkTextEmphasis: _entity?.darkTextEmphasis,
bodyColorRgb: _entity?.bodyColorRgb,
emphasisColorRgb: _entity?.emphasisColorRgb,
linkColorRgb: _entity?.linkColorRgb,
linkHoverColorRgb: _entity?.linkHoverColorRgb,
tertiaryColorRgb: _entity?.tertiaryColorRgb,
secondaryBgRgb: _entity?.secondaryBgRgb,
tertiaryBgRgb: _entity?.tertiaryBgRgb,
lightBorderSubtle: _entity?.lightBorderSubtle,
lightTextEmphasis: _entity?.lightTextEmphasis,
isDefault: _entity?.isDefault,
        };

        setLoading(true);
        try {
            
        const result = await client.service("theme").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info theme updated successfully" });
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
        <Dialog header="Edit Theme" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="theme-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="themeName">Theme Name:</label>
                <InputText id="themeName" className="w-full mb-3 p-inputtext-sm" value={_entity?.themeName} onChange={(e) => setValByKey("themeName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["themeName"]) && (
              <p className="m-0" key="error-themeName">
                {error["themeName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bodyColor">Body Color:</label>
                <InputText id="bodyColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.bodyColor} onChange={(e) => setValByKey("bodyColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bodyColor"]) && (
              <p className="m-0" key="error-bodyColor">
                {error["bodyColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="emphasisColor">Emphasis Color:</label>
                <InputText id="emphasisColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.emphasisColor} onChange={(e) => setValByKey("emphasisColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["emphasisColor"]) && (
              <p className="m-0" key="error-emphasisColor">
                {error["emphasisColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryColor">Secondary Color:</label>
                <InputText id="secondaryColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryColor} onChange={(e) => setValByKey("secondaryColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryColor"]) && (
              <p className="m-0" key="error-secondaryColor">
                {error["secondaryColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryColor">Tertiary Color:</label>
                <InputText id="tertiaryColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryColor} onChange={(e) => setValByKey("tertiaryColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryColor"]) && (
              <p className="m-0" key="error-tertiaryColor">
                {error["tertiaryColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="codeColor">Code Color:</label>
                <InputText id="codeColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.codeColor} onChange={(e) => setValByKey("codeColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["codeColor"]) && (
              <p className="m-0" key="error-codeColor">
                {error["codeColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="highlightColor">Highlight Color:</label>
                <InputText id="highlightColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.highlightColor} onChange={(e) => setValByKey("highlightColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["highlightColor"]) && (
              <p className="m-0" key="error-highlightColor">
                {error["highlightColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="borderColorTranslucent">Border Color Translucent:</label>
                <InputText id="borderColorTranslucent" className="w-full mb-3 p-inputtext-sm" value={_entity?.borderColorTranslucent} onChange={(e) => setValByKey("borderColorTranslucent", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["borderColorTranslucent"]) && (
              <p className="m-0" key="error-borderColorTranslucent">
                {error["borderColorTranslucent"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bodyBg">Body Bg:</label>
                <InputText id="bodyBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.bodyBg} onChange={(e) => setValByKey("bodyBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bodyBg"]) && (
              <p className="m-0" key="error-bodyBg">
                {error["bodyBg"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="borderColor">Border Color:</label>
                <InputText id="borderColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.borderColor} onChange={(e) => setValByKey("borderColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["borderColor"]) && (
              <p className="m-0" key="error-borderColor">
                {error["borderColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="highlightBg">Highlight Bg:</label>
                <InputText id="highlightBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.highlightBg} onChange={(e) => setValByKey("highlightBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["highlightBg"]) && (
              <p className="m-0" key="error-highlightBg">
                {error["highlightBg"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryBg">Secondary Bg:</label>
                <InputText id="secondaryBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryBg} onChange={(e) => setValByKey("secondaryBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryBg"]) && (
              <p className="m-0" key="error-secondaryBg">
                {error["secondaryBg"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryBg">Tertiary Bg:</label>
                <InputText id="tertiaryBg" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryBg} onChange={(e) => setValByKey("tertiaryBg", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryBg"]) && (
              <p className="m-0" key="error-tertiaryBg">
                {error["tertiaryBg"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formInvalidBorderColor">Form Invalid Border Color:</label>
                <InputText id="formInvalidBorderColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.formInvalidBorderColor} onChange={(e) => setValByKey("formInvalidBorderColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formInvalidBorderColor"]) && (
              <p className="m-0" key="error-formInvalidBorderColor">
                {error["formInvalidBorderColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formInvalidColor">Form Invalid Color:</label>
                <InputText id="formInvalidColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.formInvalidColor} onChange={(e) => setValByKey("formInvalidColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formInvalidColor"]) && (
              <p className="m-0" key="error-formInvalidColor">
                {error["formInvalidColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formValidBorderColor">Form Valid Border Color:</label>
                <InputText id="formValidBorderColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.formValidBorderColor} onChange={(e) => setValByKey("formValidBorderColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formValidBorderColor"]) && (
              <p className="m-0" key="error-formValidBorderColor">
                {error["formValidBorderColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formValidColor">Form Valid Color:</label>
                <InputText id="formValidColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.formValidColor} onChange={(e) => setValByKey("formValidColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formValidColor"]) && (
              <p className="m-0" key="error-formValidColor">
                {error["formValidColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="headingColor">Heading Color:</label>
                <InputText id="headingColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.headingColor} onChange={(e) => setValByKey("headingColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["headingColor"]) && (
              <p className="m-0" key="error-headingColor">
                {error["headingColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="linkColor">Link Color:</label>
                <InputText id="linkColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.linkColor} onChange={(e) => setValByKey("linkColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["linkColor"]) && (
              <p className="m-0" key="error-linkColor">
                {error["linkColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="linkHoverColor">Link Hover Color:</label>
                <InputText id="linkHoverColor" className="w-full mb-3 p-inputtext-sm" value={_entity?.linkHoverColor} onChange={(e) => setValByKey("linkHoverColor", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["linkHoverColor"]) && (
              <p className="m-0" key="error-linkHoverColor">
                {error["linkHoverColor"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="primary">Primary:</label>
                <InputText id="primary" className="w-full mb-3 p-inputtext-sm" value={_entity?.primary} onChange={(e) => setValByKey("primary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["primary"]) && (
              <p className="m-0" key="error-primary">
                {error["primary"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="primaryBgSubtle">Primary Bg Subtle:</label>
                <InputText id="primaryBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.primaryBgSubtle} onChange={(e) => setValByKey("primaryBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["primaryBgSubtle"]) && (
              <p className="m-0" key="error-primaryBgSubtle">
                {error["primaryBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="primaryBorderSubtle">Primary Border Subtle:</label>
                <InputText id="primaryBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.primaryBorderSubtle} onChange={(e) => setValByKey("primaryBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["primaryBorderSubtle"]) && (
              <p className="m-0" key="error-primaryBorderSubtle">
                {error["primaryBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="primaryTextEmphasis">Primary Text Emphasis:</label>
                <InputText id="primaryTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.primaryTextEmphasis} onChange={(e) => setValByKey("primaryTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["primaryTextEmphasis"]) && (
              <p className="m-0" key="error-primaryTextEmphasis">
                {error["primaryTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondary">Secondary:</label>
                <InputText id="secondary" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondary} onChange={(e) => setValByKey("secondary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondary"]) && (
              <p className="m-0" key="error-secondary">
                {error["secondary"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryBgSubtle">Secondary Bg Subtle:</label>
                <InputText id="secondaryBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryBgSubtle} onChange={(e) => setValByKey("secondaryBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryBgSubtle"]) && (
              <p className="m-0" key="error-secondaryBgSubtle">
                {error["secondaryBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryBorderSubtle">Secondary Border Subtle:</label>
                <InputText id="secondaryBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryBorderSubtle} onChange={(e) => setValByKey("secondaryBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryBorderSubtle"]) && (
              <p className="m-0" key="error-secondaryBorderSubtle">
                {error["secondaryBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryTextEmphasis">Secondary Text Emphasis:</label>
                <InputText id="secondaryTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryTextEmphasis} onChange={(e) => setValByKey("secondaryTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryTextEmphasis"]) && (
              <p className="m-0" key="error-secondaryTextEmphasis">
                {error["secondaryTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiary">Tertiary:</label>
                <InputText id="tertiary" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiary} onChange={(e) => setValByKey("tertiary", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiary"]) && (
              <p className="m-0" key="error-tertiary">
                {error["tertiary"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryBgSubtle">Tertiary Bg Subtle:</label>
                <InputText id="tertiaryBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryBgSubtle} onChange={(e) => setValByKey("tertiaryBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryBgSubtle"]) && (
              <p className="m-0" key="error-tertiaryBgSubtle">
                {error["tertiaryBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryBorderSubtle">Tertiary Border Subtle:</label>
                <InputText id="tertiaryBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryBorderSubtle} onChange={(e) => setValByKey("tertiaryBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryBorderSubtle"]) && (
              <p className="m-0" key="error-tertiaryBorderSubtle">
                {error["tertiaryBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryTextEmphasis">Tertiary Text Emphasis:</label>
                <InputText id="tertiaryTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryTextEmphasis} onChange={(e) => setValByKey("tertiaryTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryTextEmphasis"]) && (
              <p className="m-0" key="error-tertiaryTextEmphasis">
                {error["tertiaryTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="success">Success:</label>
                <InputText id="success" className="w-full mb-3 p-inputtext-sm" value={_entity?.success} onChange={(e) => setValByKey("success", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["success"]) && (
              <p className="m-0" key="error-success">
                {error["success"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="successBgSubtle">Success Bg Subtle:</label>
                <InputText id="successBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.successBgSubtle} onChange={(e) => setValByKey("successBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["successBgSubtle"]) && (
              <p className="m-0" key="error-successBgSubtle">
                {error["successBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="successBorderSubtle">Success Border Subtle:</label>
                <InputText id="successBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.successBorderSubtle} onChange={(e) => setValByKey("successBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["successBorderSubtle"]) && (
              <p className="m-0" key="error-successBorderSubtle">
                {error["successBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="successTextEmphasis">Success Text Emphasis:</label>
                <InputText id="successTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.successTextEmphasis} onChange={(e) => setValByKey("successTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["successTextEmphasis"]) && (
              <p className="m-0" key="error-successTextEmphasis">
                {error["successTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="info">Info:</label>
                <InputText id="info" className="w-full mb-3 p-inputtext-sm" value={_entity?.info} onChange={(e) => setValByKey("info", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["info"]) && (
              <p className="m-0" key="error-info">
                {error["info"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="infoBgSubtle">Info Bg Subtle:</label>
                <InputText id="infoBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.infoBgSubtle} onChange={(e) => setValByKey("infoBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["infoBgSubtle"]) && (
              <p className="m-0" key="error-infoBgSubtle">
                {error["infoBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="infoBorderSubtle">Info Border Subtle:</label>
                <InputText id="infoBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.infoBorderSubtle} onChange={(e) => setValByKey("infoBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["infoBorderSubtle"]) && (
              <p className="m-0" key="error-infoBorderSubtle">
                {error["infoBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="infoTextEmphasis">Info Text Emphasis:</label>
                <InputText id="infoTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.infoTextEmphasis} onChange={(e) => setValByKey("infoTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["infoTextEmphasis"]) && (
              <p className="m-0" key="error-infoTextEmphasis">
                {error["infoTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="danger">Danger:</label>
                <InputText id="danger" className="w-full mb-3 p-inputtext-sm" value={_entity?.danger} onChange={(e) => setValByKey("danger", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["danger"]) && (
              <p className="m-0" key="error-danger">
                {error["danger"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dangerBgSubtle">Danger Bg Subtle:</label>
                <InputText id="dangerBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.dangerBgSubtle} onChange={(e) => setValByKey("dangerBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dangerBgSubtle"]) && (
              <p className="m-0" key="error-dangerBgSubtle">
                {error["dangerBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dangerBorderSubtle">Danger Border Subtle:</label>
                <InputText id="dangerBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.dangerBorderSubtle} onChange={(e) => setValByKey("dangerBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dangerBorderSubtle"]) && (
              <p className="m-0" key="error-dangerBorderSubtle">
                {error["dangerBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dangerTextEmphasis">Danger Text Emphasis:</label>
                <InputText id="dangerTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.dangerTextEmphasis} onChange={(e) => setValByKey("dangerTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dangerTextEmphasis"]) && (
              <p className="m-0" key="error-dangerTextEmphasis">
                {error["dangerTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="warning">Warning:</label>
                <InputText id="warning" className="w-full mb-3 p-inputtext-sm" value={_entity?.warning} onChange={(e) => setValByKey("warning", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["warning"]) && (
              <p className="m-0" key="error-warning">
                {error["warning"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="warningBgSubtle">Warning Bg Subtle:</label>
                <InputText id="warningBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.warningBgSubtle} onChange={(e) => setValByKey("warningBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["warningBgSubtle"]) && (
              <p className="m-0" key="error-warningBgSubtle">
                {error["warningBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="warningBorderSubtle">Warning Border Subtle:</label>
                <InputText id="warningBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.warningBorderSubtle} onChange={(e) => setValByKey("warningBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["warningBorderSubtle"]) && (
              <p className="m-0" key="error-warningBorderSubtle">
                {error["warningBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="warningTextEmphasis">Warning Text Emphasis:</label>
                <InputText id="warningTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.warningTextEmphasis} onChange={(e) => setValByKey("warningTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["warningTextEmphasis"]) && (
              <p className="m-0" key="error-warningTextEmphasis">
                {error["warningTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dark">Dark:</label>
                <InputText id="dark" className="w-full mb-3 p-inputtext-sm" value={_entity?.dark} onChange={(e) => setValByKey("dark", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dark"]) && (
              <p className="m-0" key="error-dark">
                {error["dark"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="darkBgSubtle">Dark Bg Subtle:</label>
                <InputText id="darkBgSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.darkBgSubtle} onChange={(e) => setValByKey("darkBgSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["darkBgSubtle"]) && (
              <p className="m-0" key="error-darkBgSubtle">
                {error["darkBgSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="darkBorderSubtle">Dark Border Subtle:</label>
                <InputText id="darkBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.darkBorderSubtle} onChange={(e) => setValByKey("darkBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["darkBorderSubtle"]) && (
              <p className="m-0" key="error-darkBorderSubtle">
                {error["darkBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="darkTextEmphasis">Dark Text Emphasis:</label>
                <InputText id="darkTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.darkTextEmphasis} onChange={(e) => setValByKey("darkTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["darkTextEmphasis"]) && (
              <p className="m-0" key="error-darkTextEmphasis">
                {error["darkTextEmphasis"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="bodyColorRgb">Body Color Rgb:</label>
                <InputText id="bodyColorRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.bodyColorRgb} onChange={(e) => setValByKey("bodyColorRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["bodyColorRgb"]) && (
              <p className="m-0" key="error-bodyColorRgb">
                {error["bodyColorRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="emphasisColorRgb">Emphasis Color Rgb:</label>
                <InputText id="emphasisColorRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.emphasisColorRgb} onChange={(e) => setValByKey("emphasisColorRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["emphasisColorRgb"]) && (
              <p className="m-0" key="error-emphasisColorRgb">
                {error["emphasisColorRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="linkColorRgb">Link Color Rgb:</label>
                <InputText id="linkColorRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.linkColorRgb} onChange={(e) => setValByKey("linkColorRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["linkColorRgb"]) && (
              <p className="m-0" key="error-linkColorRgb">
                {error["linkColorRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="linkHoverColorRgb">Link Hover Color Rgb:</label>
                <InputText id="linkHoverColorRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.linkHoverColorRgb} onChange={(e) => setValByKey("linkHoverColorRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["linkHoverColorRgb"]) && (
              <p className="m-0" key="error-linkHoverColorRgb">
                {error["linkHoverColorRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryColorRgb">Tertiary Color Rgb:</label>
                <InputText id="tertiaryColorRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryColorRgb} onChange={(e) => setValByKey("tertiaryColorRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryColorRgb"]) && (
              <p className="m-0" key="error-tertiaryColorRgb">
                {error["tertiaryColorRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="secondaryBgRgb">Secondary Bg Rgb:</label>
                <InputText id="secondaryBgRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.secondaryBgRgb} onChange={(e) => setValByKey("secondaryBgRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["secondaryBgRgb"]) && (
              <p className="m-0" key="error-secondaryBgRgb">
                {error["secondaryBgRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tertiaryBgRgb">Tertiary Bg Rgb:</label>
                <InputText id="tertiaryBgRgb" className="w-full mb-3 p-inputtext-sm" value={_entity?.tertiaryBgRgb} onChange={(e) => setValByKey("tertiaryBgRgb", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tertiaryBgRgb"]) && (
              <p className="m-0" key="error-tertiaryBgRgb">
                {error["tertiaryBgRgb"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="lightBorderSubtle">Light Border Subtle:</label>
                <InputText id="lightBorderSubtle" className="w-full mb-3 p-inputtext-sm" value={_entity?.lightBorderSubtle} onChange={(e) => setValByKey("lightBorderSubtle", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["lightBorderSubtle"]) && (
              <p className="m-0" key="error-lightBorderSubtle">
                {error["lightBorderSubtle"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="lightTextEmphasis">Light Text Emphasis:</label>
                <InputText id="lightTextEmphasis" className="w-full mb-3 p-inputtext-sm" value={_entity?.lightTextEmphasis} onChange={(e) => setValByKey("lightTextEmphasis", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["lightTextEmphasis"]) && (
              <p className="m-0" key="error-lightTextEmphasis">
                {error["lightTextEmphasis"]}
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

export default connect(mapState, mapDispatch)(ThemeCreateDialogComponent);
