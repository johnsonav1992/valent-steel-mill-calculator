export type SteelElement =
    | 'chromium'
    | 'nickel'
    | 'molybdenum'
    | 'carbon'
    | 'manganese'
    | 'phosphorus'
    | 'sulfur'
    | 'silicon'
    | 'nitrogen'
    | 'iron';

export type SteelSpec = Record<SteelElement, number>;
export type SpecFormInput = {
    [ Elem in keyof SteelSpec ]: number | string | null
};

export type WeightsOutput = {
    weightAdditions: SteelSpec;
    totalFinalWeight: number;
};

export type SteelSpecFormValues = {
    initialTotalWeight: number | string | null;
    initialSpec: SpecFormInput;
    finalSpec: SpecFormInput;
};
