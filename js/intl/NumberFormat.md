# Intl.NumberFormat

The Intl.NumberFormat object enables language-sensitive number formatting.

```js
console.log(
  new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
    number
  )
)
// expected output: "123.456,79 €"

// the Japanese yen doesn't use a minor unit
console.log(
  new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
    number
  )
)
// expected output: "￥123,457"

new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'day',
}).format,
```
