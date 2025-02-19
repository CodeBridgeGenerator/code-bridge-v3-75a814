import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/signUp/SignUpPage';
import ResetPage from '../components/LoginPage/ResetPage';
import Dashboard from '../components/Dashboard/Dashboard';
import MaintenancePage from '../components/common/MaintenancePage';
import LoginFaqPage from '../components/LoginPage/LoginFaqPage';
import DashboardAdminControl from '../components/Dashboard/DashboardAdminControl';
import DashboardCompanyData from '../components/Dashboard/DashboardCompanyData';
import DashboardDataManagement from '../components/Dashboard/DashboardDataManagement';
import DashboardErrors from '../components/Dashboard/DashboardErrors';
import DashboardMessaging from '../components/Dashboard/DashboardMessaging';
import DashboardUserManagement from '../components/Dashboard/DashboardUserManagement';
import DashboardGenAi from '../components/Dashboard/DashboardGenAi';
import DashboardHRControls from '../components/Dashboard/DashboardHRControls';

import SingleUsersPage from '../components/cb_components/UsersPage/SingleUsersPage';
import UserProjectLayoutPage from '../components/cb_components/UsersPage/UserProjectLayoutPage';
import SingleUserChangePasswordPage from '../components/cb_components/UserChangePasswordPage/SingleUserChangePasswordPage';
import ChataiProjectLayoutPage from '../components/cb_components/ChatAiProjectLayout/ChataiProjectLayoutPage';
import PromptsUserLayoutPage from '../components/cb_components/ChatAiPromptsPage/UserLayoutPage';
import SinglePromptsPage from '../components/cb_components/ChatAiPromptsPage/SinglePromptsPage';
import ChatAiUsageLayoutPage from '../components/cb_components/ChatAiUsagePage/ChatAiUsageLayoutPage';

import Account from '../components/cb_components/Account/Account';
import SingleUserInvitesPage from '../components/cb_components/UserInvitesPage/SingleUserInvitesPage';
import UserInvitesProjectLayoutPage from '../components/cb_components/UserInvitesPage/UserInvitesProjectLayoutPage';
import SingleCompaniesPage from '../components/cb_components/CompaniesPage/SingleCompaniesPage';
import CompanyProjectLayoutPage from '../components/cb_components/CompaniesPage/CompanyProjectLayoutPage';
import SingleBranchesPage from '../components/cb_components/BranchesPage/SingleBranchesPage';
import BranchProjectLayoutPage from '../components/cb_components/BranchesPage/BranchProjectLayoutPage';
import SingleDepartmentsPage from '../components/cb_components/DepartmentsPage/SingleDepartmentsPage';
import DepartmentProjectLayoutPage from '../components/cb_components/DepartmentsPage/DepartmentProjectLayoutPage';
import SingleSectionsPage from '../components/cb_components/SectionsPage/SingleSectionsPage';
import SectionProjectLayoutPage from '../components/cb_components/SectionsPage/SectionProjectLayoutPage';
import SingleRolesPage from '../components/cb_components/RolesPage/SingleRolesPage';
import RoleProjectLayoutPage from '../components/cb_components/RolesPage/RoleProjectLayoutPage';
import SinglePositionsPage from '../components/cb_components/PositionsPage/SinglePositionsPage';
import PositionProjectLayoutPage from '../components/cb_components/PositionsPage/PositionProjectLayoutPage';
import SingleTemplatesPage from '../components/cb_components/TemplatesPage/SingleTemplatesPage';
import TemplateProjectLayoutPage from '../components/cb_components/TemplatesPage/TemplateProjectLayoutPage';
import SingleMailsPage from '../components/cb_components/MailsPage/SingleMailsPage';
import MailProjectLayoutPage from '../components/cb_components/MailsPage/MailProjectLayoutPage';
import SingleUserAddressesPage from '../components/cb_components/UserAddressesPage/SingleUserAddressesPage';
import UserAddressProjectLayoutPage from '../components/cb_components/UserAddressesPage/UserAddressProjectLayoutPage';
import SingleCompanyAddressesPage from '../components/cb_components/CompanyAddressesPage/SingleCompanyAddressesPage';
import CompanyAddressProjectLayoutPage from '../components/cb_components/CompanyAddressesPage/CompanyAddressProjectLayoutPage';
import SingleCompanyPhonesPage from '../components/cb_components/CompanyPhonesPage/SingleCompanyPhonesPage';
import CompanyPhoneProjectLayoutPage from '../components/cb_components/CompanyPhonesPage/CompanyPhoneProjectLayoutPage';
import SingleUserPhonesPage from '../components/cb_components/UserPhonesPage/SingleUserPhonesPage';
import UserPhoneProjectLayoutPage from '../components/cb_components/UserPhonesPage/UserPhoneProjectLayoutPage';
import StaffinfoProjectLayoutPage from '../components/cb_components/StaffinfoPage/StaffinfoProjectLayoutPage';
import SingleProfilesPage from '../components/cb_components/ProfilesPage/SingleProfilesPage';
import ProfileProjectLayoutPage from '../components/cb_components/ProfilesPage/ProfileProjectLayoutPage';
import SinglePermissionServicesPage from '../components/cb_components/PermissionServicesPage/SinglePermissionServicesPage';
import PermissionServiceProjectLayoutPage from '../components/cb_components/PermissionServicesPage/PermissionServiceProjectLayoutPage';
import SinglePermissionFieldsPage from '../components/cb_components/PermissionFieldsPage/SinglePermissionFieldsPage';
import PermissionFieldProjectLayoutPage from '../components/cb_components/PermissionFieldsPage/PermissionFieldProjectLayoutPage';
import SingleDynaLoaderPage from '../components/cb_components/DynaLoaderPage/SingleDynaLoaderPage';
import DynaLoaderProjectLayoutPage from '../components/cb_components/DynaLoaderPage/DynaLoaderProjectLayoutPage';
import DynaFieldsProjectLayoutPage from '../components/cb_components/DynaFieldsPage/DynaFieldsProjectLayoutPage';
import SingleStaffinfoPage from '../components/cb_components/StaffinfoPage/SingleStaffinfoPage';

