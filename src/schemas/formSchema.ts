import { z } from 'zod';
import { SteelElement } from '../types/types';

const propertySchema = z.number();

const specKeys: SteelElement[] = [ 'carbon', 'chromium', 'iron', 'manganese', 'molybdenum', 'nickel', 'nitrogen', 'phosphorus', 'silicon', 'sulfur' ];

const specSchema = specKeys.reduce<Record<SteelElement, typeof propertySchema>>( ( schema, key ) => {
    schema[ key ] = propertySchema;
    return schema;
}, {} as never );

export const formValidationSchema = z.object( {
    initialTotalWeight: propertySchema
    , initialSpec: z.object( specSchema )
    , finalSpec: z.object( specSchema )
} );
