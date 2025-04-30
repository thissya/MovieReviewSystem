# Movie Review System

## Overview

The Movie Review System allows users to view movies, read descriptions, check out cast and crew, and leave reviews with ratings. The admin has special privileges to add movie posters, description, cast, and crew details.

---

## Features

### Admin Features:
- Login to the admin panel.
- Add new movies with a poster, description, cast, and crew.
- Manage the movie database.

### User Features:
- Sign up and login.
- Browse the list of movies added by the admin.
- View movie details, including the poster, description, cast, and crew.
- Rate and review movies.
- Logout (redirects to landing page).

---

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Database:** MongoDB 
- **Styling:** CSS, TailwindCSS
- **Version Control:** Git/GitHub

---


| **Method** | **Route**                  | **Access** | **Description**                                   |
|------------|----------------------------|------------|---------------------------------------------------|
| POST       | `/admin/login`             | Admin      | Login as admin                                    |
| POST       | `/admin/movie/add`         | Admin      | Add a new movie (poster, description, cast, crew) |
| DELETE     | `/admin/movie/:id`         | Admin      | Delete a specific movie by ID                     |
| GET        | `/admin/dashboard`         | Admin      | View all added movies                             |
| POST       | `/user/signup`             | Public     | User registration                                 |
| POST       | `/user/login`              | Public     | User login                                        |
| GET        | `/movies`                  | Public     | List all movies                                   |
| GET        | `/movies/:id`              | Public     | View details of a specific movie                  |
| POST       | `/movies/:id/review`       | User       | Post a review and rating for a movie              |
