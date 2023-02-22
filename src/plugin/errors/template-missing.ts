export class TemplateMissingError extends Error {
  constructor() {
    super('Template is missing')
  }
}