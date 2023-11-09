import { theme } from '~/app/core/Theme';

declare module 'styled-components' {
  export type AppTheme = typeof theme
  export interface DefaultTheme extends AppTheme {}
}