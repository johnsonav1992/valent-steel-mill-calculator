import { Formularity } from 'formularity';
import { SteelElement } from '../../types/types';
import {
    Button
    , Stack
    , TextField
    , Typography
    , capitalize
} from '@mui/material';
import { formStore } from '../../App';

const InputForm = () => {
    return (
        <Formularity
            formStore={ formStore }
            onSubmit={ values => console.log( values ) }
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
