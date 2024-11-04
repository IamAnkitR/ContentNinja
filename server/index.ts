import app from "./src/app";

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
