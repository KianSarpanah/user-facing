# User-Facing App

This app is a form with a textbox to count the number of words in inserted text.

## Quick start

- Take a Coffee
- Initial your env (on local, read also notes 3:4)
- `cd Voxy`
- `docker-compose up --build web`
- In a sepprate terminal run FE server as follows:
- `cd voxy_frontend/wordCountFrontend`
- `yarn && yarn dev`

**Programing Language:**

- Python version 3.8.9
- React

**Virtual Environment:**

- Poetry

**Libraries:**

- Vitejs
- python-decouple

**Why Vite:**

- the main advantage is that we can use any front-end framework we like (even split the teams between front and back), while having everything in the same codebase.
  **having only one repo and project helps a lot on team integration. and if we get to the point where having it all together is being a pain, it's really easy to decouple the front-end app. Since everything is being served by Django, you keep all of the pros and features of it. you can, for example, keep serving Django admin, or introduce specific Django powered pages, while keeping the frontend app as the main app.

**Notes:**

- This code can be improved, but consider it takes more time.
- 
- Authentication, Database are not included.
- This app is a simple version of bundled FE and BE, so we can structure this code base on the scale of our idea and bussiness.
- in  ` /docker/config/.env` we need these params:

```
DJANGO_SECRET_KEY=
DEBUG=True
DOMAIN_NAME=
CURRENT_ENVIRONMENT=local
```
