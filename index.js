const bunyan = require('bunyan')
const bunyanMiddleware = require('bunyan-middleware')
const express = require('express');
const path = require('path');

const app = express();
const bunyanOpts = {
  name: 'react-app-skeleton',
  streams: [
    {
      level: 'debug',
      stream: process.stdout    // log INFO and above to stdout
    },
    {
      level: 'info',
      path: './logs/logs.json'  // log ERROR and above to a file
    }
  ]
};

const logger = bunyan.createLogger(bunyanOpts);

app.use(bunyanMiddleware(
    { headerName: 'X-Request-Id'
    , propertyName: 'reqId'
    , logName: 'req_id'
    , obscureHeaders: []
    , logger: logger
    , additionalRequestFinishData: function(req, res) {
        return { 'req': req }
      }
    }
  )
)

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/public')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port);

console.log('App is listening on port ' + port);
