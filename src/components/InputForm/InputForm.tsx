import {
    FormStore
    , Formularity
} from 'formularity';
import {
    SteelElement
    , SteelSpecFormValues
} from '../../types/types';
import {
    Stack
    , TextField
    , capitalize
} from '@mui/material';

type Props = {
    formStore: FormStore<SteelSpecFormValues>;
};

const InputForm = ( { formStore }: Props ) => {
    return (
        <Formularity
            formStore={ formStore }
            useFormComponent={ false }
        >
            { ( {
                initialValues
                , Field
            } ) => (
                <Stack gap='1rem'>
                    {
                        ( Object.keys( initialValues ) as SteelElement[] ).map( ( element => (
                            <Field
                                component={ TextField }
                                label={ capitalize( element ) }
                                type='number'
                                key={ element }
                                name={ element }
                                size='small'
                            />
                        ) ) )
                    }
                </Stack>
            ) }
        </Formularity>
    );
};

export default InputForm;
