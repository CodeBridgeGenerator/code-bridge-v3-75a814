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

const ThemeDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
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

const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.themeName}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.bodyColor}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.emphasisColor}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.secondaryColor}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.tertiaryColor}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.codeColor}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.highlightColor}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.borderColorTranslucent}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.bodyBg}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.borderColor}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.highlightBg}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.secondaryBg}</p>
const pTemplate13 = (rowData, { rowIndex }) => <p >{rowData.tertiaryBg}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.formInvalidBorderColor}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.formInvalidColor}</p>
const pTemplate16 = (rowData, { rowIndex }) => <p >{rowData.formValidBorderColor}</p>
const pTemplate17 = (rowData, { rowIndex }) => <p >{rowData.formValidColor}</p>
const pTemplate18 = (rowData, { rowIndex }) => <p >{rowData.headingColor}</p>
const pTemplate19 = (rowData, { rowIndex }) => <p >{rowData.linkColor}</p>
const pTemplate20 = (rowData, { rowIndex }) => <p >{rowData.linkHoverColor}</p>
const pTemplate21 = (rowData, { rowIndex }) => <p >{rowData.primary}</p>
const pTemplate22 = (rowData, { rowIndex }) => <p >{rowData.primaryBgSubtle}</p>
const pTemplate23 = (rowData, { rowIndex }) => <p >{rowData.primaryBorderSubtle}</p>
const pTemplate24 = (rowData, { rowIndex }) => <p >{rowData.primaryTextEmphasis}</p>
const pTemplate25 = (rowData, { rowIndex }) => <p >{rowData.secondary}</p>
const pTemplate26 = (rowData, { rowIndex }) => <p >{rowData.secondaryBgSubtle}</p>
const pTemplate27 = (rowData, { rowIndex }) => <p >{rowData.secondaryBorderSubtle}</p>
const pTemplate28 = (rowData, { rowIndex }) => <p >{rowData.secondaryTextEmphasis}</p>
const pTemplate29 = (rowData, { rowIndex }) => <p >{rowData.tertiary}</p>
const pTemplate30 = (rowData, { rowIndex }) => <p >{rowData.tertiaryBgSubtle}</p>
const pTemplate31 = (rowData, { rowIndex }) => <p >{rowData.tertiaryBorderSubtle}</p>
const pTemplate32 = (rowData, { rowIndex }) => <p >{rowData.tertiaryTextEmphasis}</p>
const pTemplate33 = (rowData, { rowIndex }) => <p >{rowData.success}</p>
const pTemplate34 = (rowData, { rowIndex }) => <p >{rowData.successBgSubtle}</p>
const pTemplate35 = (rowData, { rowIndex }) => <p >{rowData.successBorderSubtle}</p>
const pTemplate36 = (rowData, { rowIndex }) => <p >{rowData.successTextEmphasis}</p>
const pTemplate37 = (rowData, { rowIndex }) => <p >{rowData.info}</p>
const pTemplate38 = (rowData, { rowIndex }) => <p >{rowData.infoBgSubtle}</p>
const pTemplate39 = (rowData, { rowIndex }) => <p >{rowData.infoBorderSubtle}</p>
const pTemplate40 = (rowData, { rowIndex }) => <p >{rowData.infoTextEmphasis}</p>
const pTemplate41 = (rowData, { rowIndex }) => <p >{rowData.danger}</p>
const pTemplate42 = (rowData, { rowIndex }) => <p >{rowData.dangerBgSubtle}</p>
const pTemplate43 = (rowData, { rowIndex }) => <p >{rowData.dangerBorderSubtle}</p>
const pTemplate44 = (rowData, { rowIndex }) => <p >{rowData.dangerTextEmphasis}</p>
const pTemplate45 = (rowData, { rowIndex }) => <p >{rowData.warning}</p>
const pTemplate46 = (rowData, { rowIndex }) => <p >{rowData.warningBgSubtle}</p>
const pTemplate47 = (rowData, { rowIndex }) => <p >{rowData.warningBorderSubtle}</p>
const pTemplate48 = (rowData, { rowIndex }) => <p >{rowData.warningTextEmphasis}</p>
const pTemplate49 = (rowData, { rowIndex }) => <p >{rowData.dark}</p>
const pTemplate50 = (rowData, { rowIndex }) => <p >{rowData.darkBgSubtle}</p>
const pTemplate51 = (rowData, { rowIndex }) => <p >{rowData.darkBorderSubtle}</p>
const pTemplate52 = (rowData, { rowIndex }) => <p >{rowData.darkTextEmphasis}</p>
const pTemplate53 = (rowData, { rowIndex }) => <p >{rowData.bodyColorRgb}</p>
const pTemplate54 = (rowData, { rowIndex }) => <p >{rowData.emphasisColorRgb}</p>
const pTemplate55 = (rowData, { rowIndex }) => <p >{rowData.linkColorRgb}</p>
const pTemplate56 = (rowData, { rowIndex }) => <p >{rowData.linkHoverColorRgb}</p>
const pTemplate57 = (rowData, { rowIndex }) => <p >{rowData.tertiaryColorRgb}</p>
const pTemplate58 = (rowData, { rowIndex }) => <p >{rowData.secondaryBgRgb}</p>
const pTemplate59 = (rowData, { rowIndex }) => <p >{rowData.tertiaryBgRgb}</p>
const pTemplate60 = (rowData, { rowIndex }) => <p >{rowData.lightBorderSubtle}</p>
const pTemplate61 = (rowData, { rowIndex }) => <p >{rowData.lightTextEmphasis}</p>
const p_booleanTemplate62 = (rowData, { rowIndex }) => <p >{String(rowData.isDefault)}</p>
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
<Column field="themeName" header="Theme Name" body={pTemplate1} filter={selectedFilterFields.includes("themeName")} hidden={selectedHideFields?.includes("themeName")}  style={{ minWidth: "8rem" }} />
<Column field="bodyColor" header="Body Color" body={pTemplate2} filter={selectedFilterFields.includes("bodyColor")} hidden={selectedHideFields?.includes("bodyColor")}  style={{ minWidth: "8rem" }} />
<Column field="emphasisColor" header="Emphasis Color" body={pTemplate3} filter={selectedFilterFields.includes("emphasisColor")} hidden={selectedHideFields?.includes("emphasisColor")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryColor" header="Secondary Color" body={pTemplate4} filter={selectedFilterFields.includes("secondaryColor")} hidden={selectedHideFields?.includes("secondaryColor")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryColor" header="Tertiary Color" body={pTemplate5} filter={selectedFilterFields.includes("tertiaryColor")} hidden={selectedHideFields?.includes("tertiaryColor")}  style={{ minWidth: "8rem" }} />
<Column field="codeColor" header="Code Color" body={pTemplate6} filter={selectedFilterFields.includes("codeColor")} hidden={selectedHideFields?.includes("codeColor")}  style={{ minWidth: "8rem" }} />
<Column field="highlightColor" header="Highlight Color" body={pTemplate7} filter={selectedFilterFields.includes("highlightColor")} hidden={selectedHideFields?.includes("highlightColor")}  style={{ minWidth: "8rem" }} />
<Column field="borderColorTranslucent" header="Border Color Translucent" body={pTemplate8} filter={selectedFilterFields.includes("borderColorTranslucent")} hidden={selectedHideFields?.includes("borderColorTranslucent")}  style={{ minWidth: "8rem" }} />
<Column field="bodyBg" header="Body Bg" body={pTemplate9} filter={selectedFilterFields.includes("bodyBg")} hidden={selectedHideFields?.includes("bodyBg")}  style={{ minWidth: "8rem" }} />
<Column field="borderColor" header="Border Color" body={pTemplate10} filter={selectedFilterFields.includes("borderColor")} hidden={selectedHideFields?.includes("borderColor")}  style={{ minWidth: "8rem" }} />
<Column field="highlightBg" header="Highlight Bg" body={pTemplate11} filter={selectedFilterFields.includes("highlightBg")} hidden={selectedHideFields?.includes("highlightBg")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryBg" header="Secondary Bg" body={pTemplate12} filter={selectedFilterFields.includes("secondaryBg")} hidden={selectedHideFields?.includes("secondaryBg")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryBg" header="Tertiary Bg" body={pTemplate13} filter={selectedFilterFields.includes("tertiaryBg")} hidden={selectedHideFields?.includes("tertiaryBg")}  style={{ minWidth: "8rem" }} />
<Column field="formInvalidBorderColor" header="Form Invalid Border Color" body={pTemplate14} filter={selectedFilterFields.includes("formInvalidBorderColor")} hidden={selectedHideFields?.includes("formInvalidBorderColor")}  style={{ minWidth: "8rem" }} />
<Column field="formInvalidColor" header="Form Invalid Color" body={pTemplate15} filter={selectedFilterFields.includes("formInvalidColor")} hidden={selectedHideFields?.includes("formInvalidColor")}  style={{ minWidth: "8rem" }} />
<Column field="formValidBorderColor" header="Form Valid Border Color" body={pTemplate16} filter={selectedFilterFields.includes("formValidBorderColor")} hidden={selectedHideFields?.includes("formValidBorderColor")}  style={{ minWidth: "8rem" }} />
<Column field="formValidColor" header="Form Valid Color" body={pTemplate17} filter={selectedFilterFields.includes("formValidColor")} hidden={selectedHideFields?.includes("formValidColor")}  style={{ minWidth: "8rem" }} />
<Column field="headingColor" header="Heading Color" body={pTemplate18} filter={selectedFilterFields.includes("headingColor")} hidden={selectedHideFields?.includes("headingColor")}  style={{ minWidth: "8rem" }} />
<Column field="linkColor" header="Link Color" body={pTemplate19} filter={selectedFilterFields.includes("linkColor")} hidden={selectedHideFields?.includes("linkColor")}  style={{ minWidth: "8rem" }} />
<Column field="linkHoverColor" header="Link Hover Color" body={pTemplate20} filter={selectedFilterFields.includes("linkHoverColor")} hidden={selectedHideFields?.includes("linkHoverColor")}  style={{ minWidth: "8rem" }} />
<Column field="primary" header="Primary" body={pTemplate21} filter={selectedFilterFields.includes("primary")} hidden={selectedHideFields?.includes("primary")}  style={{ minWidth: "8rem" }} />
<Column field="primaryBgSubtle" header="Primary Bg Subtle" body={pTemplate22} filter={selectedFilterFields.includes("primaryBgSubtle")} hidden={selectedHideFields?.includes("primaryBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="primaryBorderSubtle" header="Primary Border Subtle" body={pTemplate23} filter={selectedFilterFields.includes("primaryBorderSubtle")} hidden={selectedHideFields?.includes("primaryBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="primaryTextEmphasis" header="Primary Text Emphasis" body={pTemplate24} filter={selectedFilterFields.includes("primaryTextEmphasis")} hidden={selectedHideFields?.includes("primaryTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="secondary" header="Secondary" body={pTemplate25} filter={selectedFilterFields.includes("secondary")} hidden={selectedHideFields?.includes("secondary")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryBgSubtle" header="Secondary Bg Subtle" body={pTemplate26} filter={selectedFilterFields.includes("secondaryBgSubtle")} hidden={selectedHideFields?.includes("secondaryBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryBorderSubtle" header="Secondary Border Subtle" body={pTemplate27} filter={selectedFilterFields.includes("secondaryBorderSubtle")} hidden={selectedHideFields?.includes("secondaryBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryTextEmphasis" header="Secondary Text Emphasis" body={pTemplate28} filter={selectedFilterFields.includes("secondaryTextEmphasis")} hidden={selectedHideFields?.includes("secondaryTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="tertiary" header="Tertiary" body={pTemplate29} filter={selectedFilterFields.includes("tertiary")} hidden={selectedHideFields?.includes("tertiary")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryBgSubtle" header="Tertiary Bg Subtle" body={pTemplate30} filter={selectedFilterFields.includes("tertiaryBgSubtle")} hidden={selectedHideFields?.includes("tertiaryBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryBorderSubtle" header="Tertiary Border Subtle" body={pTemplate31} filter={selectedFilterFields.includes("tertiaryBorderSubtle")} hidden={selectedHideFields?.includes("tertiaryBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryTextEmphasis" header="Tertiary Text Emphasis" body={pTemplate32} filter={selectedFilterFields.includes("tertiaryTextEmphasis")} hidden={selectedHideFields?.includes("tertiaryTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="success" header="Success" body={pTemplate33} filter={selectedFilterFields.includes("success")} hidden={selectedHideFields?.includes("success")}  style={{ minWidth: "8rem" }} />
<Column field="successBgSubtle" header="Success Bg Subtle" body={pTemplate34} filter={selectedFilterFields.includes("successBgSubtle")} hidden={selectedHideFields?.includes("successBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="successBorderSubtle" header="Success Border Subtle" body={pTemplate35} filter={selectedFilterFields.includes("successBorderSubtle")} hidden={selectedHideFields?.includes("successBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="successTextEmphasis" header="Success Text Emphasis" body={pTemplate36} filter={selectedFilterFields.includes("successTextEmphasis")} hidden={selectedHideFields?.includes("successTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="info" header="Info" body={pTemplate37} filter={selectedFilterFields.includes("info")} hidden={selectedHideFields?.includes("info")}  style={{ minWidth: "8rem" }} />
<Column field="infoBgSubtle" header="Info Bg Subtle" body={pTemplate38} filter={selectedFilterFields.includes("infoBgSubtle")} hidden={selectedHideFields?.includes("infoBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="infoBorderSubtle" header="Info Border Subtle" body={pTemplate39} filter={selectedFilterFields.includes("infoBorderSubtle")} hidden={selectedHideFields?.includes("infoBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="infoTextEmphasis" header="Info Text Emphasis" body={pTemplate40} filter={selectedFilterFields.includes("infoTextEmphasis")} hidden={selectedHideFields?.includes("infoTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="danger" header="Danger" body={pTemplate41} filter={selectedFilterFields.includes("danger")} hidden={selectedHideFields?.includes("danger")}  style={{ minWidth: "8rem" }} />
<Column field="dangerBgSubtle" header="Danger Bg Subtle" body={pTemplate42} filter={selectedFilterFields.includes("dangerBgSubtle")} hidden={selectedHideFields?.includes("dangerBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="dangerBorderSubtle" header="Danger Border Subtle" body={pTemplate43} filter={selectedFilterFields.includes("dangerBorderSubtle")} hidden={selectedHideFields?.includes("dangerBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="dangerTextEmphasis" header="Danger Text Emphasis" body={pTemplate44} filter={selectedFilterFields.includes("dangerTextEmphasis")} hidden={selectedHideFields?.includes("dangerTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="warning" header="Warning" body={pTemplate45} filter={selectedFilterFields.includes("warning")} hidden={selectedHideFields?.includes("warning")}  style={{ minWidth: "8rem" }} />
<Column field="warningBgSubtle" header="Warning Bg Subtle" body={pTemplate46} filter={selectedFilterFields.includes("warningBgSubtle")} hidden={selectedHideFields?.includes("warningBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="warningBorderSubtle" header="Warning Border Subtle" body={pTemplate47} filter={selectedFilterFields.includes("warningBorderSubtle")} hidden={selectedHideFields?.includes("warningBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="warningTextEmphasis" header="Warning Text Emphasis" body={pTemplate48} filter={selectedFilterFields.includes("warningTextEmphasis")} hidden={selectedHideFields?.includes("warningTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="dark" header="Dark" body={pTemplate49} filter={selectedFilterFields.includes("dark")} hidden={selectedHideFields?.includes("dark")}  style={{ minWidth: "8rem" }} />
<Column field="darkBgSubtle" header="Dark Bg Subtle" body={pTemplate50} filter={selectedFilterFields.includes("darkBgSubtle")} hidden={selectedHideFields?.includes("darkBgSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="darkBorderSubtle" header="Dark Border Subtle" body={pTemplate51} filter={selectedFilterFields.includes("darkBorderSubtle")} hidden={selectedHideFields?.includes("darkBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="darkTextEmphasis" header="Dark Text Emphasis" body={pTemplate52} filter={selectedFilterFields.includes("darkTextEmphasis")} hidden={selectedHideFields?.includes("darkTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="bodyColorRgb" header="Body Color Rgb" body={pTemplate53} filter={selectedFilterFields.includes("bodyColorRgb")} hidden={selectedHideFields?.includes("bodyColorRgb")}  style={{ minWidth: "8rem" }} />
<Column field="emphasisColorRgb" header="Emphasis Color Rgb" body={pTemplate54} filter={selectedFilterFields.includes("emphasisColorRgb")} hidden={selectedHideFields?.includes("emphasisColorRgb")}  style={{ minWidth: "8rem" }} />
<Column field="linkColorRgb" header="Link Color Rgb" body={pTemplate55} filter={selectedFilterFields.includes("linkColorRgb")} hidden={selectedHideFields?.includes("linkColorRgb")}  style={{ minWidth: "8rem" }} />
<Column field="linkHoverColorRgb" header="Link Hover Color Rgb" body={pTemplate56} filter={selectedFilterFields.includes("linkHoverColorRgb")} hidden={selectedHideFields?.includes("linkHoverColorRgb")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryColorRgb" header="Tertiary Color Rgb" body={pTemplate57} filter={selectedFilterFields.includes("tertiaryColorRgb")} hidden={selectedHideFields?.includes("tertiaryColorRgb")}  style={{ minWidth: "8rem" }} />
<Column field="secondaryBgRgb" header="Secondary Bg Rgb" body={pTemplate58} filter={selectedFilterFields.includes("secondaryBgRgb")} hidden={selectedHideFields?.includes("secondaryBgRgb")}  style={{ minWidth: "8rem" }} />
<Column field="tertiaryBgRgb" header="Tertiary Bg Rgb" body={pTemplate59} filter={selectedFilterFields.includes("tertiaryBgRgb")} hidden={selectedHideFields?.includes("tertiaryBgRgb")}  style={{ minWidth: "8rem" }} />
<Column field="lightBorderSubtle" header="Light Border Subtle" body={pTemplate60} filter={selectedFilterFields.includes("lightBorderSubtle")} hidden={selectedHideFields?.includes("lightBorderSubtle")}  style={{ minWidth: "8rem" }} />
<Column field="lightTextEmphasis" header="Light Text Emphasis" body={pTemplate61} filter={selectedFilterFields.includes("lightTextEmphasis")} hidden={selectedHideFields?.includes("lightTextEmphasis")}  style={{ minWidth: "8rem" }} />
<Column field="isDefault" header="Is Default" body={p_booleanTemplate62} filter={selectedFilterFields.includes("isDefault")} hidden={selectedHideFields?.includes("isDefault")}  style={{ minWidth: "8rem" }} />
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


        <Dialog header="Upload Theme Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="theme"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Theme" visible={searchDialog} onHide={() => setSearchDialog(false)}>
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

export default ThemeDataTable;