'use strict';
export { }

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!
let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let fixedURL = url.replace('bots', 'odds');
let fixHTTP = fixedURL.substr(0, 5).concat(':').concat(fixedURL.substr(5, fixedURL.length));

console.log(fixHTTP);