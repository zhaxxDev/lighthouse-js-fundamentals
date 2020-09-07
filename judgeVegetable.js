const judgeVegetable = (vegetables, metric) => {
  // Code here!
  var value = 0;
  var name = "";
  for(var veggie of vegetables){
    if (veggie[metric]>value){
      name = veggie['submitter'];
      value = veggie[metric];
    }
  }
  return name;
}