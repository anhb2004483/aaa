// Import the Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPAZ7Wejg29HJWlGk4HVYCSb-tQC_uOs",
  authDomain: "espp-d81e2.firebaseapp.com",
  databaseURL: "https://espp-d81e2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "espp-d81e2",
  storageBucket: "espp-d81e2.appspot.com",
  messagingSenderId: "1031596671832",
  appId: "1:1031596671832:web:827366acdcf47222ae1b2d",
  measurementId: "G-L7ZYC7TE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Function to display data from Firebase
function displayData() {
  const gasRef = ref(database, 'SN1/gas');
  const objectRef = ref(database, 'SN1/object');
  const khancapRef = ref(database, 'SN1/khancap');
  const ambientRef = ref(database, 'SN1/ambient');
  const gasThresholdRef = ref(database, 'SN1/Gas_threshold');
  const tempThresholdRef = ref(database, 'SN1/Temp_threshold');

  onValue(gasRef, (snapshot) => {
    document.getElementById('gas').innerText = snapshot.val();
  });

  onValue(objectRef, (snapshot) => {
    document.getElementById('object').innerText = snapshot.val();
  });

  onValue(khancapRef, (snapshot) => {
    document.getElementById('khancap').innerText = snapshot.val();
  });

  onValue(ambientRef, (snapshot) => {
    document.getElementById('ambient').innerText = snapshot.val();
  });

  onValue(gasThresholdRef, (snapshot) => {
    document.getElementById('gas-threshold').innerText = snapshot.val();
  });

  onValue(tempThresholdRef, (snapshot) => {
    document.getElementById('temp-threshold').innerText = snapshot.val();
  });
}

// Function to send data to Firebase
document.getElementById('submit-btn').addEventListener('click', () => {
  const bbbValue = document.getElementById('bbb-input').value;
  if (bbbValue) {
    const bbbRef = ref(database, 'SN1/bbb');
    set(bbbRef, bbbValue)
      .then(() => {
        alert('SN1/bbb updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating SN1/bbb:', error);
      });
  } else {
    alert('Please enter a value for SN1/bbb.');
  }
});

// Display data on page load
displayData();
