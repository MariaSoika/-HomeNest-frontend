import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        verified: Palette['primary'];
        waiting: Palette['primary'];
        sale: Palette['primary'];
        rent: Palette['primary'];
    }
    interface PaletteOptions {
        verified?: PaletteOptions['primary'];
        waiting?: PaletteOptions['primary'];
        sale?: PaletteOptions['primary'];
        rent?: PaletteOptions['primary'];
    }
}

const theme = createTheme({
    palette: {
        verified: {
            main: '#ffffff',
            contrastText: '#000000',
        },
        waiting: {
            main: '#ffffff',
            contrastText: '#ff0000',
        },
        sale:{
            main: '#ffffff',
            contrastText: '#000000',
        },
        rent:{
            main: '#ffffff',
            contrastText: '#ff0000',
        }
    },
});

export default theme;


// import { createTheme } from '@mui/material/styles';
//
// const theme = createTheme({
//     palette: {
//         verified: {
//             main: '#4CAF50',
//             contrastText: '#fff',
//         },
//         waiting: {
//             main: '#FF9800',
//             contrastText: '#fff',
//         },
//     },
// });

// export default theme;
// const theme = createTheme({
//     palette: {
//         secondary: {
//             main: '#000000',
//             contrastText: '#fff',
//         },
//         primary: {
//             main: '#ff0000',
//             contrastText: '#fff',
//         },
//         success: {
//             main: '#ffffff',
//             contrastText: '#000000',
//         },
//     },
// });


// import { createTheme} from '@mui/material/styles';
//
// const theme = createTheme({
//     components: {
//         MuiChip: {
//             variants: [
//                 {
//                     props: { color: 'white' },
//                     style: {
//                         backgroundColor: '#fff',
//                         color: '#000',
//                         '.MuiChip-icon': {
//                             color: '#000',
//                         },
//                         '.MuiChip-label': {
//                             color: '#000',
//                         },
//                     },
//                 },
//                 {
//                     props: { color: 'black' },
//                     style: {
//                         backgroundColor: '#000',
//                         color: '#fff',
//                         '.MuiChip-icon': {
//                             color: '#fff',
//                         },
//                         '.MuiChip-label': {
//                             color: '#fff',
//                         },
//                     },
//                 },
//             ],
//         },
//     },
// });

// import {styled} from "@mui/joy";
// import {Chip} from "@mui/material";
//
// export default styled(Chip)({theme})
