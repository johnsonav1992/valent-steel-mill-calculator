import {
    SpecFormInput
    , SteelElement
    , SteelSpec
    , WeightsOutput
} from '../types/types';

export const findMaxDecreaseElement = ( initSpec: SteelSpec, finalSpec: SteelSpec ) => {
    let maxDecrease = -Infinity;
    let elementWithMaxDecrease = null;

    let element: SteelElement;
    for ( element in initSpec ) {
        const decrease = initSpec[ element ] - finalSpec[ element ];
        if ( decrease > maxDecrease ) {
            maxDecrease = decrease;
            elementWithMaxDecrease = element;
        }
    }

    return elementWithMaxDecrease;
};

export const calculateWeightIncreases = (
    initSpec: SteelSpec
    , finalSpec: SteelSpec
    , initWeight: number
) => {
    const maxDecreaseElement = findMaxDecreaseElement( initSpec, finalSpec ) as SteelElement;
    const finalTotalSpecWeight
      = ( initSpec[ maxDecreaseElement ] * initWeight ) / finalSpec[ maxDecreaseElement ];

    const weightsToAdd = {} as WeightsOutput;

    let elem: SteelElement;
    for ( elem in finalSpec ) {
        const elementInitialWeight = initWeight * initSpec[ elem ];
        const elementFinalWeight = finalTotalSpecWeight * finalSpec[ elem ];
        const weightToAdd = Number(
            ( elementFinalWeight - elementInitialWeight ).toFixed( 2 )
        );

        weightsToAdd[ elem ] = weightToAdd;

    }

    return weightsToAdd;
};

export const convertSpecPercentages = ( spec: SpecFormInput ) => {
    const convertedSpec = {} as SteelSpec;

    let element: SteelElement;
    for ( element in spec ) {
        convertedSpec[ element ] = ( Number( spec[ element ] ) ?? 0 ) / 100;
    }
    return convertedSpec;
};
