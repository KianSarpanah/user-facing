# User-Facing App

This app is a form with a textbox to count the number of words in inserted text.

## Quick start

- Take a Coffee
- Initial your env (on local, read also notes 3:4)
- `cd Voxy`
- `docker-compose up --build web`
- In a sepprate terminal run FE server as follows:
- `cd voxy_frontend/wordCountFrontend`
- `yarn &&  yarn build && yarn dev`

**Programing Language:**

- Python version 3.8.9
- React

**Virtual Environment:**

- Poetry

**Libraries:**

- Django
- Vitejs
- python-decouple

**Why Vite:**

- the main advantage is that we can use any front-end framework we like (even split the teams between front and back), while having everything in the same codebase.
  having only one repo and project helps a lot on team integration. and if we get to the point where having it all together is being a pain, it's really easy to decouple the front-end app.

**Notes:**

- This code can be improved, but consider it takes more time.
- Authentication, Database are not included.
- This app is a simple version of bundled FE and BE, so we can structure this code base on the scale of our idea and bussiness.
- in  ` /docker/config/.env` we need these params:

```
DJANGO_SECRET_KEY=
DEBUG=True
DOMAIN_NAME=
CURRENT_ENVIRONMENT=local
```

##### **Issue with Docker:**

just run server directly, however before:

* RUN ` pip3 install poetry=="1.4.1"`
* `poetry shell`
* `poetry install `
* `python3 manage.py runserver`
