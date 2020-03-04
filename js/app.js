

const eventbrite = new EventBrite();
const ui = new UI();


document.getElementById('submitBtn').addEventListener('submit', loadEvents);

function loadEvents(e){
   e.preventDefault();
   const eventName = document.getElementById('event-name').value;
   const categoryList = document.getElementById('category').value;
   //Console.log(eventName + ':' + categoryList);
   if(eventName !==''){
      console.log('sucess');
   }
   else{
      //console.log('failed..')
      ui.printMessage('Add an event or a city' ,'alert alert-danger mt-4');
   }
}

