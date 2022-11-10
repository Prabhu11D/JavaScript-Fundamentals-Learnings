# DOM

- DOM represents Page Content as Objects. That can be access by a Programming Languages
- Every HTML Tag is an Object, The Content inside a Tag also Object
- `document.body` is an Object for `<body>` tag.
- Tags -> Element Nodes,
- Text -> Text Nodes, labelled as #text
- two top-level exclusions:
  1. Spaces and newlines before `<head>` are ignored for historical reasons.
  2. If we put something after `</body>`, then that is automatically moved inside the body, at the end, as the HTML spec requires that all content must be inside `<body>`. So there can’t be any spaces after `</body>`.
- Autocorrection
  - If the browser encounters malformed HTML, it automatically corrects it when making the DOM.
- Tables

  ```html
  <table id="table">
    <tr>
      <td>1</td>
    </tr>
  </table>
  ```

  - behind `<tbody>` automatically created by DOM.

- comments also an Object, labelled as #comment

  - **Everything in HTML, even comments, becomes a part of the DOM.**
  - But it doesn't affect the Visual Representation

- `document` is entry point in DOM node.
- There are 12 Nodes in DOM. to see run `Node` in console.
