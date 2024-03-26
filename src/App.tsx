import {
    Paper
    , Stack
} from '@mui/material';
import InputForm from './components/InputForm/InputForm';
import { createFormStore } from 'formularity';
import {
    SteelSpecFormValues
    , WeightsOutput
} from './types/types';
import { useState } from 'react';

const initialValues = {
    initialTotalWeight: null
    , initialSpec: {
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
    }
    , finalSpec: {
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
    }
};

export const formStore = createFormStore<SteelSpecFormValues>( { initialValues } );

function App () {
    const [ result, setResult ] = useState<WeightsOutput | null>( null );

    return (
        <Stack
            width='100%'
            alignItems='center'
            justifyContent='center'
            p='2rem'
        >
            <Stack
                component={ Paper }
                elevation={ 3 }
                sx={ {
                    p: '2rem'
                } }
            >
                <Stack
                    direction='row'
                    gap='1rem'
                >
                    <InputForm setResult={ setResult } />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default App;
