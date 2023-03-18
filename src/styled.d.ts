// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      barlow: string;
      'barlow-condensed': string;
      bellefair: string;
    }

    colors: {
      primary: string;
      light: string;
      dark: string;
    };
  }
}