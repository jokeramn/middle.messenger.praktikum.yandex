import express from 'express';
import { resolve } from 'path';

const PORT = 3000;

const app = express();

app.use(express.static(resolve('./')));

app.listen(PORT, () => {
    console.log(`server listen ${PORT}`);
});
