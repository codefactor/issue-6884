import "@ui5/webcomponents/dist/Dialog";
import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope";
setCustomElementsScopingSuffix("demo");
const dialog = document.createElement('ui5-dialog-demo');
dialog.innerHTML = "Press Escape To Close This Dialog (which closes the dialog underneath as well!)";
document.body.appendChild(dialog);
window.openInnerDialog = () => {
  dialog.show();
};
