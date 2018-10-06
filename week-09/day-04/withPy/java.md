# Alopex Orientation Exam

## Tourist Information

Build a web application for tourists to find the best attractions.

## Endpoints

Create the following endpoints:

### GET `/`

The main page is rendered:

![main](assets/main.png)
-  all known attractions are listed in a table
-  a form is displayed to add a new attraction

### POST `/add`

A new attraction is saved:
-  validate the user input, every field is required
    -  (optional) display an error message if the validation is failed
-  save the new attraction to the database (if all fields are provided and befit the database constraints)
-  redirect to the main page

### GET `/edit/{id}`

The main page is rendered with the form prefilled with the attraction details:
-  all known attractions are listed in a table
-  a form is displayed to edit the attraction specified by the `id`
 
### GET `/budge`

The list containing the cheapest attractions of the following categories are returned in **JSON** format:
- restaurant
- park
- museum

example answer:
```json
{
    "attractions": [
        {
            "id": 3,
            "name": "Pulitzer",
            "city": "Budapest",
            "price": 1200,
            "longitude": 47.4841,
            "latitude": 19.0602,
            "category": "restaurant",
            "duration": 60,
            "recommendedAge": 3
        },
        {
            "id": 4,
            "name": "Heroes' Square",
            "city": "Budapest",
            "price": 0,
            "longitude": 47.4841,
            "latitude": 19.0601,
            "category": "park",
            "duration": 30,
            "recommendedAge": 3
        },
        {
            "id": 2,
            "name": "House of Terror",
            "city": "Budapest",
            "price": 3000,
            "longitude": 47.4841,
            "latitude": 19.0602,
            "category": "museum",
            "duration": 120,
            "recommendedAge": 3
        }
    ]
}
```
 
## 2) Question time
 -  Write an SQL query to get all `Renault` cars which are more expensive than 8000
 -  Write an SQL query to decrease all `Volkswagen` car's price by 100 units
 ![main](assets/cars-for-sale-table.jpg)

## optional) Endpoint Testing
-  Create a test case for each endpoint to test if the returned status code is `200 OK`
-  Create a test case for a non-existing endpoint to test if the returned status code is `404 Not Found`
-  Create a test case for the `/budge` endpoint to test if the correct attractions are returned
