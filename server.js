const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI
const Logger = require('./middleware/Logger')
const users = require('./Routes/users')
const trips = require('./Routes/trips')
const seats = require('./Routes/seats')
const bookings = require('./Routes/bookings')


mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

// Connect to mongo
mongoose
  .connect(
    'mongodb+srv://gomana:gomana123@cluster0.7tl1g.mongodb.net/fleet_management_system?retryWrites=true&w=majority '
    )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((request, response, next) => {
  Logger.log(`${request.method} => ${request.originalUrl}`)
  next()
})



 app.get("/", (req, res) => {
  res.send(`<h1>Welcome</h1>
   <a href ="/Routes/users">User</a> 
   <a href ="/Routes/trips">Trip</a>
   <a href ="/Routes/seats">Seat</a>
   <a href ="/Routes/bookings">Booking</a>
   `);
});

app.use('/Routes/users', users)
app.use('/Routes/trips', trips)
app.use('/Routes/seats', seats)
app.use('/Routes/bookings', bookings)


app.use((req, res) => {
  res.status(404).send({ err: 'We can not find what you are looking for' })
})

seats.createseats();


// opens the port at 3001
app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  )
})
