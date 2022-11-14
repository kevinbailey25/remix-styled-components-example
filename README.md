# Minimal Example of Using Remix with Styled-Components

This is a basic example of using `styled-components` with Remix. There are several tips and tricks done to try and prevent styles from being removed in the `<head>` of the page. Read more about it here: [Issue Thread](https://github.com/remix-run/remix/issues/1136)

## Important Things to Note

- [Use React v17.](https://github.com/remix-run/remix/issues/1136#issuecomment-1301062489)
- Create a pathless layout to act as your "new" root. ALL of your routes will go under your pathless layout.
- Your `root.tsx` can only ever be loaded once, any re-rendering has the potential to throw out styling. It's good to put a `export const unstable_shouldReload = () => false` in your `root.tsx` to help ensure that it doesn't re-render.