import JobQueProjectLayoutPage from '../components/cb_components/JobQuesPage/JobQueProjectLayoutPage';
import SingleEmployeesPage from '../components/cb_components/EmployeesPage/SingleEmployeesPage';
import EmployeeProjectLayoutPage from '../components/cb_components/EmployeesPage/EmployeeProjectLayoutPage';
import SingleMailQuesPage from '../components/cb_components/MailQuesPage/SingleMailQuesPage';
import MailQueProjectLayoutPage from '../components/cb_components/MailQuesPage/MailQueProjectLayoutPage';
import SingleSuperiorPage from '../components/cb_components/SuperiorPage/SingleSuperiorPage';
import SuperiorProjectLayoutPage from '../components/cb_components/SuperiorPage/SuperiorProjectLayoutPage';

import SingleDepartmentAdminPage from '../components/cb_components/DepartmentAdminPage/SingleDepartmentAdminPage';
import DepartmentAdminProjectLayoutPage from '../components/cb_components/DepartmentAdminPage/DepartmentAdminProjectLayoutPage';
import SingleDepartmentHODPage from '../components/cb_components/DepartmentHODPage/SingleDepartmentHODPage';
import DepartmentHODProjectLayoutPage from '../components/cb_components/DepartmentHODPage/DepartmentHODProjectLayoutPage';
import SingleDepartmentHOSPage from '../components/cb_components/DepartmentHOSPage/SingleDepartmentHOSPage';
import DepartmentHOProjectLayoutPage from '../components/cb_components/DepartmentHOSPage/DepartmentHOProjectLayoutPage';
import SingleInboxPage from '../components/cb_components/InboxPage/SingleInboxPage';
import InboxProjectLayoutPage from '../components/cb_components/InboxPage/InboxProjectLayoutPage';
import SingleNotificationsPage from '../components/cb_components/NotificationsPage/SingleNotificationsPage';
import NotificationProjectLayoutPage from '../components/cb_components/NotificationsPage/NotificationProjectLayoutPage';

