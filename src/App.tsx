import {
    Chip
    , Paper
    , Stack
} from '@mui/material';
import InputForm from './components/InputForm/InputForm';
import {
    createFormStore
    , useFormularity
} from 'formularity';
import {
    SteelSpecFormValues
    , WeightsOutput
} from './types/types';
import { useState } from 'react';
import ResultsView from './components/ResultsView/ResultsView';
import WarningModal from './components/WarningModal/WarningModal';
import { generateDummyData } from './data/generateDummyData';

const initialValues = {
    initialTotalWeight: ''
    , initialSpec: {
        carbon: ''
        , chromium: ''
        , iron: ''
        , manganese: ''
        , molybdenum: ''
        , nickel: ''
        , nitrogen: ''
        , phosphorus: ''
        , silicon: ''
        , sulfur: ''
    }
    , finalSpec: {
        carbon: ''
        , chromium: ''
        , iron: ''
        , manganese: ''
        , molybdenum: ''
        , nickel: ''
        , nitrogen: ''
        , phosphorus: ''
        , silicon: ''
        , sulfur: ''
    }
};

export const formStore = createFormStore<SteelSpecFormValues>( {
    initialValues
} );

function App () {
    const [ result, setResult ] = useState<WeightsOutput | null>( null );
    const [ warningMessage, setWarningMessage ] = useState( '' );
    const [ isWarningModalOpen, setIsWarningModalOpen ] = useState( !!warningMessage );

    const { resetForm } = useFormularity( { formStore } );

    return (
        <>
            <Stack
                width='100%'
                height='100vh'
                alignItems='center'
                justifyContent='center'
                bgcolor={ theme => theme.palette.grey[ 200 ] }
                p='2rem'
            >
                <Stack
                    component={ Paper }
                    elevation={ 5 }
                    sx={ {
                        p: '2rem'
                        , pb: result ? '1rem' : undefined
                        , position: 'relative'
                    } }
                >
                    {
                        !result
                        && (
                            <Chip
                                label='Generate Data'
                                sx={ {
                                    position: 'absolute'
                                    , top: '1rem'
                                    , right: '2rem'
                                } }
                                clickable
                                onClick={ () => {
                                    const dummyData = generateDummyData();
                                    resetForm( {
                                        initialTotalWeight: 1000
                                        , initialSpec: dummyData.initialSpec
                                        , finalSpec: dummyData.finalSpec
                                    } );
                                } }
                            />
                        )
                    }
                    <Stack
                        direction='row'
                        gap='1rem'
                    >
                        {
                            result
                                ? (
                                    <ResultsView
                                        result={ result }
                                        setResult={ setResult }
                                    />
                                )
                                : (
                                    <InputForm
                                        setResult={ setResult }
                                        setWarningMessage={ setWarningMessage }
                                        setIsWarningModalOpen={ setIsWarningModalOpen }
                                    />
                                )
                        }
                    </Stack>
                </Stack>
            </Stack>
            <WarningModal
                open={ isWarningModalOpen }
                closeHandler={ () => {
                    setIsWarningModalOpen( false );
                    setTimeout( () => setWarningMessage( '' ), 200 );
                } }
                message={ warningMessage }
                keepMounted={ false }
            />
        </>
    );
}

export default App;
