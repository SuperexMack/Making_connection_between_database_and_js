const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/myFriends'); // iska matlab ye hai ki ham apne javascript file ko apne database ke saath connect kar raha hai aur kis database ke saaath connect karna hai ye baat hamein us link se malum lagegi


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  }

main().then(()=>{

console.log("Connection successful")

})

.catch(err => console.log(err));


// so using the uppar methods we had created a connection between the database and the javascript

































