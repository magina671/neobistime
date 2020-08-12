FROM linuxserver/letsencrypt

COPY ./config/swag/default.nginx /config/nginx/site-confs/default

COPY ./config/swag/ssl.nginx /config/nginx/ssl.conf

COPY ./config/swag/ngnix_conf.nginx /config/nginx/nginx.conf
