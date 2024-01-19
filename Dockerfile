# start from base
FROM node:20

# copy our application code
WORKDIR /usr/src/app
COPY . .

# fetch app specific deps
RUN npm install

# expose port
EXPOSE 3000

# start app
CMD ["npm", "start"]
