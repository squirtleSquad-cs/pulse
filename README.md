<h1 align="center">Pulse: Tech Interview Planner</h1>

<p align="center">
  <img src ="./client/assets/pulse-icon.png"/>
</p>

## Description
Pulse is a interview tracker for various developers looking for ways to better organize the complexity of juggling multiple job interviews at once, while applying to many companies. 

## Stack
### React
React was a fundamental given for the development team as we felt its unique modularity, would give the frontend and backend teams a smooth foundation to write code, while simultaneously allowing an easier coordination of endpoints between the two teams. React's usage of the Virtual DOM also allows incredibly quick React object manipulation, making an overwhelmingly efficient frontend developer environment, and allows the creation of modular components that smoothed out the engineering process. 

### Redux
The use of the Redux state management library was chosen to create a single source of data that could interact with the entire application with consistent performance. Redux also avoids prop drilling which can be performance expensive. By connecting multiple components it ensures that each connected component only extracts the required pieces of data from the store state that are needed by that component. In turn, the component will need to re-render less often, because generally these specific pieces of data haven't changed. In addition, Redux implements many internal performance optimizations to guarantee that components only re-render when it actually needs to, finally, by keeping a local storage of the data as a Cache on the store, it avoids unnecessary server calls and gives the user a smooth experience.

### Material-UI
Thinking of the end user the use of a UI Framework can bring a lot of advantages. In this case the Google Material Design was chosen with the focus of enforcing mobile first development, screen sensitive design and aria label accessibility. From a developer perspective it gives speed and consistency to the development process.### TypescriptIn a developer perspective TypeScript comes to make the code easier to read, understand and debug. Leveraging productive development tools for JavaScript IDEs and practices, like static checking.

### MongoDB (NoSQL)
MongoDB's relative simplicity, allows for an expressive query language that developers would appreciate, if any other engineer wanted to itereate over this application. The flexibility of the MongoDB schema also means that it has a dynamic schematic architecture, and work very well with non-structured data and storage. 

### Node / Express
Node and Express was chosen to keep “language consistency" between the frontend and the backend, Express' incredibly versatile Middleware modules, allows for an incredibly performant server environment, and assists in performing efficient server responses and requests. Express is also very customizable, and its massive ecosystem combined with Node, we felt that Express was an obvious choice for our product. 