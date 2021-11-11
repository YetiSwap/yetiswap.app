export default function priceToString(value) {
    const suffixes = ["", "K", "M", "B", "T"];
    const priceLength = ("" + value).length;
    const suffixNum = Math.floor(priceLength / (priceLength === 7 ? 3 : 4));
    let shortValue = parseFloat((suffixNum!==0 ? (value / Math.pow(1000, suffixNum)):value).toPrecision(2));
    if (shortValue % 1!==0) {
        shortValue = shortValue.toFixed(1);
    }
    return shortValue + " " + suffixes[suffixNum];
}
