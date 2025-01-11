const githubinfo = async () => {
  const apidata = await fetch(
    "https://api.github.com/users/shaik-mohammed-uwais"
  );
  return apidata.json();
  // const adata = apidata.json();
  // return adata;
};
export default githubinfo;
