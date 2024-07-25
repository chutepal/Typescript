/**
 * Utility functions.
 */
export const unitConversion = {
    /**
     * Converts energy from milliwatt-hours (mWh) to kilowatt-hours (kWh).
     *
     * This function takes a power value in milliwatt-hours (mWh) and converts it to kilowatt-hours (kWh),
     * formats the result to two decimal places, and replaces the decimal point with a comma.
     * The final result is returned as a string with the " kWh" suffix.
     *
     * @param {number} power - The power value in milliwatt-hours (mWh) to be converted.
     * @returns {string} - The formatted power value in kilowatt-hours (kWh).
     *
     * Example:
     * convertmWhTokWh(1234567) => "1,23 kWh"
     */
    convertmWhTokWh: (power: number): string => {
        // Convert power from milliwatt-hours (mWh) to kilowatt-hours (kWh)
        const kWh = power / 1000000;

        // Format the result to two decimal places
        const formattedKWh = kWh.toFixed(2);

        // Replace the decimal point with a comma
        const formattedKWhWithComma = formattedKWh.replace('.', ',');

        // Append the " kWh" suffix and return the final result
        return `${formattedKWhWithComma} kWh`;
    }
};