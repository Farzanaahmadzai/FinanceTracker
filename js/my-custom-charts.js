// charts.js



const xValues = [ " Toal income","Total expenses", "Total Balance",];
        const yValues = [6000, 3000, 5500,];
        const barColors = [
             
              "#004445",
              "brown",
              "#5C821A",
              
        ];
    
       new Chart("income-balance-expenseTotalChart", {
       type: "doughnut",
       data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        title: {
          display: true,
          // text: "personal finance chart 2023"
        }
      }
    });



    /********************** */
    const transactionChartXValues = ["income", "expenses", "ncome", "expenses", "income"];
const transactionChartYValues = [55, 49, 44, 24, 15];
const transactionChartColors = ["teal", "brown","teal", "brown","teal",];

new Chart("transactionChart", {
  type: "bar",
  data: {
    labels: transactionChartXValues,
    datasets: [{
      backgroundColor: transactionChartColors,
      data: transactionChartYValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Transection"
    }
  }
});

const budgetXValues = ["Total budget", "Expenses", "Balance",];
const budgetYValues = [6000, 4800, 5500,];
const budgetBgColors = [
      
      "#004445",
      "#6FB98F",
      "#5C821A",
      
];

new Chart("BudgetChart", {
type: "doughnut",
data: {
labels: budgetXValues,
datasets: [{
  backgroundColor: budgetBgColors,
  data: budgetYValues
}]
},
options: {
title: {
  display: true,
  text: "Budget tracker chart"
}
}
});

const incomeXValues = ["salary", "business", "shope",];
const incomeYValues = [6000, 4800, 5500,];
const incomeBgColors = [
      
      "#004445",
      "#6FB98F",
      "#5C821A",
      
];

new Chart("incomeChart", {
type: "doughnut",
data: {
labels: incomeXValues,
datasets: [{
  backgroundColor: incomeBgColors,
  data: incomeYValues
}]
},
options: {
title: {
  display: true,
  text: "income tracker chart"
}
}
});


const expenseXValues = ["food", "home", "rent",];
const expenseYValues = [6000, 4800, 5500,];
const expenseBgColors = [
      
      "#004445",
      "#6FB98F",
      "#5C821A",
      
];

new Chart("expenseChart", {
type: "doughnut",
data: {
labels: expenseXValues,
datasets: [{
  backgroundColor: expenseBgColors,
  data: expenseYValues
}]
},
options: {
title: {
  display: true,
  text: "expense tracker chart"
}
}
});