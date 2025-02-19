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

import LocalePage from "../LocalePage/LocalePage";
import PasswordPolicyPage from "../PasswordPolicyPage/PasswordPolicyPage";
import CloudProvidersPage from "../CloudProvidersPage/CloudProvidersPage";
import HighAvailabilityPage from "../HighAvailabilityPage/HighAvailabilityPage";
import LoginPolicyPage from "../LoginPolicyPage/LoginPolicyPage";
import LoginTimePage from "../LoginTimePage/LoginTimePage";
import LoginBlockedPage from "../LoginBlockedPage/LoginBlockedPage";
import ThemePage from "../ThemePage/ThemePage";
import SharingPage from "../SharingPage/SharingPage";
import FigmaPage from "../FigmaPage/FigmaPage";
import DomainsPage from "../DomainsPage/DomainsPage";
import GitRepositoriesPage from "../GitRepositoriesPage/GitRepositoriesPage";
import FirebasePage from "../FirebasePage/FirebasePage";
import MobileAppPage from "../MobileAppPage/MobileAppPage";
import IOtAppPage from "../IOtAppPage/IOtAppPage";
import BackendAppsPage from "../BackendAppsPage/BackendAppsPage";
import FrontendAppsPage from "../FrontendAppsPage/FrontendAppsPage";
import DisasterRecoveryPage from "../DisasterRecoveryPage/DisasterRecoveryPage";
import DatabaseAppsPage from "../DatabaseAppsPage/DatabaseAppsPage";
import GenAiAppPage from "../GenAiAppPage/GenAiAppPage";
import PagesPage from "../PagesPage/PagesPage";
import CartsPage from "../CartsPage/CartsPage";
import ApisPage from "../ApisPage/ApisPage";
import WorkflowsPage from "../WorkflowsPage/WorkflowsPage";

const SingleProjectsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("projects")
            .get(urlParams.singleProjectsId, { query: { $populate: [            {
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
                props.alert({ title: "Projects", type: "error", message: error.message || "Failed get projects" });
            });
    }, [props,urlParams.singleProjectsId]);


    const goBack = () => {
        navigate("/projects");
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
                    <h3 className="m-0">Projects</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>projects/{urlParams.singleProjectsId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Project Name</label><p className="m-0 ml-3" >{_entity?.projectName}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
      </div>
       <div className="mt-2">
            <TabView>
                
                    <TabPanel header="locale" leftIcon="pi pi-building-columns mr-2">
                    <LocalePage/>
                    </TabPanel>
                    

                    <TabPanel header="passwordPolicy" leftIcon="pi pi-building-columns mr-2">
                    <PasswordPolicyPage/>
                    </TabPanel>
                    

                    <TabPanel header="cloudProviders" leftIcon="pi pi-building-columns mr-2">
                    <CloudProvidersPage/>
                    </TabPanel>
                    

                    <TabPanel header="highAvailability" leftIcon="pi pi-building-columns mr-2">
                    <HighAvailabilityPage/>
                    </TabPanel>
                    

                    <TabPanel header="loginPolicy" leftIcon="pi pi-building-columns mr-2">
                    <LoginPolicyPage/>
                    </TabPanel>
                    

                    <TabPanel header="loginTime" leftIcon="pi pi-building-columns mr-2">
                    <LoginTimePage/>
                    </TabPanel>
                    

                    <TabPanel header="loginBlocked" leftIcon="pi pi-building-columns mr-2">
                    <LoginBlockedPage/>
                    </TabPanel>
                    

                    <TabPanel header="theme" leftIcon="pi pi-building-columns mr-2">
                    <ThemePage/>
                    </TabPanel>
                    

                    <TabPanel header="sharing" leftIcon="pi pi-building-columns mr-2">
                    <SharingPage/>
                    </TabPanel>
                    

                    <TabPanel header="figma" leftIcon="pi pi-building-columns mr-2">
                    <FigmaPage/>
                    </TabPanel>
                    

                    <TabPanel header="domains" leftIcon="pi pi-building-columns mr-2">
                    <DomainsPage/>
                    </TabPanel>
                    

                    <TabPanel header="gitRepositories" leftIcon="pi pi-building-columns mr-2">
                    <GitRepositoriesPage/>
                    </TabPanel>
                    

                    <TabPanel header="firebase" leftIcon="pi pi-building-columns mr-2">
                    <FirebasePage/>
                    </TabPanel>
                    

                    <TabPanel header="mobileApp" leftIcon="pi pi-building-columns mr-2">
                    <MobileAppPage/>
                    </TabPanel>
                    

                    <TabPanel header="iOtApp" leftIcon="pi pi-building-columns mr-2">
                    <IOtAppPage/>
                    </TabPanel>
                    

                    <TabPanel header="backendApps" leftIcon="pi pi-building-columns mr-2">
                    <BackendAppsPage/>
                    </TabPanel>
                    

                    <TabPanel header="frontendApps" leftIcon="pi pi-building-columns mr-2">
                    <FrontendAppsPage/>
                    </TabPanel>
                    

                    <TabPanel header="disasterRecovery" leftIcon="pi pi-building-columns mr-2">
                    <DisasterRecoveryPage/>
                    </TabPanel>
                    

                    <TabPanel header="databaseApps" leftIcon="pi pi-building-columns mr-2">
                    <DatabaseAppsPage/>
                    </TabPanel>
                    

                    <TabPanel header="genAiApp" leftIcon="pi pi-building-columns mr-2">
                    <GenAiAppPage/>
                    </TabPanel>
                    

                    <TabPanel header="pages" leftIcon="pi pi-building-columns mr-2">
                    <PagesPage/>
                    </TabPanel>
                    

                    <TabPanel header="carts" leftIcon="pi pi-building-columns mr-2">
                    <CartsPage/>
                    </TabPanel>
                    

                    <TabPanel header="apis" leftIcon="pi pi-building-columns mr-2">
                    <ApisPage/>
                    </TabPanel>
                    

                    <TabPanel header="workflows" leftIcon="pi pi-building-columns mr-2">
                    <WorkflowsPage/>
                    </TabPanel>
                    
            </TabView>
        </div>

      <CommentsSection
        recordId={urlParams.singleProjectsId}
        user={props.user}
        alert={props.alert}
        serviceName="projects"
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

export default connect(mapState, mapDispatch)(SingleProjectsPage);
