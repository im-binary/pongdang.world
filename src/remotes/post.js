import remote from "./remote";

function getCategory(pathname) {
  const [, depth1, depth2] = pathname.split("/");
  return [depth1, depth2].join("/");
}

export async function getPost(pathname, id) {
  const category = getCategory(pathname);
  return remote["pongdang.world"].get(`/static-post/${category}/${id}.md.html`);
}
