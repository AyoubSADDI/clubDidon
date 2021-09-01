const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const adhesionRoutes = require('./routes/adhesion');
const conferenceRoutes = require('./routes/conference');
const eventRoutes = require('./routes/event');
const mediaRoutes = require('./routes/media');
const planningRoutes = require('./routes/planning');
const sortieRoutes = require('./routes/sortie');
const actualiteRoutes = require('./routes/actualite');
const partenaireRoutes = require('./routes/partenaire');


mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion a MongoDB reussie !'))
  .catch(() => console.log('Connexion a MongoDB echouee !'));

  
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//   pour eliminer le prog de GROS (envoyer des req externe de node)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With , X-PINGOTHER, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  // app.use(cros({
  //     origin: [process.env.CLIENT_URL,process.env.CLIENT_URL1]
  // }))

//serve images in diractory images
//app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({limit: '50mb', extended: true})); 
app.use(express.json({ limit: '50mb'}));


app.use('/api/stuff'      ,stuffRoutes);
app.use('/api/auth'       ,userRoutes);
app.use('/api/adhesion'   ,adhesionRoutes);
app.use('/api/conference' ,conferenceRoutes);
app.use('/api/event'      ,eventRoutes);
app.use('/api/planning'   ,planningRoutes);
app.use('/api/sortie'     ,sortieRoutes);
app.use('/api/actualite'  ,actualiteRoutes);
app.use('/api/partenaire' ,partenaireRoutes);
app.use('/api/media'      ,mediaRoutes);



module.exports = app;