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

> Wrapper inside a component will have 1.5rem of padding-bottom if heading is already in there. Else padding: 1.5rem 0;

## To-Do
 - Add fallback for Masonary Layout when JS is disabled.
 - Create a separate component for Tags.
 - Streamline fonts (size, weight etc.) -- M
 - Update headings to use Ubuntu font.
 - Fix all the images aspect ratio.
 - Mobile view for Now and Footer.
 - Better optimise CustomImage component. Replace hardcoded values with var().
 - Setup width of the image and intro section in hero component like NowCard or HeroProject.
 - Multiple custom heading components like h1, h2 and h3.
 - Work on the mobile view of FeaturedCard, HeroProject, HeroBlog.
 - Find a better way rendering images landscape to portrait.
 - Create a paragraph component with multiple props like margin, padding, muted, etc.
 - Work on the heading tag, create a component out of it. Add props like h1, h2, h3 etc.
 - Sanatize the HTML before passing.
 - Work on building a page banner component.
 - Work on the mobile view of Contact page.
 - Add icons in Now section (for artists, albums and title)
 - Right portion of the Now section should include the details about what's this (and link to deep dive)
 - Updates page data should be fetched directly from GitHub.
 - Integrate better loading facility.
 - Fix breakpoints for each page and section.
 - Add suspense loading and skeleton screens.
 - Dynamic width and height of Image calculation.
 - Drop shadow and boder bottom in navbar (dynamic).
 - Udpate Dropdown component better, make it dynamic.
 - Udpate contacts and updates page, make it dynamic.
 - Udpate globals.css, blocking user defined styles.
 - Update Now cards background color.

> Use LLMs to generate configuration files for different personalities (themes)

> Some tools I buit over the years in college (notes, pdf edit, handwritting, etc)