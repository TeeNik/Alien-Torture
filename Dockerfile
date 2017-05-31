FROM nginx:1.13.0-alpine

RUN apk add --update bash

COPY ./nginx.conf /etc/nginx
COPY ./front/html /usr/share/nginx/site/html
COPY ./front/game /usr/share/nginx/site/game
COPY ./front/services /usr/share/nginx/site/services
COPY ./front/static/ /usr/share/nginx/site/static
COPY ./front/resources /usr/share/nginx/site/resources


RUN mkdir /usr/share/nginx/logs

CMD /bin/bash -c "echo \"listen $PORT;\" > /etc/nginx/listen.conf && nginx -g 'daemon off;'"
