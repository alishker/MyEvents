

const eventbrite = new EventBrite();
const ui = new UI();


document.getElementById('submitBtn').addEventListener('submit', loadEvents);

function loadEvents(e){
   e.preventDefault();
   const eventName = document.getElementById('event-name').value;
   const categoryList = document.getElementById('category').value;
   //Console.log(eventName + ':' + categoryList);
   if(eventName !==''){
      eventbrite.queryAPI(eventName, category)
      .then(events => {
           // Check for events
           const eventsList = events.events.events;
           if(eventsList.length > 0 ) {
                // Print the events
                ui.displayEvents(eventsList);
           } else {
                // There are no events, print a message
                ui.printMessage('No Results Found', 'text-center alert alert-danger mt-4');
           }
      })
   }
   else{
      //console.log('failed..')
      ui.printMessage('Add an event or a city' ,'text-centre alert alert-danger mt-4');
   }
}

