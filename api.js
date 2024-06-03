document.getElementById("fetch-button").addEventListener('click',function(){
  fetch('')
  .then(function(response){
    return response.json();

  })
  .then(function(response){
    console.log(response)
  })
  .catch(function(error){
    console.log("Error");
  
});
})
