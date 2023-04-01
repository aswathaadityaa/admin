
var firebaseConfig = {
        apiKey: "AIzaSyBbu5SC8_3FV1yE-IrMutWykW2EADYQmlk",
        authDomain: "shelf-2.firebaseapp.com",
        databaseURL: "https://shelf-2-default-rtdb.firebaseio.com",
        projectId: "shelf-2",
        storageBucket: "shelf-2.appspot.com",
        messagingSenderId: "507397179326",
        appId: "1:507397179326:web:4c2369079020f5f7a49bef",
        measurementId: "G-CQ9CENNL89"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Get a reference to the "items" node in the database
  var itemsRef = database.ref('books');
  
  // Listen for changes in the data
  itemsRef.on('value', function(snapshot) {
    // Clear the items list
    var itemsList = document.getElementById('items-list');
    itemsList.innerHTML = '';
  
    // Loop through the items in the snapshot
    snapshot.forEach(function(childSnapshot) {
      // Get the data for the item
      var item = childSnapshot.val();
  
      // Create a new list item for the item
      var listItem = document.createElement('li');
      listItem.innerText = "AUTHOR " + ': ' + item.author +
                             "BOOK NAME " + ': ' + item.bookname +
                                "BOOK TYPE " + ': ' + item.booktype +
                                    "DESCRIPTION " + ': ' + item.desc;
  
      // Add the list item to the items list
      itemsList.appendChild(listItem);
    });
  });