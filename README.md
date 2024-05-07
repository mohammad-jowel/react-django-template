#React Django Template

This project is a simple movie catalog application using React for the frontend and Django REST framework for the backend.

## Example

- **Get Request**: The React app makes a GET request to localhost:8000/api/ to fetch and render the list of movies.
- **Post Request**: The React app includes a form that sends a POST request to localhost:8000/api/ to add a new movie to the backend.

# Installation
 Use the following command to clone the repository to your local machine.
   ```bash
   git clone <repository-url>
   ```
## Backend Setup
  ```bash
  cd backend
  pip install djangorestframework
  python manage.py migrate
  python manage.py runserver
  ```

## Frontend Setup
  open another terminal
  ``` bash
  cd frontend
  npm install
  npm run dev
  ```
** Open locallhost:5173 in a browser**
