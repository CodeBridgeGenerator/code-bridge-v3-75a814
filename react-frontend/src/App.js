import React from 'react';
import { useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyRouter from './MyRouter/MyRouter';
import store from './utils/store';
import { AppConfigStatic } from './AppConfigStatic';
import AppTopbar from './components/Layouts/AppTopbar';
import AppFooter from './components/Layouts/AppFooter';
import MainLayout from './components/Layouts/MainLayout';
import LoadingWrapper from './MyRouter/wrappers/LoadingWrapper';
import ToastWrapper from './MyRouter/wrappers/ToastWrapper';
import StartupWrapper from './MyRouter/wrappers/StartupWrapper';
import ProjectSideBarLayout from "./components/Layouts/ProjectSideBarLayout";

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/layout/layout.scss';
import './assets/mainTheme/mainTheme.css';
import './css/customStyles.css';

const App = () => {
    const location = useLocation();
    const excludeLocations = ["/settings", "/account"];
    const showSideMenuButton = false;

    return (
        <Provider store={store}>
            <AppTopbar showSideMenuButton={showSideMenuButton} />
            <MainLayout>
        <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
          {!excludeLocations.includes(location.pathname) && (
            <ProjectSideBarLayout />
          )}
          <div className="flex-1 ml-2" style={{ overflowX: "auto" }}>
            {" "}
            <MyRouter />
          </div>
        </div>
      </MainLayout>

            <LoadingWrapper />
            <ToastWrapper />
            <StartupWrapper />

            <AppConfigStatic rippleEffect={true} inputStyle={'outlined'} layoutMode={'static'} layoutColorMode={'light'} />
        </Provider>
    );
};

export default App;
