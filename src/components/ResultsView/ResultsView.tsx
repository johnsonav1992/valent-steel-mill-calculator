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
                <Stack p='.5rem'>
                    <Typography variant='h5'>
                        Results
                    </Typography>
                    <Typography
                        variant='caption'
                        fontStyle='italic'
                    >
                        *All weights shown below will be added to the mixture to achieve final spec.
                    </Typography>
                </Stack>
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
                            ( Object.entries( result.weightAdditions ) as Array<[keyof SteelSpec, number]> ).map( ( [ elem, weight ] ) => (
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
            <Stack
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                mt='.5rem'
            >
                <Button
                    startIcon={ <ArrowBack /> }
                    onClick={ () => setResult( null ) }
                >
                    Return
                </Button>
                <Typography>
                    { `Total Final Weight: ${ result.totalFinalWeight.toFixed( 2 ) }kg` }
                </Typography>
            </Stack>
        </Stack>
    );
};

export default ResultsView;
