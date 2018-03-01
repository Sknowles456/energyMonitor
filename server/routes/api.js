var express = require('express');
var router = express.Router();
var Cloudant = require('cloudant');
const util = require('util');
/*
Api call methods are structured like so:
  1. a log to console showing it has reached the call
  2. the selection of the database it wishes to used
  3. the query to retrieve requested database
  4. error handling in the callback function
  5. send the reponse object back as res
*/

//Connect to the Database
var cloudant = Cloudant('https://c7fbaee1-29d4-499c-a1ce-490285596944-bluemix:186b8e6ee9213fbbac087578ede2bf8f97f17e0b5a9bf2a009ff7724301c3269@c7fbaee1-29d4-499c-a1ce-490285596944-bluemix.cloudant.com:443');
if(cloudant){
  console.log('Succesfully connected to cloudant Database');
}
else{
  console.log('Error Connecting to Database');
}
//Error return if connection to the database cannot be made.

//default response objects when sending a request from the api.
var errorResponse = (err,res) =>{
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};
//Response json variable.
let response = {
  status:200,
  data: [],
  message: null
};

//#############  To retrieve the list of Databases  ###########
// Method to Test api call to ensure calls can be made
/*router.get('/databases', function(req, res, next){
  cloudant.db.list(function(err,list){
    if(err){
      errorResponse(err, res);
    }
    else{
      response.data = list;
      res.json(response);
    }
  });
});*/

/* To search inside objects
console.log('mydb : '+ util.inspect(mydb, {showHidden: false, depth: null}));
*/

// ############### Get all Notifications ##############
/*This retrieves all notifcations in the table*/
router.get('/notifications', function(req, res, next){
  console.log("Entered the GET all notifcations");
  var mydb = cloudant.db.use('notifs');
  var query = {
   "selector": {
      "_id": {
         "$gt": "0"
      }
   },
   "fields": [],
   "sort": [
      {
         "timestamp": "desc"
      }
   ]
};
  mydb.find(query,function(err, notifs){
    if(err){
      errorResponse(err,res);
    }

    response.data = notifs;
    response.total = notifs.docs.length.toString();
    res.json(response);
    console.log("Response has been sent back");
  });
});

//########### get Specfic notifications #############
/* takes a single ID in the url and will retrieve that doc.eg:
http://localhost:3000/notifications/notifications/bda127aa021cc1f7e5821211755e2157*/
router.get('/notifications/:id',function(req,res,next){
  console.log('Entered to GET a single notification');
  var mydb = cloudant.db.use('notifs');
  var query = {
    "selector": {
      "_id" : req.params.id
      }
    };
  mydb.find(query,function(err, notif){
    if(err){
      res.send(err);
    }
    res.json(notif.docs);
    console.log("Response has been sent back");
  });
});

// ############# Delete a Notification ###################
router.delete('/deleteNotifications/:id',function(req,res,next){
  console.log("Entered to DELETE a notifcation")
  var mydb = cloudant.db.use('notifs');
  //Need _id and version of the document to remove.
  idRev = req.params.id.split(',');
  id = idRev[0];
  rev= idRev[1];

  mydb.destroy(id,rev,function(err, notif){
    if(err){
    console.log(err)
    }
    response.data = notif;
    res.json(response);
    console.log("Deleted notification")
  });
});

router.get('/currentStatus', function(req,res,next){
  console.log("GET the current status of the environment");
  var mydb = cloudant.db.use('rooms');

  var date = new Date().getTime();// convert millsecond date into epoch timestamp
  date = (date / 1000) - 600;
  var query = {
   "selector": {
      "_id": {
         "$gt": "0"
      }
   },
   "fields": [],
   "sort": [
      {
         "timestamp": "desc"
      }
   ],
   "limit": 1
}
/* {
   "selector": {
      "timestamp": {
         "$gt": date
      },
      "limit": 1
   }
 }*/ //USE THIS QUERY WHEN DATA BACK UP AND RUNNING

  mydb.find(query,function(err, status){
    if(err){
      res.send(err);
    }
    response.data= status;
    res.json(response);
    console.log("Sent current status as responses")
  });
});

// ######### can be ADD user defined variables for best environment or add form info #######
router.post('/definedVars', function(req,res,next){
  var mydb = cloudant.db.use('preferences');
  var timestamp = new Date().getTime();
  var doc = {
    "property": req.body.property,
    "temperature": req.body.definedTemp,
    "humidity": req.body.definedHumidity,
    "light": req.body.lumos,
    "timestamp": (timestamp/1000)
  }
    mydb.insert(doc, function(err,result){
      if(err){
        res.send(err);
      }
      response.data = "Successfully Added Preferences";
      res.json(response);
      console.log("Defined variables sent as response");
    });
  });

router.get('/graphData/:start/:end', function(req,res,next){
    console.log("GET graph data between Specified Dates");
    var mydb = cloudant.db.use('rooms');
    var endDate =0;
    var startDate =0;
    if(req.params.start == 0){//if we have default method variables then we get the last 24hours data.
      endDate = new Date();
      startDate = endDate - 86400000
    }else{
      startDate = req.params.start;// If specified date then use that
      endDate = req.params.end;
    }
    var query = {
   "selector": {
      "timestamp": {
         "$and": [
            {
               "$gt": startDate/1000,
               "$lt": endDate/1000            }
         ]
      }
   },
   "fields": [],
   "sort": [
      {
         "timestamp": "desc"
      }
   ]
}

    mydb.find(query,function(err, data){
        if(err){
          res.send(err);
        }
        response.data = data.docs;
        res.json(response);
        console.log('graph data:'+ util.inspect(response.data, {showHidden: false, depth: null}));
      });
    });

router.get('/getUserVariables', function(req,res,next){
  console.log(" GET user preferences");
  var mydb = cloudant.db.use('preferences');

  var query = {
     "selector": {
        "_id": {
           "$gt": "0"
        }
     },
     "fields": [
     ],
     "sort": [
        {
           "timestamp": "desc"
        }
     ],
     "limit": 1
  };
  mydb.find(query,function(err, data){
      if(err){
        res.send(err);
      }
      response.data = data.docs;
      res.json(response);
      console.log('userdata:'+ util.inspect(response.data, {showHidden: false, depth: null}));
    });

});

router.get("/futureData",function(req,res,next){
  console.log("Reached the Api, responding with Future Data")
  var mydb = cloudant.db.use('model');
  var query = {
     "selector": {
        "_id": {
           "$gt": "0"
        }
     },
     "fields": [
     ],
     "sort": [
        {
           "timestamp": "desc"
        }
     ],
     "limit": 1
  };

  mydb.find(query,function(err, futureData){
      if(err){
        res.send(err);
      }
        response.data = futureData.docs;
        res.json(response);
        console.log('Sending futuredata:'+ util.inspect(response.data, {showHidden: false, depth: null}));

    });
  });

module.exports = router; // export all api calls to the router aka express
