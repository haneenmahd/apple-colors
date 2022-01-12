class Color {
    hexCode: string;

    constructor(hex: string) {
        this.hexCode = hex;
    }

    /**
     * Validates a hex color
     * @returns 
     */
    validate(): boolean {
        const hexCode = this.hexCode;

        if (hexCode.startsWith("#")) {
            if (hexCode.length >= 4 || hexCode.length >= 7) {
                return true;
            }
        }

        return false;
    }
}

type ColorType = string;

export default Color;