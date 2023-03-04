Task:
Build a book search app that retrieves data from a book API and stores the user's search history in localStorage.

Figma Link: https://www.figma.com/file/Krk3JcCuqBS36xOf1W1yvN/Social-Media-App-Using-Cookies-and-Session-Storage?node-id=0%3A1&t=vY1RTGrI4VPOLt8c-1

Requirements:
Create a search form with an input field where the user can enter a book title or author name.

Retrieve the book data for the search query entered by the user from a book API. Use the Google Books API (example link: https://www.googleapis.com/books/v1/volumes?q=percy+jackson) to fetch data for the books.

Display the book data on the page, including the book title, author name, cover image, and other relevant information.

Store the user's search query in localStorage so that their search history is displayed the next time they visit the page. Show their search history in another page as shown in the figma.

Allow the user to view their search history and click on previous search queries to view the book data again.

Allow the user to clear their search history.

Deploy the project.

Marking Scheme:
The project will be evaluated based on the following criteria:

Search form with input field for book title or author name: 10 points

Retrieval of book data from API: 20 points

Display of book data on the page: 20 points

Storage of search queries in localStorage: 15 points

Display of search history on a separate page and ability to view book data for previous search queries: 20 points

Ability to clear search history: 10 points

Deployment: 5 points

{
"kind": "books#volume",
"id": "oXZUAwAAQBAJ",
"etag": "iSeAA0Gq9Jo",
"selfLink": "https://www.googleapis.com/books/v1/volumes/oXZUAwAAQBAJ",
"volumeInfo": {
"title": "Percy Jackson and the Greek Gods",
"authors": [
"Rick Riordan"
],
"publisher": "Penguin UK",
"publishedDate": "2014-08-07",
"description": "\"If you like horror shows, bloodbaths, lying, stealing, backstabbing and cannibalism, then read on...\" Who could tell the true stories of the gods and goddesses of Olympus better than modern-day demigod Percy Jackson? In this action-packed tour of Greek mythology, Percy gives his hilarious personal views on the feuds, fights and love affairs of the Olympians. Want to know how Zeus came to be top god? How many times Kronos ate one of his own kids? How Athena literally burst out of another god's head? It's all here in black and white...",
"industryIdentifiers": [
{
"type": "ISBN_13",
"identifier": "9780141356358"
},
{
"type": "ISBN_10",
"identifier": "0141356359"
}
],
"readingModes": {
"text": true,
"image": false
},
"pageCount": 432,
"printType": "BOOK",
"categories": [
"Juvenile Fiction"
],
"averageRating": 4,
"ratingsCount": 18,
"maturityRating": "NOT_MATURE",
"allowAnonLogging": true,
"contentVersion": "1.14.18.0.preview.2",
"panelizationSummary": {
"containsEpubBubbles": false,
"containsImageBubbles": false
},
"imageLinks": {
"smallThumbnail": "http://books.google.com/books/content?id=oXZUAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
"thumbnail": "http://books.google.com/books/content?id=oXZUAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
},
"language": "en",
"previewLink": "http://books.google.co.in/books?id=oXZUAwAAQBAJ&printsec=frontcover&dq=percy+jackson&hl=&cd=1&source=gbs_api",
"infoLink": "https://play.google.com/store/books/details?id=oXZUAwAAQBAJ&source=gbs_api",
"canonicalVolumeLink": "https://play.google.com/store/books/details?id=oXZUAwAAQBAJ"
},
"saleInfo": {
"country": "IN",
"saleability": "FOR_SALE",
"isEbook": true,
"listPrice": {
"amount": 353.11,
"currencyCode": "INR"
},
"retailPrice": {
"amount": 198.01,
"currencyCode": "INR"
},
"buyLink": "https://play.google.com/store/books/details?id=oXZUAwAAQBAJ&rdid=book-oXZUAwAAQBAJ&rdot=1&source=gbs_api",
"offers": [
{
"finskyOfferType": 1,
"listPrice": {
"amountInMicros": 353110000,
"currencyCode": "INR"
},
"retailPrice": {
"amountInMicros": 198010000,
"currencyCode": "INR"
}
}
]
},
"accessInfo": {
"country": "IN",
"viewability": "PARTIAL",
"embeddable": true,
"publicDomain": false,
"textToSpeechPermission": "ALLOWED",
"epub": {
"isAvailable": true,
"acsTokenLink": "http://books.google.co.in/books/download/Percy_Jackson_and_the_Greek_Gods-sample-epub.acsm?id=oXZUAwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
},
"pdf": {
"isAvailable": false
},
"webReaderLink": "http://play.google.com/books/reader?id=oXZUAwAAQBAJ&hl=&source=gbs_api",
"accessViewStatus": "SAMPLE",
"quoteSharingAllowed": false
},
"searchInfo": {
"textSnippet": "&quot;If you like horror shows, bloodbaths, lying, stealing, backstabbing and cannibalism, then read on...&quot; Who could tell the true stories of the gods and goddesses of Olympus better than modern-day demigod Percy Jackson?"
}
}
