// work
curl http://0.0.0.0:8000/index.php?rest_route=/myplugin/v1/tables
curl http://0.0.0.0:8000/index.php?rest_route=/myplugin/v1/tables/

// work ?? Do not know why it is
curl http://0.0.0.0:8000/wp-json/myplugin/v1/tables/

// do not work
curl http://0.0.0.0:8000/wp-json/myplugin/v1/tables