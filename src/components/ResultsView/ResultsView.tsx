import {
    Button
    , Paper
    , Stack
    , Table
    , TableBody
    , TableCell
    , TableContainer
    , TableHead
    , TableRow
    , Typography
    , capitalize
} from '@mui/material';
import {
    SteelSpec
    , WeightsOutput
} from '../../types/types';
import { ArrowBack } from '@mui/icons-material';
import {
    Dispatch
    , SetStateAction
} from 'react';

type Props = {
    result: WeightsOutput;
    setResult: Dispatch<SetStateAction<WeightsOutput | null>>;
};

const ResultsView = ( {
    result
    , setResult
}: Props ) => {
    return (
        <Stack gap='.5rem'>
            <Stack
                direction='row'
                component={ Paper }
                elevation={ 0 }
                sx={ {
                    backgroundColor: theme => theme.palette.grey[ 200 ]
                    , p: '.5rem'
                } }
            >
                <Typography
                    variant='h5'
                    ml='16px'
                >
                    Results
                </Typography>
            </Stack>
            <TableContainer
                sx={ {
                    width: '450px'
                } }
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                variant='head'
                                sx={ {
                                    fontSize: '16px'
                                    , fontWeight: 700
                                } }
                            >
                                Element
                            </TableCell>
                            <TableCell
                                variant='head'
                                sx={ {
                                    fontSize: '16px'
                                    , fontWeight: 700
                                } }
                            >
                                Weight
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            ( Object.entries( result ) as Array<[keyof SteelSpec, number]> ).map( ( [ elem, weight ] ) => (
                                <TableRow key={ elem }>
                                    <TableCell>
                                        { capitalize( elem ) }
                                    </TableCell>
                                    <TableCell sx={ { fontWeight: 600 } }>
                                        { weight } kg
                                    </TableCell>
                                </TableRow>
                            ) )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                startIcon={ <ArrowBack /> }
                sx={ {
                    alignSelf: 'flex-start'
                    , mt: '.5rem'
                } }
                onClick={ () => setResult( null ) }
            >
                Return
            </Button>
        </Stack>
    );
};

export default ResultsView;
