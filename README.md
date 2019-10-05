This project was build for demonstrate and sort data from data.json file.
If you want use your own data you can put json data to file /src/data/data.json

SPIN UP APP:

You should have Docker installed on your computer:

for mac os users:
- install homebrew: http://osxdaily.com/2018/03/07/how-install-homebrew-mac-os/
- install Docker:
from docs https://docs.docker.com/docker-for-mac/
or from this article https://codingbee.net/docker/install-docker-for-mac-using-homebrew

for windows users:
- install Docker: https://docs.docker.com/docker-for-windows/install/


after installing and running Docker on your computer please open terminal and write this commands:
#Change your working directory to directory with app
cd ~/PATH/sort-table-test   -(path to file with app)

#Run docker command in command line
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev

#You can now view sort-table-test app in the browser
http://localhost:3001/

#stop app
CTRL+C


If you have any questions, don't hesitate to write me by email:  oleg.b@helpware.io
