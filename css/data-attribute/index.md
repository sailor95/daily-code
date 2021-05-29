# 'data' Attribute

HTML data attributes:

In jsx

```jsx
<Mask data-mask={showMask}>...</Mask>
```

In CSS

```css
.mask {
  &[data-mask='true'] {
    background-color: white;
  }

  &[data-mask='false'] {
    background-color: black;
  }
}
```
