const MoneyFormat = (value: number | string): string => {
    if (value === null || value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return Intl.NumberFormat("en").format(+value);
    }
    return Intl.NumberFormat("en").format(value);
};

export default MoneyFormat;