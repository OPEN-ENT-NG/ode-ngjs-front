import angular from "angular";
import { NGJS_MODULE } from ".";
import { DominoFolder, DominoItem, Explorer, SidebarFolder, Modal, ResourceList, SharePanel, Sidebar, Toaster, PropsPanel } from "../directives";
import { NotifyService } from "../services";

/**
 * The "odeExplorerModule" angularjs module is an all-in-one resources exploration toolkit.
 */
 angular.module(NGJS_MODULE.EXPLORER, [])
.directive("odeExplorer", Explorer.DirectiveFactory)
.directive("odeSidebar", Sidebar.DirectiveFactory)
.directive("odeSidebarFolder", SidebarFolder.DirectiveFactory)
.directive("odeResourceList", ResourceList.DirectiveFactory)
.directive("odeDominoFolder", DominoFolder.DirectiveFactory)
.directive("odeDominoItem", DominoItem.DirectiveFactory)
.directive("odeToaster", Toaster.DirectiveFactory)
.directive("odeModal", Modal.DirectiveFactory)
.directive("odePropsPanel", PropsPanel.DirectiveFactory)
.directive("odeSharePanel", SharePanel.DirectiveFactory)

.service("odeNotify", NotifyService)
;
