export default async function handler(req, res) {
let bod={
    model: "default",
    input: [[44, 43, 44], "N", "N", "N"],
  }
  let body=JSON.stringify(bod);
  const response = await fetch("http://colormind.io/api/", {
    method:'POST',
    body,
  });
  const data=await response.json()

  res.status(200).json(data)
}
