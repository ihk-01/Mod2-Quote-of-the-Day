##Quotes To Live By

Welcome and thank you for visiting Quotes To Live By. My name is Ingrid Kilmer and I developed this app as my first React development project in my bootcamp class, Women in Software Engineering (WISE) at Per Scholas. I've been programming in HTML, CSS, JavaScript, and React for three months. This is the first app I've built in React. So, while there is much room for improvement, it works and meets the requirements of my assignment. :) And, I learned a lot about React along the way. I hope you are inspired by the random quotes and enjoy discovering new quotes or finding your favorites!

##How Does It Work
Quotes To Live By displays a random quote each time the app is refreshed. In addition, there is a search field to look for different quotes using a text string, author name, or tag. A list of search results is displayed in a table.

The app was developed with React in VS Code on a Windows computer. It was the first time I wrote an app that made an API call to get the data it needed. There are two API calls being made: one for the random quote and one to retrieve data after search criteria has been submitted.

##Mentions
There are several people who helped me with this project. First, my instructors, Devin Kenney and Vicky Phung, who are simply the best! I also received help from many online resources including W3Schools.com, coolers.com, Tim Mouskhelichvilli at https://timmousk.com/blog/react-button-disable/#:~:text=To%20disable%20a%20button%20in%20React%2C%20pass%20true%20to%20the,%3B%20%7D%3B%20const%20rootElement%20%3D%20document, and many sites, including Freecodecamp.org, related to pagination and navigation using the Previous and Next buttons. 

##Challenges 
The most challenging component was the pagination. While getting the data from the API in TotalPages and Number of Items per page was easy, the logic to navigate back and forth between those pages was challenging. An improvement might be to add a page number bar, of sorts, to directly select a page number from the search results instead of using the Previous and Next buttons. There is still improvement to be made with the existing buttons because there is a bug related to navigating to/from the first and last pages of the search results that I have yet to resolve. But, if you click on the other button, it eventually gets you to where you want to go, although the logic is apparently backwards for those pages.

##Successes
I'm really proud of the fact that I could let the user input search criteria, make an API call, parse the data, and display it in a logical fashion. That part was new to me and required some research and trial and error. Many thanks to my instructors for their help and patience with me as I built this app.

##Future Plans
In the future, I'd like to add a few features. First, it would be nice to freeze the table headings. Second, I would like to resize the first column of the table. Next, as already mentioned, the Previous and Next buttons have a bug that needs to be resolved. It would also be nice to have images associated with the quotes and/or the author. Finally, I'd like to be able to replace the Random Quote at the top of a page with another quote chosen by the user from the search results.

Thank you for using the Quotes To Live By app! I hope you find some inspiration and enjoy using it every day!