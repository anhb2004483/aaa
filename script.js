// Import the Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// Firebase configuration
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

// Handle form submission
document.getElementById('sn1Form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gas = document.getElementById('gas').value;
    const object = document.getElementById('object').value;
    const khancap = document.getElementById('khancap').value;
    const ambient = document.getElementById('ambient').value;
    const gas_threshold = document.getElementById('gas_threshold').value;
    const temp_threshold = document.getElementById('temp_threshold').value;

    // Write data to Firebase
    set(ref(database, 'SN1'), {
        gas: gas,
        object: object,
        khancap: khancap,
        ambient: ambient,
        gas_threshold: gas_threshold,
        temp_threshold: temp_threshold
    })
    .then(() => {
        document.getElementById('statusMessage').innerText = "Data submitted successfully!";
    })
    .catch((error) => {
        document.getElementById('statusMessage').innerText = "Error: " + error.message;
    });

    // Clear the form
    document.getElementById('sn1Form').reset();
});
