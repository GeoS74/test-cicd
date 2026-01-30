const app = require('./src/app');

app.listen(3000, error => {
  if(error) {
    console.log(error);
    return;
  }
  console.log('server running on port 3000');
})