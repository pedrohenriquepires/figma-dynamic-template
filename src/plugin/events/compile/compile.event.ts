import { once } from "@create-figma-plugin/utilities";
import { compileAction } from "./compile.action";
import { CompileHandler } from "./compile.types";

export const setupCompileEventListener = () => once<CompileHandler>('COMPILE', compileAction)