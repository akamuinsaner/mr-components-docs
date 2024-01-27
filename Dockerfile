FROM node:20-alpine

COPY . /root/webapp/
WORKDIR /root/webapp

RUN npm config set registry https://registry.npmmirror.com && \
    npm install && \
    npm run build

EXPOSE 80

# Start Script
ENTRYPOINT [ "npm", "run", "start" ]