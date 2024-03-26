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
            } ) => (
                <Stack gap='1rem'>
                    <Stack>
                        <Typography variant='h6'>
                            Initial Steel Batch Weight
                        </Typography>
                        <Field
                            name='initialTotalWeight'
                            type='number'
                            placeholder='Enter weight of entire batch in kg'
                            component={ TextField }
                            size='small'
                            InputProps={ { endAdornment: 'kg' } }
                        />
                    </Stack>
                    <Stack
                        direction='row'
                        gap='1rem'
                    >
                        <Stack gap='1rem'>
                            <Typography variant='h6'>
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
                        <Stack gap='1rem'>
                            <Typography variant='h6'>
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
                    <SubmitButton
                        component={ Button }
                        variant='contained'
                    >
                        Submit
                    </SubmitButton>
                </Stack>
            ) }
        </Formularity>
    );
};

export default InputForm;
