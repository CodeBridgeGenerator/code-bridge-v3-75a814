// company data
const companies = require('./companies/companies.service.js');
const branches = require('./branches/branches.service.js');
const departments = require('./departments/departments.service.js');
const sections = require('./sections/sections.service.js');
const companyAddresses = require('./companyAddresses/companyAddresses.service.js');
const companyPhones = require('./companyPhones/companyPhones.service.js');

// User data
const roles = require('./roles/roles.service.js');
const profiles = require('./profiles/profiles.service.js');
const positions = require('./positions/positions.service.js');
const permissionServices = require('./permissionServices/permissionServices.service.js');
const permissionFields = require('./permissionFields/permissionFields.service.js');
const userChangePassword = require('./userChangePassword/userChangePassword.service.js');
const userAddresses = require('./userAddresses/userAddresses.service.js');
const userPhones = require('./userPhones/userPhones.service.js');
const userInvites = require('./userInvites/userInvites.service.js');
const users = require('./users/users.service.js');
const loginHistory = require('./loginHistory/loginHistory.service.js');

// mail que and templates
const mailQues = require('./mailQues/mailQues.service.js');
const mails = require('./mails/mails.service.js');
const templates = require('./templates/templates.service.js');
const mailWH = require('./mailWH/mailWH.service.js');

// dynaloader
const dynaLoader = require('./dynaLoader/dynaLoader.service.js');
const dynaFields = require('./dynaFields/dynaFields.service.js');
const jobQues = require('./jobQues/jobQues.service.js');

// gen ai
const prompts = require('./prompts/prompts.service.js');
const config = require('./config/config.service.js');
const chatai = require('./chatai/chatai.service.js');

// documents and guides
const documentStorages = require('./documentStorages/documentStorages.service.js');
const userGuide = require('./userGuide/userGuide.service.js');
const steps = require('./steps/steps.service.js');

// messaging
const inbox = require('./inbox/inbox.service.js');
const notifications = require('./notifications/notifications.service.js');
const comments = require('./comments/comments.service.js');

// errors and bugs
const errorLogs = require('./errorLogs/errorLogs.service.js');
const errorsWH = require('./errorsWH/errorsWH.service.js');

// audit update, delete
const audits = require('./audits/audits.service.js');

// data loader for all services
const uploader = require('./uploader/uploader.service.js');
const fcmQues = require('./fcmQues/fcmQues.service.js');
const fcm = require('./fcm/fcm.service.js');

const projects = require("./projects/projects.service.js");
const locale = require("./locale/locale.service.js");
const passwordPolicy = require("./passwordPolicy/passwordPolicy.service.js");
const cloudProviders = require("./cloudProviders/cloudProviders.service.js");
const highAvailability = require("./highAvailability/highAvailability.service.js");
const loginPolicy = require("./loginPolicy/loginPolicy.service.js");
const loginTime = require("./loginTime/loginTime.service.js");
const loginBlocked = require("./loginBlocked/loginBlocked.service.js");
const theme = require("./theme/theme.service.js");
const sharing = require("./sharing/sharing.service.js");
const figma = require("./figma/figma.service.js");
const domains = require("./domains/domains.service.js");
const environments = require("./environments/environments.service.js");
const gitRepositories = require("./gitRepositories/gitRepositories.service.js");
const firebase = require("./firebase/firebase.service.js");
const mobileApp = require("./mobileApp/mobileApp.service.js");
const iOtApp = require("./iOtApp/iOtApp.service.js");
const backendApps = require("./backendApps/backendApps.service.js");
const frontendApps = require("./frontendApps/frontendApps.service.js");
const disasterRecovery = require("./disasterRecovery/disasterRecovery.service.js");
const databaseApps = require("./databaseApps/databaseApps.service.js");
const genAiApp = require("./genAiApp/genAiApp.service.js");
const pages = require("./pages/pages.service.js");
const carts = require("./carts/carts.service.js");
const apis = require("./apis/apis.service.js");
const workflows = require("./workflows/workflows.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
    app.configure(companies);
    app.configure(branches);
    app.configure(departments);
    app.configure(sections);
    app.configure(roles);
    app.configure(positions);
    app.configure(profiles);
    app.configure(templates);
    app.configure(mails);
    app.configure(permissionServices);
    app.configure(permissionFields);
    app.configure(userAddresses);
    app.configure(companyAddresses);
    app.configure(companyPhones);
    app.configure(userPhones);
    app.configure(userInvites);
    app.configure(dynaLoader);
    app.configure(dynaFields);
    app.configure(mailQues);
    app.configure(jobQues);
    // gen ai
    app.configure(prompts);
    app.configure(config);
    app.configure(chatai);
    app.configure(mailWH);
    app.configure(inbox);
    app.configure(notifications);
    app.configure(documentStorages);
    app.configure(errorLogs);
    app.configure(errorsWH);
    app.configure(userChangePassword);
    app.configure(userGuide);
    app.configure(steps);
    app.configure(audits);
    app.configure(uploader);
    app.configure(comments);
    app.configure(loginHistory);
    app.configure(fcmQues);
    app.configure(fcm);

  app.configure(projects);
  app.configure(locale);
  app.configure(passwordPolicy);
  app.configure(cloudProviders);
  app.configure(highAvailability);
  app.configure(loginPolicy);
  app.configure(loginTime);
  app.configure(loginBlocked);
  app.configure(theme);
  app.configure(sharing);
  app.configure(figma);
  app.configure(domains);
  app.configure(environments);
  app.configure(gitRepositories);
  app.configure(firebase);
  app.configure(mobileApp);
  app.configure(iOtApp);
  app.configure(backendApps);
  app.configure(frontendApps);
  app.configure(disasterRecovery);
  app.configure(databaseApps);
  app.configure(genAiApp);
  app.configure(pages);
  app.configure(carts);
  app.configure(apis);
  app.configure(workflows);
    // ~cb-add-configure-service-name~
};
