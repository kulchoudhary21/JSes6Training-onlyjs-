const test = async () => {
  // const response=await fetch("https://jsonplaceholder.typicode.com/todos/");
  // const data=await response.json();
  // return data
  try {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/todos/")
    ).json();
  } catch (error) {
    console.log("Error...", error);
  }
};
const data = test();
data.then((resp) => {
  console.log("resp", resp);
});
