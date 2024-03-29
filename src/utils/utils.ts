import {
    SpecFormInput
    , SteelElement
    , SteelSpec
} from '../types/types';

export const findMaxDecreaseElement = ( initSpec: SteelSpec, finalSpec: SteelSpec ) => {
    let maxDecrease = -Infinity;
    let elementWithMaxDecrease = null;

    let element: SteelElement;
    for ( element in initSpec ) {
        const decrease = initSpec[ element ] / finalSpec[ element ];
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

    const weightsToAdd = {} as SteelSpec;

    let elem: SteelElement;
    for ( elem in finalSpec ) {
        const elementInitialWeight = initWeight * initSpec[ elem ];
        const elementFinalWeight = finalTotalSpecWeight * finalSpec[ elem ];
        const weightToAdd = Number(
            ( elementFinalWeight - elementInitialWeight ).toFixed( 2 )
        );

        weightsToAdd[ elem ] = weightToAdd;
    }

    const totalWeightAdditions = Object.values( weightsToAdd )
        .reduce( ( acc, val ) => acc + val, 0 );

    const totalFinalWeight = initWeight + totalWeightAdditions;

    return {
        weightAdditions: weightsToAdd
        , totalFinalWeight
    };
};

export const convertSpecPercentages = ( spec: SpecFormInput ) => {
    const convertedSpec = {} as SteelSpec;

    let element: SteelElement;
    for ( element in spec ) {
        convertedSpec[ element ] = ( Number( spec[ element ] ) ?? 0 ) / 100;
    }
    return convertedSpec;
};
