import { Formularity } from 'formularity';
import {
    SteelElement
    , SteelSpecFormValues
    , WeightsOutput
} from '../../types/types';
import {
    Button
    , Stack
    , TextField
    , Typography
    , capitalize
} from '@mui/material';
import { formStore } from '../../App';
import {
    calculateWeightIncreases
    , convertSpecPercentages
} from '../../utils/utils';
import {
    Dispatch
    , SetStateAction
} from 'react';

type Props = {
    setResult: Dispatch<SetStateAction<WeightsOutput | null>>;
    setWarningMessage: Dispatch<SetStateAction<string>>;
    setIsWarningModalOpen: Dispatch<SetStateAction<boolean>>;
};

const InputForm = ( {
    setResult
    , setWarningMessage
    , setIsWarningModalOpen
}: Props ) => {

    const openWarningModal = ( message: string ) => {
        setWarningMessage( message );
        setIsWarningModalOpen( true );
    };

    const handleSubmit = ( values: SteelSpecFormValues ) => {
        const isMissingAnyValue
                    = Object.entries( values.initialSpec ).some( ( [ , value ] ) => !value || Number( value ) < 0 )
                    || Object.entries( values.finalSpec ).some( ( [ , value ] ) => !value || Number( value ) < 0 );

        const initialSpecPercent = Object.entries( values.initialSpec ).reduce( ( total, [ , value ] ) => { return total + Number( value ); }, 0 );

        const finalSpecPercent = Object.entries( values.finalSpec ).reduce( ( total, [ , value ] ) => { return total + Number( value ); }, 0 );

        const isNotCorrectTotalPercent = initialSpecPercent !== 100 || finalSpecPercent !== 100;

        if ( isMissingAnyValue ) {
            return openWarningModal( 'Please enter all values for each specification. All values must be greater than 0.' );
        }

        if ( isNotCorrectTotalPercent ) {
            return openWarningModal( 'The total percentage for each specification must be 100%.' );
        }

        if ( !values.initialTotalWeight ) {
            return openWarningModal( 'Please enter a weight for the initial batch.' );
        }

        const weightCalculations = calculateWeightIncreases(
            convertSpecPercentages( values.initialSpec )
            , convertSpecPercentages( values.finalSpec )
            , Number( values.initialTotalWeight )
        );

        setResult( weightCalculations );
    };

    return (
        <Formularity
            formStore={ formStore }
            onSubmit={ handleSubmit }
        >
            { ( {
                initialValues
                , Field
                , SubmitButton
                , ResetButton
            } ) => (
                <Stack gap='1rem'>
                    <Stack gap='.5rem'>
                        <Typography fontWeight={ 600 }>
                            Initial Steel Batch Weight
                        </Typography>
                        <Field
                            name='initialTotalWeight'
                            type='number'
                            placeholder='Enter weight of entire batch'
                            component={ TextField }
                            size='small'
                            InputProps={ { endAdornment: 'kg' } }
                        />
                    </Stack>
                    <Stack
                        direction='row'
                        gap='1rem'
                    >
                        <Stack gap='.5rem'>
                            <Typography fontWeight={ 600 }>
                                Initial Specifications
                            </Typography>
                            {
                                ( Object.keys( initialValues.initialSpec ) as SteelElement[] ).map( ( element => (
                                    <Field
                                        component={ TextField }
                                        label={ capitalize( element ) }
                                        type='number'
                                        key={ element }
                                        name={ `initialSpec.${ element }` }
                                        size='small'
                                        InputProps={ { endAdornment: '%' } }
                                    />
                                ) ) )
                            }
                        </Stack>
                        <Stack gap='.5rem'>
                            <Typography fontWeight={ 600 }>
                                Final Specifications
                            </Typography>
                            {
                                ( Object.keys( initialValues.finalSpec ) as SteelElement[] ).map( ( element => (
                                    <Field
                                        component={ TextField }
                                        label={ capitalize( element ) }
                                        type='number'
                                        key={ element }
                                        name={ `finalSpec.${ element }` }
                                        size='small'
                                        InputProps={ { endAdornment: '%' } }
                                    />
                                ) ) )
                            }
                        </Stack>
                    </Stack>
                    <Stack
                        direction='row'
                        width='75%'
                        gap='1rem'
                        alignSelf='flex-end'
                        justifyContent='flex-end'
                    >
                        <ResetButton
                            component={ Button }
                            variant='outlined'
                        >
                            Clear
                        </ResetButton>
                        <SubmitButton
                            component={ Button }
                            variant='contained'
                        >
                            Submit
                        </SubmitButton>
                    </Stack>
                </Stack>
            ) }
        </Formularity>
    );
};

export default InputForm;
