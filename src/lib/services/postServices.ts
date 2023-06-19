const apiUrl = process.env.DB_URL;

export const getPosts = async () => {
  const res = await fetch(apiUrl + "/api/posts?populate=*");
  return res.json();
};
