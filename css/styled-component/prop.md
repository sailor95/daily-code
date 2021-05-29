# Styled component prop

```jsx
const Container = styled.div<{ count: number }>`
  padding: 5px;
  display: inline-grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: ${({ count }) =>
    channelGridTemplateArea[count - 1]};
  grid-gap: ${({ count }) => (count > 2 ? '16px' : '0')};

  ...
`


<Container count={channels.length}>
    ...
</Container>

```
