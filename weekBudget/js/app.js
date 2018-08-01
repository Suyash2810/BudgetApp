//variables
var addExpenseForm = document.getElementById('add-expense'),
    expense = document.getElementById('expense'),
    amount = document.getElementById('amount'),
    expenses = document.getElementById('expenses');

    var monthlyBudget,moneyLeft,obj;
    var total = document.getElementById('total');
    var left_span = document.getElementById('left');
    var box_color = document.getElementsByClassName('alert-success')[0];
   

   
        
    





//eventlisteners
EventListeners();

function EventListeners(){
    document.addEventListener('DOMContentLoaded',func);
    addExpenseForm.addEventListener('submit',subForm);
    addExpenseForm.addEventListener('submit',SubtractValue);
    
    
    
}





//functions

function func(){

    monthlyBudget = prompt("What is your monthly budget?");
    if(monthlyBudget === ''|| monthlyBudget===null|| monthlyBudget ==='0'){
        window.location.reload();
    }
    if(isNaN(monthlyBudget)){
        alert("Enter a valid Number.");
        window.location.reload();
    }
    if(monthlyBudget === ''|| monthlyBudget===null|| monthlyBudget ==='0' || isNaN(monthlyBudget)==false){
        
        total.innerText = `${monthlyBudget}`;
        left_span.innerText = `${monthlyBudget}`;
        
    }

    //Here I have created a new object of function object 'Budget' declared globally in a global variable obj.
    obj = new Budget(monthlyBudget);
    
    
    
    

    
    
}

function subForm(e){
    e.preventDefault();

    var txt = expense.value;
    var val = amount.value;
    var li = document.createElement('li');
    li.style.lineHeight = '40px';
    li.style.marginTop = '10px';
    var btn = document.createElement('button');
    btn.style.cssFloat = 'right';
    btn.classList = 'btn btn-sm btn-primary';
    btn.innerText = `$ ${val}`;
    li.innerHTML = `<strong><i>${txt}:</i></strong>`;
    li.appendChild(btn);
    document.querySelector('.list-group').appendChild(li);

    

}

function SubtractValue(){
    var val = Number(amount.value);
    
    obj.moneyLeft(val);
    left_span.innerText = `${obj.MoneyLeft}`;

    var half = (1/2)*monthlyBudget;
    var one_fourth = (1/4)*monthlyBudget;
    if(obj.MoneyLeft <= half && obj.MoneyLeft > one_fourth){
        box_color.style.backgroundColor = '#f4FF81';
    }
    else if(obj.MoneyLeft <= one_fourth){
        box_color.style.backgroundColor = '#E65100';
    }
    
    if(obj.MoneyLeft <0){
        alert("ALERT: Budget limit exceeded by : "+Math.abs(obj.MoneyLeft)+" amount.");


    }

    expense.value = "";
    amount.value = "";
    
    

}


function Budget(MonthBudget){
    this.Budget = Number(MonthBudget);
    this.MoneyLeft = this.Budget;

}

Budget.prototype.moneyLeft = function(budget){

    this.MoneyLeft = this.MoneyLeft - budget;
}



