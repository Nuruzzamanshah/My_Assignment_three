var MongoClient = require('mongodb').MongoClient;

//mongodb local server pc  
var URL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0"

var config = {useUnifiedTopology: true};

MongoClient.connect(URL,config,function(error, MyMongoClinet){
    if(error){
        console.log('Connection Fail');
    }else{
        console.log('Connection Successfully');
        InsertData(MyMongoClinet);
        FineAllData(MyMongoClinet);
        updateMyData(MyMongoClinet);
        DeleteOneItem(MyMongoClinet);
    }
});
//Create Data Insert Operations
function InsertData (MyMongoClinet){
    var MYDataBase    = MyMongoClinet.db("school");
    var MyCollection  = MYDataBase.collection("student");
    var MyData = {
        Name :"Nuruzzaman",
        Roll :"01",
        Class: "computer 8th semester",
        City :"satkhira"
    };
    MyCollection.insertOne(MyData,  function (error){
        if(error){
            console.log("Data Insert Fail");
        }else{
            console.log("Data Insert Successfully");
        }
    })
}

//Create FindAll Operations
function FineAllData(MyMongoClinet){
    var MYDataBase    = MyMongoClinet.db("school");
    var MyCollection  = MYDataBase.collection("student");
    MyCollection.find().toArray(function (error, result){
        console.log(result);
    })
}
//Create Updatedata Operations

function updateMyData(MyMongoClinet){
    var MYDataBase    = MyMongoClinet.db("school");
    var MyCollection  = MYDataBase.collection("student");

    var MyQuery = {Roll:"05"};
    var MyNewValues={$set:{City:"Satkhira"}}

    MyCollection.updateOne(MyQuery,MyNewValues, function (error, result){
        console.log(result);
    })
}

//Create Data Delete Operations
function DeleteOneItem (MyMongoClinet){
    var MYDataBase    = MyMongoClinet.db("school");
    var MyCollection  = MYDataBase.collection("student");
    var DeleteOneItem = {
        Roll :"02"
    };
    MyCollection.deleteOne(DeleteOneItem,  function (error){
        if(error){
            console.log("Data delete Fail");
        }else{
            console.log("Data delete Successfully");
        }
    })
}
