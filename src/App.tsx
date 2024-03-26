import {
    Paper
    , Stack
} from '@mui/material';
import InputForm from './components/InputForm/InputForm';
import { createFormStore } from 'formularity';

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

export const formStore = createFormStore( { initialValues } );

function App () {

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
                    <InputForm />
                </Stack>
            </Stack>
        </Stack>
    );
}

export default App;
