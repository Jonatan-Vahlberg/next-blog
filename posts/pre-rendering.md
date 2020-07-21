---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js,
has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

---

| Image 1            | Image 2             | Image 3             |
| ------------------ | ------------------- | ------------------- |
| ![alt-text][image] | ![alt-text][image2] | ![alt-text][image3] |

---

<!-- |     |                                                                                                                   |     |
| --- | ----------------------------------------------------------------------------------------------------------------- | --- |
|     | [![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/ZYMuB9y549s/0.jpg)](http://www.youtube.com/watch?v=ZYMuB9y549s) |     | -->

[image]: https://picsum.photos/200/300 'random image'
[image2]: https://picsum.photos/300/300 'random image'
[image3]: https://picsum.photos/200/300 'random image'
