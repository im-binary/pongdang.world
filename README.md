# pongdang.world

## 메뉴 추가하는 법

1. 라우터에서 추가할 메뉴 추가하기

```jsx
    <Route path='카테고리' element={<StudyListPage />} />
    <Route path='카테고리/:id' element={<StudyPostPage />} />
```

2. static-post에 글쓸 메뉴에 글 쓰기

`static-post/study/카테고리/1.md` 작성

3. 메뉴 추가하기

```js
  const menuList = [
    { path: "js", name: "JS" },
    { path: "html", name: "HTML" },
    { path: "react", name: "React" },
  ];
```
에 추가하기