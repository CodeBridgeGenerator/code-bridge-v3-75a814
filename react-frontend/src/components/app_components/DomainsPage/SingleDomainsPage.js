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


const SingleDomainsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    const [environment, setEnvironment] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("domains")
            .get(urlParams.singleDomainsId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },"environment"] }})
            .then((res) => {
                set_entity(res || {});
                const environment = Array.isArray(res.environment)
            ? res.environment.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.environment
                ? [{ _id: res.environment._id, name: res.environment.name }]
                : [];
        setEnvironment(environment);
            })
            .catch((error) => {
                console.debug({ error });
                props.alert({ title: "Domains", type: "error", message: error.message || "Failed get domains" });
            });
    }, [props,urlParams.singleDomainsId]);


    const goBack = () => {
        navigate("/domains");
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
                    <h3 className="m-0">Domains</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>domains/{urlParams.singleDomainsId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Domain</label><p className="m-0 ml-3" >{_entity?.domain}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">App Name</label><p className="m-0 ml-3" >{_entity?.appName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">App Dir</label><p className="m-0 ml-3" >{_entity?.appDir}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">App Project Name</label><p className="m-0 ml-3" >{_entity?.appProjectName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">App Object Name</label><p className="m-0 ml-3" >{_entity?.appObjectName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">App Port Number</label><p className="m-0 ml-3" >{Number(_entity?.appPortNumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Is Default</label><p className="m-0" ><i id="isDefault" className={`pi ${_entity?.isDefault?"pi-check": "pi-times"}`}  ></i></p></div>
            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Environment</label>
                    {environment.map((elem) => (
                        <Link key={elem._id} to={`/environments/${elem._id}`}>
                        <div>
                  {" "}
                            <p className="text-xl text-primary">{elem.name}</p>
                            </div>
                        </Link>
                    ))}</div>

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
        recordId={urlParams.singleDomainsId}
        user={props.user}
        alert={props.alert}
        serviceName="domains"
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

export default connect(mapState, mapDispatch)(SingleDomainsPage);
