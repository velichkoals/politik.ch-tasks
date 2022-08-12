## Changes:
<h4>Solution 1</h4>

- received data from API only once, not on every keyup, which optimize the whole application 
- set data to localStorage

<h4>Solution 2</h4>

- created store using Redux (to avoid props drilling and for project extensibility)
- fixed SearchBar problems (include lowerCase event)
- created scss variables for easy writing styles
#

<h3>Used libs:</h3>

- axios - https://axios-http.com
- react-router/react-router-dom - https://reactrouter.com

<h3>Linters:</h3>

- prettier - https://prettier.io
- eslint - https://eslint.org
