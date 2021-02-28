export default function priceToString(value) {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat((suffixNum!==0 ? (value / Math.pow(1000, suffixNum)):value).toPrecision(2));
    if (shortValue % 1!==0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + " " + suffixes[suffixNum];
}
