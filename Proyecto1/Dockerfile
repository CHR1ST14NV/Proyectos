FROM node:18-alpine
WORKDIR /app

# utilidades para servir y compilar scss
RUN npm install -g serve sass

EXPOSE 3000
# compila scss -> css y sirve /src
CMD ["sh","-c","sass --no-source-map --watch src/style.scss:src/style.css & serve -s src -l 3000"]
