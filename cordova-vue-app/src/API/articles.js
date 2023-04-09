export async function getArticles(method = "local") {
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*"
    }
  };
  const localServerMethod = async () =>
    await fetch("http://127.0.0.1:3333/articles", options).catch(() =>
      getArticles("network")
    );
  const networkServerMethod = async () =>
    await fetch(
      "https://63cbf40c5c6f2e1d84bec802.mockapi.io/articles",
      options
    ).catch(() => console.log("Failed to fetch articles"));

  const response =
    method === "local" ? localServerMethod() : networkServerMethod();
  // const result = response.json();

  console.log(response);

  return response;
}

export async function getArticlesById(id, method = "local") {
  const options = {
    method: "GET",
    headers: {
      Accept: "*/*"
    }
  };
  const localServerMethod = async () =>
    await fetch(`http://127.0.0.1:3333/articles/${id}`, options).catch(() =>
      getArticlesById(id, "network")
    );
  const networkServerMethod = async () =>
    await fetch(
      `https://63cbf40c5c6f2e1d84bec802.mockapi.io/articles/${id}`,
      options
    ).catch(() => console.log("Failed to fetch articles by id " + id));

  const response =
    method === "local" ? localServerMethod() : networkServerMethod();
  // const result = response.json();

  console.log(method);

  return response;
}
