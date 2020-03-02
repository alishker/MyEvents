

const eventbrite = new EventBrite();
const ui = new UI();


document.getElementById('submitBtn').addEventListener('submit', loadEvents);

function loadEvents(e){
   e.preventDefault();
   const eventName = document.getElementById('event-name').value;
   const categoryList = document.getElementById('category').value;
   Console.log(eventName);
}

