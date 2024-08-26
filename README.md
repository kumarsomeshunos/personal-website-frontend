# Frontend for my personal website
> Will be updating the README file
---
## Notes for self:
```jsx
// GlobalWrapper will be in layout file
<GlobalWrapper>
    <GlobalWallpaper />
    <Content /> --> SectionWrapper
</GlobalWrapper>
```

```jsx
<SectionWrapper>
    <SectionWallpaper />
    <Content /> --> MainComponents
</SectionWrapper>
```

> Color variable which will be used in theming engine is stored in GlobalWrapper (dangeroudHTML)

> Images are allowed from all hostnames currently.

> Data integration from APIs should be done in pages.

> Except the above changes now

Data integration from API's should be done in pages except if the componenet includes core component in itself like ProjectCard or CardHolder then it should be done inside the component itself.