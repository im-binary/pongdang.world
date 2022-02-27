import remote from "./remote";

export async function getPost(category, id) {
  return remote["pongdang.world"].get(`/static-post/${category}/${id}.md.html`);
}

export async function getPostList(category) {
  return remote["pongdang.world"].get(`/static-post/${category}/list.json`);
}
