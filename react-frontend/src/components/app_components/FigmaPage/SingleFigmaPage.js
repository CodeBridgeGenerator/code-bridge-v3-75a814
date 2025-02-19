import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import client from "../../../services/restClient";
import CommentsSection from "../../common/CommentsSection";
import ProjectLayout from "../../Layouts/ProjectLayout";


const SingleFigmaPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("figma")
            .get(urlParams.singleFigmaId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.debug({ error });
                props.alert({ title: "Figma", type: "error", message: error.message || "Failed get figma" });
            });
    }, [props,urlParams.singleFigmaId]);


    const goBack = () => {
        navigate("/figma");
    };

      const toggleHelpSidebar = () => {
    setHelpSidebarVisible(!isHelpSidebarVisible);
  };

  const copyPageLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        props.alert({
          title: "Link Copied",
          type: "success",
          message: "Page link copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        props.alert({
          title: "Error",
          type: "error",
          message: "Failed to copy page link.",
        });
      });
  };

    const menuItems = [
        {
            label: "Copy link",
            icon: "pi pi-copy",
            command: () => copyPageLink(),
        },
        {
            label: "Help",
            icon: "pi pi-question-circle",
            command: () => toggleHelpSidebar(),
        },
    ];

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-12">
                <div className="flex align-items-center justify-content-between">
                <div className="flex align-items-center">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Figma</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>figma/{urlParams.singleFigmaId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">File Id</label><p className="m-0 ml-3" >{_entity?.fileId}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Description</label><p className="m-0 ml-3" >{_entity?.description}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Is Default</label><p className="m-0" ><i id="isDefault" className={`pi ${_entity?.isDefault?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Body</label><p className="m-0 ml-3" >{_entity?.textBody}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Emphasis</label><p className="m-0 ml-3" >{_entity?.textEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Secondary</label><p className="m-0 ml-3" >{_entity?.textSecondary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Tertiary</label><p className="m-0 ml-3" >{_entity?.textTertiary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Code</label><p className="m-0 ml-3" >{_entity?.textCode}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Highlight</label><p className="m-0 ml-3" >{_entity?.textHighlight}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Border Translucent</label><p className="m-0 ml-3" >{_entity?.bgBorderTranslucent}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Body</label><p className="m-0 ml-3" >{_entity?.bgBody}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Border</label><p className="m-0 ml-3" >{_entity?.bgBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Highlight</label><p className="m-0 ml-3" >{_entity?.bgHighlight}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Secondary</label><p className="m-0 ml-3" >{_entity?.bgSecondary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Bg Tertiary</label><p className="m-0 ml-3" >{_entity?.bgTertiary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Invalid Border</label><p className="m-0 ml-3" >{_entity?.formInvalidBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Invalid Bg</label><p className="m-0 ml-3" >{_entity?.formInvalidBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Valid Border</label><p className="m-0 ml-3" >{_entity?.formValidBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Valid Bg</label><p className="m-0 ml-3" >{_entity?.formValidBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Heading</label><p className="m-0 ml-3" >{_entity?.textHeading}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Link</label><p className="m-0 ml-3" >{_entity?.textLink}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Text Link Hover</label><p className="m-0 ml-3" >{_entity?.textLinkHover}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Primary Fill</label><p className="m-0 ml-3" >{_entity?.signalPrimaryFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Primary Bg</label><p className="m-0 ml-3" >{_entity?.signalPrimaryBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Primary Border</label><p className="m-0 ml-3" >{_entity?.signalPrimaryBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Primary Text</label><p className="m-0 ml-3" >{_entity?.signalPrimaryText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Secondary Fill</label><p className="m-0 ml-3" >{_entity?.signalSecondaryFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Secondary Bg</label><p className="m-0 ml-3" >{_entity?.signalSecondaryBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Secondary Border</label><p className="m-0 ml-3" >{_entity?.signalSecondaryBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Secondary Text</label><p className="m-0 ml-3" >{_entity?.signalSecondaryText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Tertiary Fill</label><p className="m-0 ml-3" >{_entity?.signalTertiaryFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Tertiary Bg</label><p className="m-0 ml-3" >{_entity?.signalTertiaryBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Tertiary Border</label><p className="m-0 ml-3" >{_entity?.signalTertiaryBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Tertiary Text</label><p className="m-0 ml-3" >{_entity?.signalTertiaryText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Success Fill</label><p className="m-0 ml-3" >{_entity?.signalSuccessFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Success Bg</label><p className="m-0 ml-3" >{_entity?.signalSuccessBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Success Border</label><p className="m-0 ml-3" >{_entity?.signalSuccessBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Success Text</label><p className="m-0 ml-3" >{_entity?.signalSuccessText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Info Fill</label><p className="m-0 ml-3" >{_entity?.signalInfoFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Info Bg</label><p className="m-0 ml-3" >{_entity?.signalInfoBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Info Border</label><p className="m-0 ml-3" >{_entity?.signalInfoBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Info Text</label><p className="m-0 ml-3" >{_entity?.signalInfoText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Danger Fill</label><p className="m-0 ml-3" >{_entity?.signalDangerFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Danger Bg</label><p className="m-0 ml-3" >{_entity?.signalDangerBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Danger Border</label><p className="m-0 ml-3" >{_entity?.signalDangerBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Danger Text</label><p className="m-0 ml-3" >{_entity?.signalDangerText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Warning Fill</label><p className="m-0 ml-3" >{_entity?.signalWarningFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Warning Bg</label><p className="m-0 ml-3" >{_entity?.signalWarningBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Warning Border</label><p className="m-0 ml-3" >{_entity?.signalWarningBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Warning Text</label><p className="m-0 ml-3" >{_entity?.signalWarningText}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Invert Fill</label><p className="m-0 ml-3" >{_entity?.signalInvertFill}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Invert Bg</label><p className="m-0 ml-3" >{_entity?.signalInvertBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Invert Border</label><p className="m-0 ml-3" >{_entity?.signalInvertBorder}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Signal Invert Text</label><p className="m-0 ml-3" >{_entity?.signalInvertText}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
      </div>
       <div className="mt-2">
            <TabView>
                
            </TabView>
        </div>

      <CommentsSection
        recordId={urlParams.singleFigmaId}
        user={props.user}
        alert={props.alert}
        serviceName="figma"
      />
    <div
        id="rightsidebar"
        className={classNames(
          "overlay-auto z-10 surface-overlay shadow-2 fixed top-0 right-0 w-20rem animation-duration-150 animation-ease-in-out",
          { hidden: !isHelpSidebarVisible, block: isHelpSidebarVisible }
        )}
        style={{
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="flex flex-column h-full p-4 bg-white" style={{ height: "calc(100% - 60px)", marginTop: "60px" }}>
          <span className="text-xl font-medium text-900 mb-3">Help bar</span>
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
        </div>
      </div>
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleFigmaPage);
