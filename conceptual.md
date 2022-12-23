### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The React Router is a client-side routing method, that helps the mapping between the URL and the page through the browser, rather than through the server. It allows us to create Route components, which can be used to tell the path to look into a specific URL and what to render when it matches.

- What is a single page application?
This is when clicking the different functionality of the app causes it to partially render the component of interest, not the entire page. The browser does not reload, and thus is convenient for users. Single page applications exclusively rely on client-side routing.

- What are some differences between client side and server side routing?

Client-side routing handles the routing process and the content rendering directly on the browser. When the browser sends the request, the client (browser) is responsible in sending back the appropriate response. On the other hand, server-side routing involves the server receiving the request, routing, then sending back the appropriate data.

In some cases, client-side routing can be faster since it does not require to wait for the server's response. On the other hand, server-side routing may be better for SEO because the browser can index through the content more easily. Furthermore, since client-side routing depends on the browser rendering, it may be more vulnerable to attacks. 

- What are two ways of handling redirects with React Router? When would you use each?

1. The `Redirect` hook can be used to navigate the user to a different route, from within the React component. For example, if we want to redirect a user to a login page if they are not authenticated.

2. The `useHistory` hook allows us to access the `history` object, and allows us to navigate to different routes. When we want to send a user to a different route in response to some user-action, we can use this hook. 

Therefore, `Redirect` is generally used to navigate users to a route after certain conditions have been met, while `useHistory` is generally used for redirecting after a user action.

- What are two different ways to handle page-not-found user experiences using React Router?

1. Using the `404 Not Found` status code through the `useEffect` hook, we can render the 404 when the page is not found.

2. Using the `Switch` component, we can define a catch-all route that will match any URL that does not match any of the other defined routes.


- How do you grab URL parameters from within a component using React Router?

We can use the `useParams` hook, which has the key/value pairs of the given url params. For multiple params, we can deconstruct the hook to grab these. The keys must exactly match the variables we are naming them with. 

- What is context in React? When would you use it?

Context is a way to pass data through components without having to use props manually at every level. It can be considered as a 'global' variable for the participating React components. We would use this when we need to have the same data that is accessible at varying levels, rather than having to use prop drilling to pass data.

- Describe some differences between class-based components and function components in React.

1. The syntax of these components are different, as they are self-described. One is created with functions, and the other with classes.
2. Class based components have a state object to store and manage the state, while functions component do not, and must use hooks to manage states. 
3. Class based components have lifecycle methods, that are called at different times during the component's lifecycle. Functional components use hooks like  `useEffect` to create an effect upon some trigger conditions.
4. The `this` binding in class-based components lets us access the component's states and methods, unlike function based components. 
5. Function components are simpler and easier to read. However, when we need more complex states or lifecycle methods that cannot be managed using hooks, we can use class-based components.

- What are some of the problems that hooks were designed to solve?

Class based components may be more complex to write and read, such as the binding process with `this`. Furthermore, when trying to reuse and break down components, we must add a higher level component to share those logic. Hooks solve these issues by allowing us to build components with functions. They can help us reuse sections throughout our application, and perform side effects and perform partial rendering. 

