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

export type SteelSpecFormValues = {
    [Elem in SteelElement]: number | null;
};
