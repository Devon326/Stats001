const express = require('express');
const app = express();

const routes = require('./Routes/routing');

app.use(express.static('public'));
app.use(express.json());


app.use('/api/test/callCentre/one_stream/sales_orders?', routes);
app.use('/api/test/callCentre/one_stream/campaigns', routes);
 

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});