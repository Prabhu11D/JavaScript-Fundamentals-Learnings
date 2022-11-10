# DOM Navigation

- Top Node in DOM - `<html>`, can be accessed by `document.documentElement`
- The childNodes collection lists all child nodes, including text nodes.
- childNodes are **collection** not **array**.
- DOM collections are read-only
- DOM collections are live
- Don’t use for..in to loop over collections
- The `<table>` element supports some extra DOM properties:
  - table.rows
  - table.caption
- like table, forms also have some additional properties;
- Please don’t use id-named global variables to access elements
- The id must be unique
  - if not, `document.getElementById` may return any of such elements at random
- The method `getElementById` can be called only on `document` object
- use pseudo-classes as well in `querySelector`
- The call to `elem.querySelector(css)` returns the first element for the given CSS selector.
  - the result is the same as `elem.querySelectorAll(css)[0]`
- 