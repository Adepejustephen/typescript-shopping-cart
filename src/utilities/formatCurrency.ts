

const CURRENCY__FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
return CURRENCY__FORMATTER.format(number)
}