import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef, useEffect} from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../../services/UploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../../utils/DownloadCSV";
import InboxCreateDialogComponent from "../../cb_components/InboxPage/InboxCreateDialogComponent";
import InviteIcon from "../../../assets/media/Invite.png";
import ExportIcon from "../../../assets/media/Export & Share.png";
import CopyIcon from "../../../assets/media/Clipboard.png";
import DuplicateIcon from "../../../assets/media/Duplicate.png";
import DeleteIcon from "../../../assets/media/Trash.png";

const FigmaDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user,   selectedDelete,
  setSelectedDelete, onCreateResult}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [data, setData] = useState([]);

const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.fileId}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
const p_booleanTemplate4 = (rowData, { rowIndex }) => <p >{String(rowData.isDefault)}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.textBody}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.textEmphasis}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.textSecondary}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.textTertiary}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.textCode}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.textHighlight}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.bgBorderTranslucent}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.bgBody}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.bgBorder}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.bgHighlight}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.bgSecondary}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.bgTertiary}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.formInvalidBorder}</p>
const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.formInvalidBg}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.formValidBorder}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.formValidBg}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.textHeading}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.textLink}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.textLinkHover}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.signalPrimaryFill}</p>
const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.signalPrimaryBg}</p>
const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.signalPrimaryBorder}</p>
const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.signalPrimaryText}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.signalSecondaryFill}</p>
const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.signalSecondaryBg}</p>
const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.signalSecondaryBorder}</p>
const pTemplate31 = (rowData, { rowIndex }) => <p >{rowData.signalSecondaryText}</p>
const pTemplate32 = (rowData, { rowIndex }) => <p >{rowData.signalTertiaryFill}</p>
const pTemplate33 = (rowData, { rowIndex }) => <p >{rowData.signalTertiaryBg}</p>
const pTemplate34 = (rowData, { rowIndex }) => <p >{rowData.signalTertiaryBorder}</p>
const pTemplate35 = (rowData, { rowIndex }) => <p >{rowData.signalTertiaryText}</p>
const pTemplate36 = (rowData, { rowIndex }) => <p >{rowData.signalSuccessFill}</p>
const pTemplate37 = (rowData, { rowIndex }) => <p >{rowData.signalSuccessBg}</p>
const pTemplate38 = (rowData, { rowIndex }) => <p >{rowData.signalSuccessBorder}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.signalSuccessText}</p>
const pTemplate40 = (rowData, { rowIndex }) => <p >{rowData.signalInfoFill}</p>
const pTemplate41 = (rowData, { rowIndex }) => <p >{rowData.signalInfoBg}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.signalInfoBorder}</p>
const pTemplate43 = (rowData, { rowIndex }) => <p >{rowData.signalInfoText}</p>
const pTemplate44 = (rowData, { rowIndex }) => <p >{rowData.signalDangerFill}</p>
const pTemplate45 = (rowData, { rowIndex }) => <p >{rowData.signalDangerBg}</p>
const pTemplate46 = (rowData, { rowIndex }) => <p >{rowData.signalDangerBorder}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.signalDangerText}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.signalWarningFill}</p>
const pTemplate49 = (rowData, { rowIndex }) => <p >{rowData.signalWarningBg}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.signalWarningBorder}</p>
const pTemplate51 = (rowData, { rowIndex }) => <p >{rowData.signalWarningText}</p>
const pTemplate52 = (rowData, { rowIndex }) => <p >{rowData.signalInvertFill}</p>
const pTemplate53 = (rowData, { rowIndex }) => <p >{rowData.signalInvertBg}</p>
const pTemplate54 = (rowData, { rowIndex }) => <p >{rowData.signalInvertBorder}</p>
const pTemplate55 = (rowData, { rowIndex }) => <p >{rowData.signalInvertText}</p>
const preTemplate56 = (rowData, { rowIndex }) => <p >{rowData.components}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
      const checkboxTemplate = (rowData) => (
    <Checkbox
      checked={selectedItems.some((item) => item._id === rowData._id)}
      onChange={(e) => {
        let _selectedItems = [...selectedItems];

        if (e.checked) {
          _selectedItems.push(rowData);
        } else {
          _selectedItems = _selectedItems.filter(
            (item) => item._id !== rowData._id,
          );
        }
        setSelectedItems(_selectedItems);
      }}
    />
  );
  const deselectAllRows = () => {
    // Logic to deselect all selected rows
    setSelectedItems([]); // Assuming setSelectedItems is used to manage selected items state
  };

  const handleDelete = async () => {
    if (!selectedItems || selectedItems.length === 0) return;

    try {
      const promises = selectedItems.map((item) =>
        client.service("companies").remove(item._id),
      );
      await Promise.all(promises);
      const updatedData = data.filter(
        (item) => !selectedItems.find((selected) => selected._id === item._id),
      );
      setData(updatedData);
      setSelectedDelete(selectedItems.map((item) => item._id));

      deselectAllRows();
    } catch (error) {
      console.error("Failed to delete selected records", error);
    }
  };
    
  const handleMessage = () => {
    setShowDialog(true); // Open the dialog
  };

  const handleHideDialog = () => {
    setShowDialog(false); // Close the dialog
  };

    return (
        <>
        <DataTable 
           value={items}
        ref={dt}
        removableSort
        onRowClick={onRowClick}
        scrollable
        rowHover
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[10, 50, 250, 500]}
        size={"small"}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        rowClassName="cursor-pointer"
        alwaysShowPaginator={!urlParams.singleUsersId}
        selection={selectedItems}
        onSelectionChange={(e) => setSelectedItems(e.value)}
        onCreateResult={onCreateResult}
        >
                <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
          body={checkboxTemplate}
        />
