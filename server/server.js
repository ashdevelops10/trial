require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup',(req,res)=>{
  res.send('This is Signup page')
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${PORT}`)
})

