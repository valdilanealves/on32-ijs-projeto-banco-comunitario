import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './clienteRoutes';
import gerenteRouts from './gerenteRoutes';


const app = express();

app.use(bodyParser.json());
app.use('/clientes', clienteRoutes);
app.use('/gerentes', gerenteRouts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
