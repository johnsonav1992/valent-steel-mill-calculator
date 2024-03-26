import {
    Paper
    , Stack
    , Typography
} from '@mui/material';
import InputForm from './components/InputForm/InputForm';
import { createFormStore } from 'formularity';
import { SteelSpecFormValues } from './types/types';

const initialValues = {
    carbon: null
    , chromium: null
    , iron: null
    , manganese: null
    , molybdenum: null
    , nickel: null
    , nitrogen: null
    , phosphorus: null
    , silicon: null
    , sulfur: null
};

export const initialSpecFormStore = createFormStore<SteelSpecFormValues>( { initialValues } );
export const finalSpecFormStore = createFormStore<SteelSpecFormValues>( { initialValues } );

function App () {

    return (
        <Stack
            width='100%'
            height='100vh'
            alignItems='center'
            justifyContent='center'
        >
            <Stack
                component={ Paper }
                elevation={ 3 }
                sx={ {
                    width: '500px'
                    , p: '2rem'
                } }
            >
                <Stack
                    direction='row'
                    gap='1rem'
                >
                    <Stack gap='1rem'>
                        <Typography variant='h6'>
                            Initial Specifications
                        </Typography>
                        <InputForm formStore={ initialSpecFormStore } />
                    </Stack>
                    <Stack gap='1rem'>
                        <Typography variant='h6'>
                            Final Specifications
                        </Typography>
                        <InputForm formStore={ finalSpecFormStore } />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default App;
