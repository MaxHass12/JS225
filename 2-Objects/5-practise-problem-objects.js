const invoices = {
  unpaid: [],
};

invoices.add = function(clientName, amountOwed) {
  const obj = { name: clientName,
                amount: amountOwed,
              };
  this.unpaid.push(obj);
};

invoices.totalDue = function() {
  return this.unpaid.reduce((sum, obj) => {
    return sum + obj.amount;
  }, 0);
}

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.paid = [];

invoices.payInvoice = function(clientName) {
  const unpaid = [];

  this.unpaid.forEach(invoice => {
    if(invoice.name === clientName) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  });

  this.unpaid = unpaid;
}

invoices.totalPaid = function() {
  let total = 0;
  for(let invoice of this.paid) {
    total += invoice.amount;
  }
  return total;
}

console.log(invoices.totalDue(), invoices.totalPaid());

invoices.payInvoice("Due North Development");

console.log(invoices.totalDue(), invoices.totalPaid());

invoices.payInvoice("Slough Digital"); 

console.log(invoices.totalDue(), invoices.totalPaid());


