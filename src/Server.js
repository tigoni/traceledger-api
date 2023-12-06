const { app } = require('./App');

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`TraceLedger API listening on port ${PORT}`);
});
