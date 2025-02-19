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


const SingleThemePage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("theme")
            .get(urlParams.singleThemeId, { query: { $populate: [            {
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
                props.alert({ title: "Theme", type: "error", message: error.message || "Failed get theme" });
            });
    }, [props,urlParams.singleThemeId]);


    const goBack = () => {
        navigate("/theme");
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
                    <h3 className="m-0">Theme</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>theme/{urlParams.singleThemeId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Theme Name</label><p className="m-0 ml-3" >{_entity?.themeName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Body Color</label><p className="m-0 ml-3" >{_entity?.bodyColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Emphasis Color</label><p className="m-0 ml-3" >{_entity?.emphasisColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Color</label><p className="m-0 ml-3" >{_entity?.secondaryColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Color</label><p className="m-0 ml-3" >{_entity?.tertiaryColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Code Color</label><p className="m-0 ml-3" >{_entity?.codeColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Highlight Color</label><p className="m-0 ml-3" >{_entity?.highlightColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Border Color Translucent</label><p className="m-0 ml-3" >{_entity?.borderColorTranslucent}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Body Bg</label><p className="m-0 ml-3" >{_entity?.bodyBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Border Color</label><p className="m-0 ml-3" >{_entity?.borderColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Highlight Bg</label><p className="m-0 ml-3" >{_entity?.highlightBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Bg</label><p className="m-0 ml-3" >{_entity?.secondaryBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Bg</label><p className="m-0 ml-3" >{_entity?.tertiaryBg}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Invalid Border Color</label><p className="m-0 ml-3" >{_entity?.formInvalidBorderColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Invalid Color</label><p className="m-0 ml-3" >{_entity?.formInvalidColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Valid Border Color</label><p className="m-0 ml-3" >{_entity?.formValidBorderColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Form Valid Color</label><p className="m-0 ml-3" >{_entity?.formValidColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Heading Color</label><p className="m-0 ml-3" >{_entity?.headingColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Link Color</label><p className="m-0 ml-3" >{_entity?.linkColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Link Hover Color</label><p className="m-0 ml-3" >{_entity?.linkHoverColor}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Primary</label><p className="m-0 ml-3" >{_entity?.primary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Primary Bg Subtle</label><p className="m-0 ml-3" >{_entity?.primaryBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Primary Border Subtle</label><p className="m-0 ml-3" >{_entity?.primaryBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Primary Text Emphasis</label><p className="m-0 ml-3" >{_entity?.primaryTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary</label><p className="m-0 ml-3" >{_entity?.secondary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Bg Subtle</label><p className="m-0 ml-3" >{_entity?.secondaryBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Border Subtle</label><p className="m-0 ml-3" >{_entity?.secondaryBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Text Emphasis</label><p className="m-0 ml-3" >{_entity?.secondaryTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary</label><p className="m-0 ml-3" >{_entity?.tertiary}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Bg Subtle</label><p className="m-0 ml-3" >{_entity?.tertiaryBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Border Subtle</label><p className="m-0 ml-3" >{_entity?.tertiaryBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Text Emphasis</label><p className="m-0 ml-3" >{_entity?.tertiaryTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Success</label><p className="m-0 ml-3" >{_entity?.success}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Success Bg Subtle</label><p className="m-0 ml-3" >{_entity?.successBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Success Border Subtle</label><p className="m-0 ml-3" >{_entity?.successBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Success Text Emphasis</label><p className="m-0 ml-3" >{_entity?.successTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Info</label><p className="m-0 ml-3" >{_entity?.info}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Info Bg Subtle</label><p className="m-0 ml-3" >{_entity?.infoBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Info Border Subtle</label><p className="m-0 ml-3" >{_entity?.infoBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Info Text Emphasis</label><p className="m-0 ml-3" >{_entity?.infoTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Danger</label><p className="m-0 ml-3" >{_entity?.danger}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Danger Bg Subtle</label><p className="m-0 ml-3" >{_entity?.dangerBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Danger Border Subtle</label><p className="m-0 ml-3" >{_entity?.dangerBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Danger Text Emphasis</label><p className="m-0 ml-3" >{_entity?.dangerTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Warning</label><p className="m-0 ml-3" >{_entity?.warning}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Warning Bg Subtle</label><p className="m-0 ml-3" >{_entity?.warningBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Warning Border Subtle</label><p className="m-0 ml-3" >{_entity?.warningBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Warning Text Emphasis</label><p className="m-0 ml-3" >{_entity?.warningTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Dark</label><p className="m-0 ml-3" >{_entity?.dark}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Dark Bg Subtle</label><p className="m-0 ml-3" >{_entity?.darkBgSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Dark Border Subtle</label><p className="m-0 ml-3" >{_entity?.darkBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Dark Text Emphasis</label><p className="m-0 ml-3" >{_entity?.darkTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Body Color Rgb</label><p className="m-0 ml-3" >{_entity?.bodyColorRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Emphasis Color Rgb</label><p className="m-0 ml-3" >{_entity?.emphasisColorRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Link Color Rgb</label><p className="m-0 ml-3" >{_entity?.linkColorRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Link Hover Color Rgb</label><p className="m-0 ml-3" >{_entity?.linkHoverColorRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Color Rgb</label><p className="m-0 ml-3" >{_entity?.tertiaryColorRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Secondary Bg Rgb</label><p className="m-0 ml-3" >{_entity?.secondaryBgRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Tertiary Bg Rgb</label><p className="m-0 ml-3" >{_entity?.tertiaryBgRgb}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Light Border Subtle</label><p className="m-0 ml-3" >{_entity?.lightBorderSubtle}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Light Text Emphasis</label><p className="m-0 ml-3" >{_entity?.lightTextEmphasis}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Is Default</label><p className="m-0" ><i id="isDefault" className={`pi ${_entity?.isDefault?"pi-check": "pi-times"}`}  ></i></p></div>
            

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
        recordId={urlParams.singleThemeId}
        user={props.user}
        alert={props.alert}
        serviceName="theme"
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

export default connect(mapState, mapDispatch)(SingleThemePage);
