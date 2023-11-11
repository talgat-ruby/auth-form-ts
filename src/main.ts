import "./style.css";
import { SignIn, SignUp } from "./views/page/";
import controller from "./utils/abortController.ts";

const signInPage = new SignIn();
const signUpPage = new SignUp();

window.addEventListener("load", handleLoad, { once: true });
window.addEventListener("unload", handleUnload, { once: true });

function handleLoad() {
  gotoSignIn();
}

function gotoSignIn() {
  document.body.replaceChildren(signInPage.render({ gotoSignUp }));
}

function gotoSignUp() {
  document.body.replaceChildren(signUpPage.render({ gotoSignIn }));
}

function handleUnload() {
  controller.abort();
}