<Column field="name" header="Name" body={pTemplate1} filter={selectedFilterFields.includes("name")} hidden={selectedHideFields?.includes("name")}  style={{ minWidth: "8rem" }} />
<Column field="fileId" header="File Id" body={pTemplate2} filter={selectedFilterFields.includes("fileId")} hidden={selectedHideFields?.includes("fileId")}  style={{ minWidth: "8rem" }} />
<Column field="description" header="Description" body={pTemplate3} filter={selectedFilterFields.includes("description")} hidden={selectedHideFields?.includes("description")}  style={{ minWidth: "8rem" }} />
<Column field="isDefault" header="Is Default" body={p_booleanTemplate4} filter={selectedFilterFields.includes("isDefault")} hidden={selectedHideFields?.includes("isDefault")}  style={{ minWidth: "8rem" }} />
<Column field="textBody" header="Text Body" body={pTemplate5} filter={selectedFilterFields.includes("textBody")} hidden={selectedHideFields?.includes("textBody")}  style={{ minWidth: "8rem" }} />
<Column field="textEmphasis" header="Text Emphasis" body={pTemplate6} filter={selectedFilterFields.includes("textEmphasis")} hidden={selectedHideFields?.includes("textEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="textSecondary" header="Text Secondary" body={pTemplate7} filter={selectedFilterFields.includes("textSecondary")} hidden={selectedHideFields?.includes("textSecondary")}  style={{ minWidth: "8rem" }} />
<Column field="textTertiary" header="Text Tertiary" body={pTemplate8} filter={selectedFilterFields.includes("textTertiary")} hidden={selectedHideFields?.includes("textTertiary")}  style={{ minWidth: "8rem" }} />
<Column field="textCode" header="Text Code" body={pTemplate9} filter={selectedFilterFields.includes("textCode")} hidden={selectedHideFields?.includes("textCode")}  style={{ minWidth: "8rem" }} />
<Column field="textHighlight" header="Text Highlight" body={pTemplate10} filter={selectedFilterFields.includes("textHighlight")} hidden={selectedHideFields?.includes("textHighlight")}  style={{ minWidth: "8rem" }} />
<Column field="bgBorderTranslucent" header="Bg Border Translucent" body={pTemplate11} filter={selectedFilterFields.includes("bgBorderTranslucent")} hidden={selectedHideFields?.includes("bgBorderTranslucent")}  style={{ minWidth: "8rem" }} />
<Column field="bgBody" header="Bg Body" body={pTemplate12} filter={selectedFilterFields.includes("bgBody")} hidden={selectedHideFields?.includes("bgBody")}  style={{ minWidth: "8rem" }} />
<Column field="bgBorder" header="Bg Border" body={pTemplate13} filter={selectedFilterFields.includes("bgBorder")} hidden={selectedHideFields?.includes("bgBorder")}  style={{ minWidth: "8rem" }} />
<Column field="bgHighlight" header="Bg Highlight" body={pTemplate14} filter={selectedFilterFields.includes("bgHighlight")} hidden={selectedHideFields?.includes("bgHighlight")}  style={{ minWidth: "8rem" }} />
<Column field="bgSecondary" header="Bg Secondary" body={pTemplate15} filter={selectedFilterFields.includes("bgSecondary")} hidden={selectedHideFields?.includes("bgSecondary")}  style={{ minWidth: "8rem" }} />
<Column field="bgTertiary" header="Bg Tertiary" body={pTemplate16} filter={selectedFilterFields.includes("bgTertiary")} hidden={selectedHideFields?.includes("bgTertiary")}  style={{ minWidth: "8rem" }} />
<Column field="formInvalidBorder" header="Form Invalid Border" body={pTemplate17} filter={selectedFilterFields.includes("formInvalidBorder")} hidden={selectedHideFields?.includes("formInvalidBorder")}  style={{ minWidth: "8rem" }} />
<Column field="formInvalidBg" header="Form Invalid Bg" body={pTemplate18} filter={selectedFilterFields.includes("formInvalidBg")} hidden={selectedHideFields?.includes("formInvalidBg")}  style={{ minWidth: "8rem" }} />
<Column field="formValidBorder" header="Form Valid Border" body={pTemplate19} filter={selectedFilterFields.includes("formValidBorder")} hidden={selectedHideFields?.includes("formValidBorder")}  style={{ minWidth: "8rem" }} />
<Column field="formValidBg" header="Form Valid Bg" body={pTemplate20} filter={selectedFilterFields.includes("formValidBg")} hidden={selectedHideFields?.includes("formValidBg")}  style={{ minWidth: "8rem" }} />
<Column field="textHeading" header="Text Heading" body={pTemplate21} filter={selectedFilterFields.includes("textHeading")} hidden={selectedHideFields?.includes("textHeading")}  style={{ minWidth: "8rem" }} />
<Column field="textLink" header="Text Link" body={pTemplate22} filter={selectedFilterFields.includes("textLink")} hidden={selectedHideFields?.includes("textLink")}  style={{ minWidth: "8rem" }} />
<Column field="textLinkHover" header="Text Link Hover" body={pTemplate23} filter={selectedFilterFields.includes("textLinkHover")} hidden={selectedHideFields?.includes("textLinkHover")}  style={{ minWidth: "8rem" }} />
<Column field="signalPrimaryFill" header="Signal Primary Fill" body={pTemplate24} filter={selectedFilterFields.includes("signalPrimaryFill")} hidden={selectedHideFields?.includes("signalPrimaryFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalPrimaryBg" header="Signal Primary Bg" body={pTemplate25} filter={selectedFilterFields.includes("signalPrimaryBg")} hidden={selectedHideFields?.includes("signalPrimaryBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalPrimaryBorder" header="Signal Primary Border" body={pTemplate26} filter={selectedFilterFields.includes("signalPrimaryBorder")} hidden={selectedHideFields?.includes("signalPrimaryBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalPrimaryText" header="Signal Primary Text" body={pTemplate27} filter={selectedFilterFields.includes("signalPrimaryText")} hidden={selectedHideFields?.includes("signalPrimaryText")}  style={{ minWidth: "8rem" }} />
<Column field="signalSecondaryFill" header="Signal Secondary Fill" body={pTemplate28} filter={selectedFilterFields.includes("signalSecondaryFill")} hidden={selectedHideFields?.includes("signalSecondaryFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalSecondaryBg" header="Signal Secondary Bg" body={pTemplate29} filter={selectedFilterFields.includes("signalSecondaryBg")} hidden={selectedHideFields?.includes("signalSecondaryBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalSecondaryBorder" header="Signal Secondary Border" body={pTemplate30} filter={selectedFilterFields.includes("signalSecondaryBorder")} hidden={selectedHideFields?.includes("signalSecondaryBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalSecondaryText" header="Signal Secondary Text" body={pTemplate31} filter={selectedFilterFields.includes("signalSecondaryText")} hidden={selectedHideFields?.includes("signalSecondaryText")}  style={{ minWidth: "8rem" }} />
<Column field="signalTertiaryFill" header="Signal Tertiary Fill" body={pTemplate32} filter={selectedFilterFields.includes("signalTertiaryFill")} hidden={selectedHideFields?.includes("signalTertiaryFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalTertiaryBg" header="Signal Tertiary Bg" body={pTemplate33} filter={selectedFilterFields.includes("signalTertiaryBg")} hidden={selectedHideFields?.includes("signalTertiaryBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalTertiaryBorder" header="Signal Tertiary Border" body={pTemplate34} filter={selectedFilterFields.includes("signalTertiaryBorder")} hidden={selectedHideFields?.includes("signalTertiaryBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalTertiaryText" header="Signal Tertiary Text" body={pTemplate35} filter={selectedFilterFields.includes("signalTertiaryText")} hidden={selectedHideFields?.includes("signalTertiaryText")}  style={{ minWidth: "8rem" }} />
<Column field="signalSuccessFill" header="Signal Success Fill" body={pTemplate36} filter={selectedFilterFields.includes("signalSuccessFill")} hidden={selectedHideFields?.includes("signalSuccessFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalSuccessBg" header="Signal Success Bg" body={pTemplate37} filter={selectedFilterFields.includes("signalSuccessBg")} hidden={selectedHideFields?.includes("signalSuccessBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalSuccessBorder" header="Signal Success Border" body={pTemplate38} filter={selectedFilterFields.includes("signalSuccessBorder")} hidden={selectedHideFields?.includes("signalSuccessBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalSuccessText" header="Signal Success Text" body={pTemplate39} filter={selectedFilterFields.includes("signalSuccessText")} hidden={selectedHideFields?.includes("signalSuccessText")}  style={{ minWidth: "8rem" }} />
<Column field="signalInfoFill" header="Signal Info Fill" body={pTemplate40} filter={selectedFilterFields.includes("signalInfoFill")} hidden={selectedHideFields?.includes("signalInfoFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalInfoBg" header="Signal Info Bg" body={pTemplate41} filter={selectedFilterFields.includes("signalInfoBg")} hidden={selectedHideFields?.includes("signalInfoBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalInfoBorder" header="Signal Info Border" body={pTemplate42} filter={selectedFilterFields.includes("signalInfoBorder")} hidden={selectedHideFields?.includes("signalInfoBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalInfoText" header="Signal Info Text" body={pTemplate43} filter={selectedFilterFields.includes("signalInfoText")} hidden={selectedHideFields?.includes("signalInfoText")}  style={{ minWidth: "8rem" }} />
<Column field="signalDangerFill" header="Signal Danger Fill" body={pTemplate44} filter={selectedFilterFields.includes("signalDangerFill")} hidden={selectedHideFields?.includes("signalDangerFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalDangerBg" header="Signal Danger Bg" body={pTemplate45} filter={selectedFilterFields.includes("signalDangerBg")} hidden={selectedHideFields?.includes("signalDangerBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalDangerBorder" header="Signal Danger Border" body={pTemplate46} filter={selectedFilterFields.includes("signalDangerBorder")} hidden={selectedHideFields?.includes("signalDangerBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalDangerText" header="Signal Danger Text" body={pTemplate47} filter={selectedFilterFields.includes("signalDangerText")} hidden={selectedHideFields?.includes("signalDangerText")}  style={{ minWidth: "8rem" }} />
<Column field="signalWarningFill" header="Signal Warning Fill" body={pTemplate48} filter={selectedFilterFields.includes("signalWarningFill")} hidden={selectedHideFields?.includes("signalWarningFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalWarningBg" header="Signal Warning Bg" body={pTemplate49} filter={selectedFilterFields.includes("signalWarningBg")} hidden={selectedHideFields?.includes("signalWarningBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalWarningBorder" header="Signal Warning Border" body={pTemplate50} filter={selectedFilterFields.includes("signalWarningBorder")} hidden={selectedHideFields?.includes("signalWarningBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalWarningText" header="Signal Warning Text" body={pTemplate51} filter={selectedFilterFields.includes("signalWarningText")} hidden={selectedHideFields?.includes("signalWarningText")}  style={{ minWidth: "8rem" }} />
<Column field="signalInvertFill" header="Signal Invert Fill" body={pTemplate52} filter={selectedFilterFields.includes("signalInvertFill")} hidden={selectedHideFields?.includes("signalInvertFill")}  style={{ minWidth: "8rem" }} />
<Column field="signalInvertBg" header="Signal Invert Bg" body={pTemplate53} filter={selectedFilterFields.includes("signalInvertBg")} hidden={selectedHideFields?.includes("signalInvertBg")}  style={{ minWidth: "8rem" }} />
<Column field="signalInvertBorder" header="Signal Invert Border" body={pTemplate54} filter={selectedFilterFields.includes("signalInvertBorder")} hidden={selectedHideFields?.includes("signalInvertBorder")}  style={{ minWidth: "8rem" }} />
<Column field="signalInvertText" header="Signal Invert Text" body={pTemplate55} filter={selectedFilterFields.includes("signalInvertText")} hidden={selectedHideFields?.includes("signalInvertText")}  style={{ minWidth: "8rem" }} />
<Column field="components" header="Components" body={preTemplate56} filter={selectedFilterFields.includes("components")} hidden={selectedHideFields?.includes("components")}  style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>


      {selectedItems.length > 0 ? (
        <div
          className="card center"
          style={{
            width: "51rem",
            margin: "20px auto 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            color: "#2A4454",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #2A4454",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {selectedItems.length} selected
            <span
              className="pi pi-times"
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                color: "#2A4454",
              }}
              onClick={() => {
                deselectAllRows();
              }}
            />
          </div>

          {/* New buttons section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Copy button */}
            <Button
              label="Copy"
              labelposition="right"
              icon={
                <img
                  src={CopyIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Copy"
              // onClick={handleCopy}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Duplicate button */}
            <Button
              label="Duplicate"
              labelposition="right"
              icon={
                <img
                  src={DuplicateIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Duplicate"
              // onClick={handleDuplicate}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Export button */}
            <Button
              label="Export"
              labelposition="right"
              icon={
                <img
                  src={ExportIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              // tooltip="Export"
              // onClick={handleExport}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* Message button */}
            <Button
              label="Message"
              labelposition="right"
              icon={
                <img
                  src={InviteIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              onClick={handleMessage}
              className="p-button-rounded p-button-text"
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                marginRight: "8px",
                gap: "4px",
              }}
            />

            {/* InboxCreateDialogComponent */}
            <InboxCreateDialogComponent
              show={showDialog}
              onHide={handleHideDialog}
              serviceInbox="companies"
              onCreateResult={onCreateResult}
              // selectedItemsId={selectedItems.map(item => item._id)}
              selectedItemsId={selectedItems}
            />

            {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
            <Button
              label="Delete"
              labelposition="right"
              icon={
                <img
                  src={DeleteIcon}
                  style={{ marginRight: "4px", width: "1em", height: "1em" }}
                />
              }
              onClick={handleDelete}
              style={{
                backgroundColor: "white",
                color: "#2A4454",
                border: "1px solid transparent",
                transition: "border-color 0.3s",
                fontSize: "14px",
                fontFamily: "Arial, sans-serif",
                gap: "4px",
              }}
            />
          </div>
        </div>
      ) : null}


        <Dialog header="Upload Figma Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="figma"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Figma" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.debug(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.debug(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default FigmaDataTable;