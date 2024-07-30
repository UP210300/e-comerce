const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export function formatCurrency(amount) {
    return USCurrency.format(amount);
}