import SingleDocumentStoragesPage from '../components/cb_components/DocumentStoragesPage/SingleDocumentStoragesPage';
import DocumentStorageProjectLayoutPage from '../components/cb_components/DocumentStoragesPage/DocumentStorageProjectLayoutPage';
import SingleErrorLogsPage from '../components/cb_components/ErrorLogsPage/SingleErrorLogsPage';
import ErrorLogProjectLayoutPage from '../components/cb_components/ErrorLogsPage/ErrorLogProjectLayoutPage';

import SingleUserLoginPage from '../components/cb_components/UserLoginPage/SingleUserLoginPage';
import UserLoginProjectLayoutPage from '../components/cb_components/UserLoginPage/UserLoginProjectLayoutPage';
import UserChangePasswordProjectLayoutPage from '../components/cb_components/UserChangePasswordPage/UserChangePasswordProjectLayoutPage';
import TestProjectLayoutPage from '../components/cb_components/TestsPage/TestProjectLayoutPage';
import SingleTestsPage from '../components/cb_components/TestsPage/SingleTestsPage';

import SingleProjectsPage from "../components/app_components/ProjectsPage/SingleProjectsPage";
import ProjectProjectLayoutPage from "../components/app_components/ProjectsPage/ProjectProjectLayoutPage";
import SingleLocalePage from "../components/app_components/LocalePage/SingleLocalePage";
import LocaleProjectLayoutPage from "../components/app_components/LocalePage/LocaleProjectLayoutPage";
import SinglePasswordPolicyPage from "../components/app_components/PasswordPolicyPage/SinglePasswordPolicyPage";
import PasswordPolicyProjectLayoutPage from "../components/app_components/PasswordPolicyPage/PasswordPolicyProjectLayoutPage";
import SingleCloudProvidersPage from "../components/app_components/CloudProvidersPage/SingleCloudProvidersPage";
import CloudProviderProjectLayoutPage from "../components/app_components/CloudProvidersPage/CloudProviderProjectLayoutPage";
import SingleHighAvailabilityPage from "../components/app_components/HighAvailabilityPage/SingleHighAvailabilityPage";
import HighAvailabilityProjectLayoutPage from "../components/app_components/HighAvailabilityPage/HighAvailabilityProjectLayoutPage";
import SingleLoginPolicyPage from "../components/app_components/LoginPolicyPage/SingleLoginPolicyPage";
import LoginPolicyProjectLayoutPage from "../components/app_components/LoginPolicyPage/LoginPolicyProjectLayoutPage";
import SingleLoginTimePage from "../components/app_components/LoginTimePage/SingleLoginTimePage";
import LoginTimeProjectLayoutPage from "../components/app_components/LoginTimePage/LoginTimeProjectLayoutPage";
import SingleLoginBlockedPage from "../components/app_components/LoginBlockedPage/SingleLoginBlockedPage";
import LoginBlockedProjectLayoutPage from "../components/app_components/LoginBlockedPage/LoginBlockedProjectLayoutPage";
import SingleThemePage from "../components/app_components/ThemePage/SingleThemePage";
import ThemeProjectLayoutPage from "../components/app_components/ThemePage/ThemeProjectLayoutPage";
import SingleSharingPage from "../components/app_components/SharingPage/SingleSharingPage";
import SharingProjectLayoutPage from "../components/app_components/SharingPage/SharingProjectLayoutPage";
import SingleFigmaPage from "../components/app_components/FigmaPage/SingleFigmaPage";
import FigmaProjectLayoutPage from "../components/app_components/FigmaPage/FigmaProjectLayoutPage";
import SingleDomainsPage from "../components/app_components/DomainsPage/SingleDomainsPage";
import DomainProjectLayoutPage from "../components/app_components/DomainsPage/DomainProjectLayoutPage";
import SingleEnvironmentsPage from "../components/app_components/EnvironmentsPage/SingleEnvironmentsPage";
import EnvironmentProjectLayoutPage from "../components/app_components/EnvironmentsPage/EnvironmentProjectLayoutPage";
import SingleGitRepositoriesPage from "../components/app_components/GitRepositoriesPage/SingleGitRepositoriesPage";
import GitRepositoryProjectLayoutPage from "../components/app_components/GitRepositoriesPage/GitRepositoryProjectLayoutPage";
import SingleFirebasePage from "../components/app_components/FirebasePage/SingleFirebasePage";
import FirebaseProjectLayoutPage from "../components/app_components/FirebasePage/FirebaseProjectLayoutPage";
import SingleMobileAppPage from "../components/app_components/MobileAppPage/SingleMobileAppPage";
import MobileAppProjectLayoutPage from "../components/app_components/MobileAppPage/MobileAppProjectLayoutPage";
import SingleIOtAppPage from "../components/app_components/IOtAppPage/SingleIOtAppPage";
import IOtAppProjectLayoutPage from "../components/app_components/IOtAppPage/IOtAppProjectLayoutPage";
import SingleBackendAppsPage from "../components/app_components/BackendAppsPage/SingleBackendAppsPage";
import BackendAppProjectLayoutPage from "../components/app_components/BackendAppsPage/BackendAppProjectLayoutPage";
import SingleFrontendAppsPage from "../components/app_components/FrontendAppsPage/SingleFrontendAppsPage";
import FrontendAppProjectLayoutPage from "../components/app_components/FrontendAppsPage/FrontendAppProjectLayoutPage";
import SingleDisasterRecoveryPage from "../components/app_components/DisasterRecoveryPage/SingleDisasterRecoveryPage";
import DisasterRecoveryProjectLayoutPage from "../components/app_components/DisasterRecoveryPage/DisasterRecoveryProjectLayoutPage";
import SingleDatabaseAppsPage from "../components/app_components/DatabaseAppsPage/SingleDatabaseAppsPage";
import DatabaseAppProjectLayoutPage from "../components/app_components/DatabaseAppsPage/DatabaseAppProjectLayoutPage";
import SingleGenAiAppPage from "../components/app_components/GenAiAppPage/SingleGenAiAppPage";
import GenAiAppProjectLayoutPage from "../components/app_components/GenAiAppPage/GenAiAppProjectLayoutPage";
import SinglePagesPage from "../components/app_components/PagesPage/SinglePagesPage";
import PageProjectLayoutPage from "../components/app_components/PagesPage/PageProjectLayoutPage";
import SingleCartsPage from "../components/app_components/CartsPage/SingleCartsPage";
import CartProjectLayoutPage from "../components/app_components/CartsPage/CartProjectLayoutPage";
import SingleApisPage from "../components/app_components/ApisPage/SingleApisPage";
import ApiProjectLayoutPage from "../components/app_components/ApisPage/ApiProjectLayoutPage";
import SingleWorkflowsPage from "../components/app_components/WorkflowsPage/SingleWorkflowsPage";
import WorkflowProjectLayoutPage from "../components/app_components/WorkflowsPage/WorkflowProjectLayoutPage";
//  ~cb-add-import~

