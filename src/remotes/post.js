import remote from "./remote";

export async function getPost(category, id) {
  return remote["pongdang.world"].get(`/blog/static-post/${category}/${id}.md.html`);
}

export async function getPostList(category) {
  return remote["pongdang.world"].get(`/blog/static-post/${category}/list.json`);
}
