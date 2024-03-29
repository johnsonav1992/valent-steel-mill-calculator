import { SteelSpec } from '../types/types';

const initialSpecs: SteelSpec[] = [
    {
        chromium: 14.79
        , nickel: 2.00
        , molybdenum: 0.50
        , carbon: 0.01
        , manganese: 1.00
        , phosphorus: 0.03
        , sulfur: 0.02
        , silicon: 0.60
        , nitrogen: 0.05
        , iron: 81.00
    }
    , {
        chromium: 10.00
        , nickel: 3.00
        , molybdenum: 1.00
        , carbon: 0.02
        , manganese: 0.80
        , phosphorus: 0.04
        , sulfur: 0.03
        , silicon: 1.70
        , nitrogen: 0.06
        , iron: 83.35
    }
    , {
        chromium: 12.00
        , nickel: 5.50
        , molybdenum: 0.80
        , carbon: 0.03
        , manganese: 0.90
        , phosphorus: 0.05
        , sulfur: 0.04
        , silicon: 0.65
        , nitrogen: 0.07
        , iron: 79.96
    }
    , {
        chromium: 16.00
        , nickel: 2.20
        , molybdenum: 0.60
        , carbon: 0.02
        , manganese: 1.10
        , phosphorus: 0.03
        , sulfur: 0.02
        , silicon: 0.68
        , nitrogen: 0.05
        , iron: 79.30
    }
    , {
        chromium: 13.50
        , nickel: 3.80
        , molybdenum: 0.70
        , carbon: 0.02
        , manganese: 0.95
        , phosphorus: 0.04
        , sulfur: 0.33
        , silicon: 0.7
        , nitrogen: 0.06
        , iron: 79.90
    }
];

const finalSpecs: SteelSpec[] = [
    {
        chromium: 17.00
        , nickel: 12.00
        , molybdenum: 3
        , carbon: 0.08
        , manganese: 2.00
        , phosphorus: 0.05
        , sulfur: 0.02
        , silicon: 0.75
        , nitrogen: 0.10
        , iron: 65.00
    }
    , {
        chromium: 15.50
        , nickel: 10.00
        , molybdenum: 4.00
        , carbon: 0.09
        , manganese: 2.50
        , phosphorus: 0.06
        , sulfur: 0.04
        , silicon: 2.70
        , nitrogen: 0.11
        , iron: 65.00
    }
    , {
        chromium: 18.00
        , nickel: 11.50
        , molybdenum: 2.70
        , carbon: 0.50
        , manganese: 2.20
        , phosphorus: 0.07
        , sulfur: 0.05
        , silicon: 0.85
        , nitrogen: 0.13
        , iron: 64.00
    }
    , {
        chromium: 16.80
        , nickel: 10.80
        , molybdenum: 2.40
        , carbon: 0.07
        , manganese: 1.80
        , phosphorus: 0.05
        , sulfur: 0.03
        , silicon: 0.76
        , nitrogen: 0.29
        , iron: 67.00
    }
    , {
        chromium: 2.17
        , nickel: 11.20
        , molybdenum: 2.80
        , carbon: 0.09
        , manganese: 2.40
        , phosphorus: 0.06
        , sulfur: 0.39
        , silicon: 0.78
        , nitrogen: 0.11
        , iron: 80
    }
];

export const generateDummyData = (): { initialSpec: SteelSpec; finalSpec: SteelSpec } => {
    const randomIndex = Math.floor( Math.random() * initialSpecs.length );
    const initialSpec = { ... initialSpecs[ randomIndex ] };
    const finalSpec = { ...finalSpecs[ randomIndex ] };

    return {
        initialSpec
        , finalSpec
    };
};
