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
            if (hexCode.length === 4 || hexCode.length === 7 || hexCode.length == 9) {
                return true;
            }
        }

        return false;
    }

    /**
     * Mixes up and creates a gradient
     * @param colors 
     */
    static mixUp(colors: string[], angle?: number) {
        let resultingGradient = `linear-gradient(${angle !== undefined ? angle: 0}deg, `;

        colors.forEach((color, index) => {
            if (new Color(color).validate() !== true) {
                throw new Error(`Couldn't validate color hex code: ${color}`);
            }
            if (index === colors.length - 1) {
                resultingGradient += color;
            } else {
                resultingGradient += `${color}, `;
            }
        });

        resultingGradient += ")";

        return resultingGradient;
    }
}

type ColorType = string;

export default Color;