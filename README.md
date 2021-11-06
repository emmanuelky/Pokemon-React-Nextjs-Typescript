#Brief Details

The API used for this project is (https://pokeapi.co/).

This project was built using React, Next js, Typescript and TailwindCSS.

My first approach was to study the api and understand the different type of data structures, with that i was able to get the interface types needed for typescript.

Next, i used the GetStaticProps provided by Next js to fetch the data which was then pass as props to my component.
Since i already initialized the data types i was able to assigned the fetch data to the given types.

I displayed the data available which is the pokemon names. Then i included a search bar which will return only the pokemon name been search.

I created a pokemon detailpage called (pokemon) and added the [id] route so each pokemon will be redirected to that page when clicked from the home page. I used the (Link) property provided by next js to link each pokemon to their respective pages using their unique property (name).

Inside the pokemon detail page i used the GetServerSideProps provided by next js which included the (context) for getting the current page url which included the pokemon's name.
I then passed it to the component as a prop which i used in displaying other informations about the pokemon like the image, species, weight, stats, moves and types.



##Improvment##
In due time i will improve on the app to load next and previous pages.



