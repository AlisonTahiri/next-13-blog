const apiUrl = process.env.DB_URL;

export const getPosts = async () => {
  const res = await fetch(apiUrl + "/api/posts?populate=*");
  return res.json();
};

export const getPost = async (id: number) => {
  const res = await fetch(apiUrl + `/api/posts/${id}`);
  return res.json();
};
