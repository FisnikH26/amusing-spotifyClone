export function formatNumber(num) {
    // Array of suffixes for thousand, million, billion, trillion, etc.
    const suffixes = ["", "K", "M", "B", "T"];

    // Check if the number is greater than or equal to 1000
    if (num >= 1000) {
        // Determine the appropriate suffix index
        const suffixIndex = Math.floor(Math.log10(num) / 3);

        // Divide the number by 10^(3 * suffixIndex) and round to 1 decimal place
        const shortNum = (num / Math.pow(1000, suffixIndex)).toFixed(1);

        // Add the suffix and return the formatted number
        return shortNum + suffixes[suffixIndex];
    }

    // Return the original number if it is less than 1000
    return num;
}