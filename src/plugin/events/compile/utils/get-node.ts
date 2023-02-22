import { TemplateType } from "~/@types/selection";

export const getNode = (template: TemplateType) => template.type === 'COMPONENT' ? template.createInstance() : template.clone()
