import { Formularity } from 'formularity';
import {
    SteelElement
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
    calculateWeightsToAdd
    , convertSpecPercentages
} from '../../utils/utils';
import {
    Dispatch
    , SetStateAction
} from 'react';

type Props = {
    setResult: Dispatch<SetStateAction<WeightsOutput | null>>;
};

const InputForm = ( { setResult }: Props ) => {

    return (
        <Formularity
            formStore={ formStore }
            onSubmit={ values => {
                const isMissingAnyValue
                    = Object.entries( values.initialSpec ).some( ( [ , value ] ) => !value )
                    || Object.entries( values.finalSpec ).some( ( [ , value ] ) => !value );

                if ( isMissingAnyValue ) {
                    return alert( 'Please enter all values for each  specification.' );
                }

                if ( !values.initialTotalWeight ) {
                    return alert( 'Please enter a weight for the initial batch.' );
                }

                const weightCalculations = calculateWeightsToAdd(
                    convertSpecPercentages( values.initialSpec )
                    , convertSpecPercentages( values.finalSpec )
                    , Number( values.initialTotalWeight )
                );

                setResult( weightCalculations );
            }
            }
        >
            { ( {
                initialValues
                , Field
                , SubmitButton
                , ResetButton
            } ) => (
                <Stack gap='1rem'>
                    <Stack gap='.5rem'>
                        <Typography>
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
                            <Typography>
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
                            <Typography>
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
                            Reset
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
