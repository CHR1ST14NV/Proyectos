FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY src/ ./src/
EXPOSE 3000
CMD ["serve", "-s", "src", "-l", "3000"]
