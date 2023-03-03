FROM nginxinc/nginx-unprivileged:stable-alpine

USER root

RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/*

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/projeto-lila-front /usr/share/nginx/html
COPY nginx/startNginx.sh /

RUN chmod -R 777 /var/cache/nginx/

USER nginx

CMD ["sh","startNginx.sh"]

EXPOSE 8080