import { Role } from "testcafe";
import LoginPage from "../pages/LoginPage";
import { URLS, CREDENTIALS } from "./const";
 
export const standarUser = Role(URLS.LOGIN_URL, async t => {
  await LoginPage.logInAction(CREDENTIALS.VALID_USER.STANDAR_USERNAME, CREDENTIALS.VALID_USER.PASSWORD);
  
},
{ preserveUrl: true })

export const lockedOutUser = Role(URLS.LOGIN_URL, async t => {
  await LoginPage.logInAction(CREDENTIALS.VALID_USER.LOCKED_OUT_USER, CREDENTIALS.VALID_USER.PASSWORD);
  
},
{ preserveUrl: true })

export const problemUser = Role(URLS.LOGIN_URL, async t => {
  await LoginPage.logInAction(CREDENTIALS.VALID_USER.PROBLEM_USER, CREDENTIALS.VALID_USER.PASSWORD);
  
},
{ preserveUrl: true })

export const performaceGlitchUser = Role(URLS.LOGIN_URL, async t => {
  await LoginPage.logInAction(CREDENTIALS.VALID_USER.PERFORMANCE_GLITCH_USER, CREDENTIALS.VALID_USER.PASSWORD);
  
},
{ preserveUrl: true })