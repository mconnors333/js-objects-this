'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    let total = 0;
    for (let i = 0; i < this.runs.length; i++) {
      total += this.runs[i].distance;
    }
    return total;
  },
  longestRun: function () {
    let longest = this.runs[0].distance;
    for(let i = 0; i < this.runs.length; i++) {
      if(this.runs[i].distance > longest) {
        longest = this.runs[i].distance;
      }
    }
    return longest;
  },
  averageSpeed: function () {
    let totalDistance = this.totalDistance();
    let totalTime = 0;
    for (let i = 0; i < this.runs.length; i++) {
      totalTime += this.runs[i].timeTaken;
    }
    let average = totalDistance / totalTime;
    return average;
  },
};

//module.exports = mcFaceRuns;
