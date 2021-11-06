import axios from "axios";
const posts = [
  {
    id: "fancy",
    content: "Im so fancy, you already know. #f4f #friendslearnwithme",
    image: "https://i.ytimg.com/vi/WCcpSyVWMwU/maxresdefault.jpg",
  },
  {
    id: "absdkasdfgkjhsdf",
    content: "This is not an image",
    image:
      "https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest?cb=20181130033425",
  },
];

export function getPosts() {
  return axios.get("http://localhost:5005/posts").then((response) => {
    return response.data.posts;
  });
}

export function getSinglePost(id) {
  const singlePost = posts.find((element) => element.id === id);

  if (!singlePost) {
    return Promise.reject("Doesnt exist");
  }

  return Promise.resolve(singlePost);
}
