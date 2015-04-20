# Markdown Homepage

## About

Markdown Homepage is designed to be a client-side site where the documents are all stored as
markdown on an HTTP server. This allows a user to serve a website out of something like their
DropBox public folder or a trivial HTTP server simple document formats.

## How Do I Use This?

Untar on some server somewhere and edit the markdown files in the `docs` directory. It should be
that simple.

For custom styling, edit [`index.css`](index.css).

For custom layout, sidebars, etc, edit [`index.html`](index.html).

## How Do I Deploy This?

Untar the package into any directory that serves out HTML. You will see the directory
structure:

    ./LICENSE
    ./docs/about.md
    ./docs/footer.md
    ./docs/header.md
    ./docs/index.md
    ./docs/license.md
    ./docs/notfound.md
    ./docs/sidebar.md
    ./docs/todo.md
    ./index.css
    ./index.html
    ./js/index.js
    ./js/jquery2.js
    ./js/Markdown.Converter.js

The files in `docs` can all be deleted and replaced with your own content. By default
`index.md` is served out.

## Advanced

Also included are the [`header.md`][header], [`footer.md`][footer], and [`sidebar.md`][sidebar]
files which are automatically loaded into HTML divs with the id `header`, `footer`, and `sidebar`,
respectively. Personally, I like a clean, empty site, so I remove these, but you're welcome
to customze this as you like. 

## What's Here

1. [Todo List][todo] - A list of features I would like to add.
1. [Markdown Syntax][mdsyntax] - A handy link to markdown syntax.

<!-- Ref links -->
[mdsyntax]: http://daringfireball.net/projects/markdown/syntax "Markdown Syntax"
[about]: ?docs/about.md "About"
[todo]: ?docs/todo.md "About"
[header]: ?docs/header.md "Header"
[footer]: ?docs/footer.md "Footer"
[sidebar]: ?docs/sidebar.md "Sidebar"
