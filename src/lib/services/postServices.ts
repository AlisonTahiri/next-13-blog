const apiUrl = process.env.NEXT_PUBLIC_DATABASE_URL;

export const getPosts = async () => {
  const res = await fetch(apiUrl + "/api/posts?populate=*");
  return res.json();
};

export const getPost = async (id: number) => {
  const res = await fetch(apiUrl + `/api/posts/${id}?populate=*`);
  return res.json();
};
