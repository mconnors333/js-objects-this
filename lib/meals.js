'use strict';

const Meals = {
  // your code goes here
    name: "Matthew Connors",
    bornOn: "July 3, 1988",
    calorieTarget: 2000,
    meals: [
      {
        title: "breakfast",
        date: "2016-11-16",
        description: "protein bar",
        calories: 200,
      },
      {
        title: "lunch",
        date: "2016-11-16",
        description: "pad thai",
        calories: 800,
      },
      {
        title: "dinner",
        date: "2016-11-16",
        description: "grilled cheese and soup",
        calories: 500,
      },
      {
        title: "breakfast",
        date: "2016-11-17",
        description: "protein bar",
        calories: 200,
      },
      {
        title: "lunch",
        date: "2016-11-17",
        description: "pizza",
        calories: 700,
      },
      {
        title: "dinner",
        date: "2016-11-17",
        description: "chinese food",
        calories: 1000,
      }
    ],
    caloriesEatenOn: function (date) {
      let totalCals = 0;
      for (let i = 0; i < this.meals.length; i++){
        if (date === this.meals[i].date ) {
        totalCals += this.meals[i].calories;
        }
      }
      return totalCals;
    },
    avgDailyCalories: function () {
      let total = 0;
      let uniqueDays = [];
      for (let i = 0; i < this.meals.length; i++) {
        // add total calories
        total += this.meals[i].calories;
        // send unique number of days to the uniqueDays array
        if (uniqueDays.indexOf(this.meals[i].date) === -1) {
          uniqueDays.push(this.meals[i].date);
        }
      }
      let numberOfDays = uniqueDays.length;
      let averageCals = total / numberOfDays;
      return Math.floor(averageCals);
    },
    onTrack: function () {
      if (this.avgDailyCalories() <= this.calorieTarget) {
        return true;
      } else {
        return false;
      }
    },

};


module.exports = mealObj;
