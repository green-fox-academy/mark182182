# Alopex Orientation Exam

## Tourist Inform

Build a web application that people can use to find the best attractions

## Endpoints

Create the following endpoints:

### GET `/`

The main page is rendered:

![main](assets/main.png)
-  all known attractions are listed in a table
-  a form is displayed to add a new attraction
-  if submitted and response is ok, the frontend should append the new attraction to the table
-  clicking on the edit button should fill the form with the row's data

### POST `/add`

A new attraction is saved:
-  validate the user input, every field is required except id  
-  if id is NOT provided, add a new attraction to the database (if all fields provided and befit to the database constraints)
-  if id is provided, update the existing record
-  the body of the request should be like:
 

```json
{
    "id": 1,
    "name": "Kerkyra",
    "city": "Budapest",
    "price": 1800,
    "latitude": 47.484174,
    "longitude": 19.060234,
    "category": "restaurant",
    "duration": 10.0,
    "recommendedAge": 13
}
```
-  and the response should be like:

```json
{
  "status": "ok",
  "id": 1
}
```
  
The list containing the cheapest attractions of the following categories are returned in **JSON** format:
- restaurant
- park
- museum

example answer:
```json
[
    {
        "id": 3,
        "name": "Pulitzer",
        "city": "Budapest",
        "price": 1200,
        "latitude": 47.484162,
        "longitude": 19.060225,
        "category": "restaurant",
        "duration": 10.0,
        "recommendedAge": 3
    },
    {
        "id": 4,
        "name": "Heroes' Square",
        "city": "Budapest",
        "price": 0,
        "Latitude": 19.060100,
        "logitude": 47.484110,
        "category": "park",
        "duration": 30,
        "reccomendedAge": 3
    },
    {
        "id": 2,
        "name": "House of Terror",
        "city": "Budapest",
        "price": 3000,
        "latitude": 47.484110,
        "longitude": 19.060172,
        "category": "museum",
        "duration": 120,
        "recommendedAge": 3
    }
]
```

## 2) Question time
 -  Write an SQL query to get all `Renault` cars which are more expensive than 8000

SELECT * FROM CarsForSale WHERE manufacturerName = 'Renault' AND acquisitionPrice > 8000;

 -  Write an SQL query to decrease all `Volkswagen` car's price by 100 units

UPDATE CarsForSale SET acquisitionPrice = acquisitionPrice - 100 WHERE manufacturerName = 'Volkswagen';

 ![main](assets/cars-for-sale-table.jpg)

## optional) Endpoint Testing
-  Create a test case for each endpoint to test if the returned status code is `200 OK`
-  Create a test case for a non-existing endpoint to test if the returned status code is `404 Not Found`
-  Create a test case for the `/budge` endpoint to test if the correct attractions are returned