const MyRouter = (props) => {
    return (
        <Routes>
            <Route path="/" exact element={props.isLoggedIn ? <DashboardAdminControl /> : <LoginPage />} />
            <Route path="/login" exact element={props.isLoggedIn === true ? <DashboardAdminControl /> : <LoginPage />} />
            <Route path="/reset/:singleChangeForgotPasswordId" exact element={<ResetPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            <Route path="/maintenance" exact element={<MaintenancePage />} />
            <Route path="/login-faq" exact element={<LoginFaqPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/project" exact element={<DashboardAdminControl />} />
                // user details
                <Route path="/account" exact element={<Account />} />
                <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                <Route path="/users" exact element={<UserProjectLayoutPage />} />
                // myapp
<Route path="/projects/:singleProjectsId" exact element={<SingleProjectsPage />} />
<Route path="/projects" exact element={<ProjectProjectLayoutPage />} />
<Route path="/locale/:singleLocaleId" exact element={<SingleLocalePage />} />
<Route path="/locale" exact element={<LocaleProjectLayoutPage />} />
<Route path="/passwordPolicy/:singlePasswordPolicyId" exact element={<SinglePasswordPolicyPage />} />
<Route path="/passwordPolicy" exact element={<PasswordPolicyProjectLayoutPage />} />
<Route path="/cloudProviders/:singleCloudProvidersId" exact element={<SingleCloudProvidersPage />} />
<Route path="/cloudProviders" exact element={<CloudProviderProjectLayoutPage />} />
<Route path="/highAvailability/:singleHighAvailabilityId" exact element={<SingleHighAvailabilityPage />} />
<Route path="/highAvailability" exact element={<HighAvailabilityProjectLayoutPage />} />
<Route path="/loginPolicy/:singleLoginPolicyId" exact element={<SingleLoginPolicyPage />} />
<Route path="/loginPolicy" exact element={<LoginPolicyProjectLayoutPage />} />
<Route path="/loginTime/:singleLoginTimeId" exact element={<SingleLoginTimePage />} />
<Route path="/loginTime" exact element={<LoginTimeProjectLayoutPage />} />
<Route path="/loginBlocked/:singleLoginBlockedId" exact element={<SingleLoginBlockedPage />} />
<Route path="/loginBlocked" exact element={<LoginBlockedProjectLayoutPage />} />
<Route path="/theme/:singleThemeId" exact element={<SingleThemePage />} />
<Route path="/theme" exact element={<ThemeProjectLayoutPage />} />
<Route path="/sharing/:singleSharingId" exact element={<SingleSharingPage />} />
<Route path="/sharing" exact element={<SharingProjectLayoutPage />} />
<Route path="/figma/:singleFigmaId" exact element={<SingleFigmaPage />} />
<Route path="/figma" exact element={<FigmaProjectLayoutPage />} />
<Route path="/domains/:singleDomainsId" exact element={<SingleDomainsPage />} />
<Route path="/domains" exact element={<DomainProjectLayoutPage />} />
<Route path="/environments/:singleEnvironmentsId" exact element={<SingleEnvironmentsPage />} />
<Route path="/environments" exact element={<EnvironmentProjectLayoutPage />} />
<Route path="/gitRepositories/:singleGitRepositoriesId" exact element={<SingleGitRepositoriesPage />} />
<Route path="/gitRepositories" exact element={<GitRepositoryProjectLayoutPage />} />
<Route path="/firebase/:singleFirebaseId" exact element={<SingleFirebasePage />} />
<Route path="/firebase" exact element={<FirebaseProjectLayoutPage />} />
<Route path="/mobileApp/:singleMobileAppId" exact element={<SingleMobileAppPage />} />
<Route path="/mobileApp" exact element={<MobileAppProjectLayoutPage />} />
<Route path="/iOtApp/:singleIOtAppId" exact element={<SingleIOtAppPage />} />
<Route path="/iOtApp" exact element={<IOtAppProjectLayoutPage />} />
<Route path="/backendApps/:singleBackendAppsId" exact element={<SingleBackendAppsPage />} />
<Route path="/backendApps" exact element={<BackendAppProjectLayoutPage />} />
<Route path="/frontendApps/:singleFrontendAppsId" exact element={<SingleFrontendAppsPage />} />
<Route path="/frontendApps" exact element={<FrontendAppProjectLayoutPage />} />
<Route path="/disasterRecovery/:singleDisasterRecoveryId" exact element={<SingleDisasterRecoveryPage />} />
<Route path="/disasterRecovery" exact element={<DisasterRecoveryProjectLayoutPage />} />
<Route path="/databaseApps/:singleDatabaseAppsId" exact element={<SingleDatabaseAppsPage />} />
<Route path="/databaseApps" exact element={<DatabaseAppProjectLayoutPage />} />
<Route path="/genAiApp/:singleGenAiAppId" exact element={<SingleGenAiAppPage />} />
<Route path="/genAiApp" exact element={<GenAiAppProjectLayoutPage />} />
<Route path="/pages/:singlePagesId" exact element={<SinglePagesPage />} />
<Route path="/pages" exact element={<PageProjectLayoutPage />} />
<Route path="/carts/:singleCartsId" exact element={<SingleCartsPage />} />
<Route path="/carts" exact element={<CartProjectLayoutPage />} />
<Route path="/apis/:singleApisId" exact element={<SingleApisPage />} />
<Route path="/apis" exact element={<ApiProjectLayoutPage />} />
<Route path="/workflows/:singleWorkflowsId" exact element={<SingleWorkflowsPage />} />
<Route path="/workflows" exact element={<WorkflowProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
                // dashboards
                {/* <Route path="/dashboard" exact element={<Dashboard />} /> */}
                <Route path="/DashboardAdminControl" exact element={<DashboardAdminControl />} />
                <Route path="/DashboardCompanyData" exact element={<DashboardCompanyData />} />
                <Route path="/DashboardDataManagement" exact element={<DashboardDataManagement />} />
                <Route path="/DashboardErrors" exact element={<DashboardErrors />} />
                <Route path="/DashboardGenAi" exact element={<DashboardGenAi />} />
                <Route path="/DashboardHRControls" exact element={<DashboardHRControls />} />
                <Route path="/DashboardMessaging" exact element={<DashboardMessaging />} />
                <Route path="/DashboardUserManagement" exact element={<DashboardUserManagement />} />
                // user details
                <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                <Route path="/users" exact element={<UserProjectLayoutPage />} />
                <Route path="/userInvites/:singleUserInvitesId" exact element={<SingleUserInvitesPage />} />
                <Route path="/userInvites" exact element={<UserInvitesProjectLayoutPage />} />
                <Route path="/userLogin/:singleUserLoginId" exact element={<SingleUserLoginPage />} />
                <Route path="/userLogin" exact element={<UserLoginProjectLayoutPage />} />
                <Route path="/userAddresses/:singleUserAddressesId" exact element={<SingleUserAddressesPage />} />
                <Route path="/userAddresses" exact element={<UserAddressProjectLayoutPage />} />
                <Route path="/userPhones/:singleUserPhonesId" exact element={<SingleUserPhonesPage />} />
                <Route path="/userPhones" exact element={<UserPhoneProjectLayoutPage />} />
                <Route path="/userChangePassword/:singleUserChangePasswordId" exact element={<SingleUserChangePasswordPage />} />
                <Route path="/userChangePassword" exact element={<UserChangePasswordProjectLayoutPage />} />
                // user management
                <Route path="/roles/:singleRolesId" exact element={<SingleRolesPage />} />
                <Route path="/roles" exact element={<RoleProjectLayoutPage />} />
                <Route path="/positions/:singlePositionsId" exact element={<SinglePositionsPage />} />
                <Route path="/positions" exact element={<PositionProjectLayoutPage />} />
                <Route path="/profiles/:singleProfilesId" exact element={<SingleProfilesPage />} />
                <Route path="/profiles" exact element={<ProfileProjectLayoutPage />} />
                // company data
                <Route path="/companies/:singleCompaniesId" exact element={<SingleCompaniesPage />} />
                <Route path="/companies" exact element={<CompanyProjectLayoutPage />} />
                <Route path="/branches/:singleBranchesId" exact element={<SingleBranchesPage />} />
                <Route path="/branches" exact element={<BranchProjectLayoutPage />} />
                <Route path="/departments/:singleDepartmentsId" exact element={<SingleDepartmentsPage />} />
                <Route path="/departments" exact element={<DepartmentProjectLayoutPage />} />
                <Route path="/sections/:singleSectionsId" exact element={<SingleSectionsPage />} />
                <Route path="/sections" exact element={<SectionProjectLayoutPage />} />
                <Route path="/companyAddresses/:singleCompanyAddressesId" exact element={<SingleCompanyAddressesPage />} />
                <Route path="/companyAddresses" exact element={<CompanyAddressProjectLayoutPage />} />
                <Route path="/companyPhones/:singleCompanyPhonesId" exact element={<SingleCompanyPhonesPage />} />
                <Route path="/companyPhones" exact element={<CompanyPhoneProjectLayoutPage />} />
                // admin controls
                <Route path="/permissionServices/:singlePermissionServicesId" exact element={<SinglePermissionServicesPage />} />
                <Route path="/permissionServices" exact element={<PermissionServiceProjectLayoutPage />} />
                <Route path="/permissionFields/:singlePermissionFieldsId" exact element={<SinglePermissionFieldsPage />} />
                <Route path="/permissionFields" exact element={<PermissionFieldProjectLayoutPage />} />
                <Route path="/superior/:singleSuperiorId" exact element={<SingleSuperiorPage />} />
                <Route path="/superior" exact element={<SuperiorProjectLayoutPage />} />
                <Route path="/departmentAdmin/:singleDepartmentAdminId" exact element={<SingleDepartmentAdminPage />} />
                <Route path="/departmentAdmin" exact element={<DepartmentAdminProjectLayoutPage />} />
                <Route path="/departmentHOD/:singleDepartmentHODId" exact element={<SingleDepartmentHODPage />} />
                <Route path="/departmentHOD" exact element={<DepartmentHODProjectLayoutPage />} />
                <Route path="/departmentHOS/:singleDepartmentHOSId" exact element={<SingleDepartmentHOSPage />} />
                <Route path="/departmentHOS" exact element={<DepartmentHOProjectLayoutPage />} />
                <Route path="/employees/:singleEmployeesId" exact element={<SingleEmployeesPage />} />
                <Route path="/employees" exact element={<EmployeeProjectLayoutPage />} />
                <Route path="/staffinfo/:singleStaffinfoId" exact element={<SingleStaffinfoPage />} />
                <Route path="/staffinfo" exact element={<StaffinfoProjectLayoutPage />} />
                <Route path="/tests/:singleTestsId" exact element={<SingleTestsPage />} />
                <Route path="/tests" exact element={<TestProjectLayoutPage />} />
                // notifications and messaging
                <Route path="/notifications/:singleNotificationsId" exact element={<SingleNotificationsPage />} />
                <Route path="/notifications" exact element={<NotificationProjectLayoutPage />} />
                <Route path="/inbox/:singleInboxId" exact element={<SingleInboxPage />} />
                <Route path="/inbox" exact element={<InboxProjectLayoutPage />} />
                <Route path="/templates/:singleTemplatesId" exact element={<SingleTemplatesPage />} />
                <Route path="/templates" exact element={<TemplateProjectLayoutPage />} />
                <Route path="/mails/:singleMailsId" exact element={<SingleMailsPage />} />
                <Route path="/mails" exact element={<MailProjectLayoutPage />} />
                // document storage
                <Route path="/documentStorages/:singleDocumentStoragesId" exact element={<SingleDocumentStoragesPage />} />
                <Route path="/documentStorages" exact element={<DocumentStorageProjectLayoutPage />} />
                // data loader
                <Route path="/dynaLoader/:singleDynaLoaderId" exact element={<SingleDynaLoaderPage />} />
                <Route path="/dynaLoader" exact element={<DynaLoaderProjectLayoutPage />} />
                <Route path="/dynaFields" exact element={<DynaFieldsProjectLayoutPage />} />
                // jobs and ques
                <Route path="/jobQues" exact element={<JobQueProjectLayoutPage />} />
                <Route path="/mailQues/:singleMailQuesId" exact element={<SingleMailQuesPage />} />
                <Route path="/mailQues" exact element={<MailQueProjectLayoutPage />} />
                // gen ai
                <Route path="/chataiProject" element={<ChataiProjectLayoutPage />} />
                <Route path="/chataiProject/:promptId" element={<ChataiProjectLayoutPage />} />
                <Route path="/prompts" exact element={<PromptsUserLayoutPage />} />
                <Route path="/prompts/:singlePromptsId" exact element={<SinglePromptsPage />} />
                <Route path="/chataiUsage" exact element={<ChatAiUsageLayoutPage />} />
                // bugs and errors
                <Route path="/errorLogs/:singleErrorLogsId" exact element={<SingleErrorLogsPage />} />
                <Route path="/errorLogs" exact element={<ErrorLogProjectLayoutPage />} />
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(MyRouter);
