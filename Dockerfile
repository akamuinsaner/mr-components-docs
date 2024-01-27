FROM node:20-alpine

ARG PORT=3000

COPY . /root/webapp/
WORKDIR /root/webapp

RUN npm config set registry https://registry.npmmirror.com && \
    npm install && \
    npm run build

EXPOSE ${PORT}

# Start Script
CMD npm run start -- -p ${PORT}