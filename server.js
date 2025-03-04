/* eslint-disable no-console */
import express from 'express';

const app = express();

const PORT = process.env.PORT || 3030;
const staticFolder = 'client';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(staticFolder));

async function bootServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootServer();
