import { once } from "@create-figma-plugin/utilities";
import { NotifyHandler } from "./notify.types";

export const setupNotifyEventListener = () => once<NotifyHandler>('NOTIFY', figma.notify)