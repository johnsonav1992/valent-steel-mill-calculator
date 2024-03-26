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
    [ Elem in keyof SteelSpec ]: number | null
};

export type WeightsOutput = SteelSpec;

export type SteelSpecFormValues = {
    initialTotalWeight: number | null;
    initialSpec: SpecFormInput;
    finalSpec: SpecFormInput;
};
