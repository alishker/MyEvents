class EventBrite {
    constructor() {
        this.auth_token = 'KZXZUEVF5RWRVL3NNRN5';
        this.orderby = 'date';
    }

    async queryAPI(eventName, category) {
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=KZXZUEVF5RWRVL3NNRN5`);

        // Wait for response and return as json

        const events = await eventsResponse.json();

        return {
            events
        }
    }

    async getcryptocurrencies() {
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=KZXZUEVF5RWRVL3NNRN5`)
        const categories = await categoriesResponse.json();
        return {
            categories
        }
    }
}