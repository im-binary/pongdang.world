import remote from "./remote";

export async function getPost(path, id) {
  return remote["pongdang.world"].get(`/static-post/${path}/${id}.md.html`);
}
