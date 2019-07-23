var self = this
hide("purchases")
dpd.purchases.get({userId: me.id}, (results) => {
  self.purchases = results;
  console.log("RESULTS", results)
})