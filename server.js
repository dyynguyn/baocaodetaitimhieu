const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/users', (req, res) => {
  const data = [
    { id: 1, name: 'Nguyen Le Duy', email: 'dyy@mail.com' },
    { id: 2, name: 'Phan Thanh Vinh', email: 'vinh@mail.com' },
    { id: 3, name: 'Nguyen Hai Dang', email: 'dang@mail.com' }
  ];
  res.json({ data });
});

app.listen(port, () =>
  console.log(`Server chạy tại http://localhost:${port}`)
);
