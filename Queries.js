//1.
db.restaurant.find();

//2.
db.restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});

//3.
db.restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});

//4.
db.restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1, "address.zipcode": 1});

//5.
db.restaurant.find({borough: "Bronx"},{});

//6.
db.restaurant.find({borough: "Bronx"},{}).limit(5);

//7.
db.restaurant.find({borough: "Bronx"},{}).skip(5).limit(5);

//8.
db.restaurant.find({"grades.score": {$gt: 90}});

//9.
db.restaurant.find({grades: {$elemMatch: {score: {$gt: 80, $lt: 100}}}});

//10.
db.restaurant.find({"address.coord.0": {$lt: -95.754168}});

//11.
db.restaurant.find({ cuisine: {$ne: "American "}, grades: {$elemMatch: {score:{$gt: 70}}}, "address.coord.0": {$lt: -65.754168} });

//12.
db.restaurant.find({ cuisine: {$ne: "American "}, grades: {$elemMatch: {score:{$gt: 70}}}, "address.coord.0": {$lt: -65.754168} });

//13.
db.restaurant.find({ cuisine: {$ne: "American "}, grades: {$elemMatch: {grade: "A"}}, borough: {$ne: "Brooklyn"} });

//14.
db.restaurant.find({name: {$regex: /^Wil/ }}, { restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });

//15.
db.restaurant.find({name: {$regex: /ces$/ }}, { restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });

//16.
db.restaurant.find({name: {$regex: /Reg/ }}, { restaurant_id:1, name:1, borough:1, cuisine:1, _id:0 });

//17.
db.restaurant.find({ borough: "Bronx", $or: [{cuisine: "American "}, {cuisine: "Chinese"}]} );

//18.
db.restaurant.find({ borough: {$in: ["Staten Island", "Bronx", "Brooklyn", "Queens"] } }, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});

//19.
db.restaurant.find({ borough: {$nin: ["Staten Island", "Bronx", "Brooklyn", "Queens"] } }, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});

//20.
db.restaurant.find({ grades: {$elemMatch: {score: {$lt: 10}}} }, {restaurant_id:1, name:1, borough:1, cuisine:1, _id:0});

//21.
db.restaurant.find({ $or: [ {$and: [ {cuisine: "Seafood"}, {cuisine: { $nin: ["American ", "Chinese"] }} ]} , { "name": { $regex: /^Wil/i }} ]}, { "_id":0, "name":1, "borough":1, "cuisine":1});

//22.
db.restaurant.find({ grades: {$elemMatch: {date: ISODate("2014-08-11T00:00:00Z"), grade: "A", score: 11}} }, { restaurant_id:1, name:1, grades:1, _id:0});

//23.
db.restaurant.find({ "grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade": "A", "grades.1.score": 9 }, { restaurant_id :1, name :1, grades :1, _id:0});

//24.
db.restaurant.find({ "address.coord.1": {$gt: 42}, "address.coord.1": {$lte: 52} }, {restaurant_id:1, name:1, address:1});

//25.
db.restaurant.find({}).sort({name:1});

//26.
db.restaurant.find({}).sort({name:-1});

//27.
db.restaurant.find({}).sort( {cuisine:1}, {borough:-1} );

//28.
db.restaurant.find({ "address.street": null });

//29.
db.restaurant.find({ "address.coord": {$type: "double"} });

//30.
db.restaurant.find({ "grades.score": {$mod:[7, 0]} }, {restaurant_id:1, name:1, "grades.grade":1, _id:0});

//31.
db.restaurant.find({ name: {$regex: /mon/i } }, {name:1, borough:1, "address.coord":1, _id:0});

//32.
db.restaurant.find({ name: {$regex: /^Mad/} },{ name:1, borough:1, "address.coord":1, _id:0 });