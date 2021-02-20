// Problem: we need a simple way to look at a users badge count and javascript points
// Solution: use node.js to connect to treehouse's API to get profile information to print out
const https = require('https');
const username = "chalkers";


function printMessage(username, badgeCount, points) {
   const message = `${username} has ${badgeCount} total badge(s) and ${points} points in
   JavaScript`;
   console.log(message);
}

// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
                          let body = "";
                          // Read the data
                          response.on('data', data => {
                            body += data.toString();
                          });

                          response.on('end', () => {
                          // Parse the data
                          const profile = JSON.parse(body);
                          console.dir(profile);
                          printMessage(username, profile.badges.length, profile.points.JavaScript);
                          // Print the data
                          });
                          
                          });
