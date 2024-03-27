import { createTheme } from '@mui/material';

export const theme = createTheme( {
    typography: {
        allVariants: {
            fontFamily: 'Open Sans'
        }
    }
    , components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '.5em'
                }
            }
        }
    }
} );
