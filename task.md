github.com has public APIs to get list of users: REST: “https://api.github.com/users”. GraphQl: “https://api.github.com/graphql”

There are helpfull parameters like “per_page” and “since”, check them.You need to create a single page application, which allows to get list of github users. Each row contains login, profile link (html_url) and avatar preview(100x100). Clicking on row should result in opening new route with bigger avatar version and additional user info from “https://api.github.com/users/:username”, such as name, followers, following, created_at, company, email, location, blog, bio.

We expect application will allow to browse at least first 100 users.

Using React, ES2015 and one way of data organization as Redux or Apollo GraphQL is required.
