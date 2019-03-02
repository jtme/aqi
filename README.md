# aqi
Measure AQI based on PM2.5 or PM10 with a Raspberry Pi and a SDS011 particle sensor

Plotting of live available data via plot.ly


Quick Install Walkthrough

Based on Raspberry Pi Zero W and Generic SDS011 particle sensor. 

Assamble hardware and install Raspbian Lite from:
https://www.raspberrypi.org/downloads/raspbian/

Configure Wifi and SHH access. Once sucsessfuly connected install following packages:

sudo apt install git-core python-serial python-enum lighttpd

Once done, grab the python script
sudo wget -O /home/pi/aqi.py https://raw.githubusercontent.com/jtme/aqi/master/python/aqi.py

Adjust permissions for pi user and create empty .json file
sudo chown pi:pi /var/www/html/ && sudo touch /var/www/html/aqi.json

sudo chmod +x aqi.py && sudo ./aqi.py

Schadule the script - open the crontab file:

crontab -e

and add the following line at the end:

@reboot cd /home/pi/ && ./aqi.py

then 

wget -O /var/www/html/index.html https://raw.githubusercontent.com/jtme/aqi/master/html/index.html &&
wget -O /var/www/html/aqi.js https://raw.githubusercontent.com/jtme/aqi/master/html/aqi.js &&
wget -O /var/www/html/style.css https://raw.githubusercontent.com/jtme/aqi/master/html/style.css &&
wget -O /var/www/html/plot.js https://raw.githubusercontent.com/jtme/aqi/master/html/plot.js &&
wget -O /var/www/html/plotly-v1.39.4.min.js https://raw.githubusercontent.com/jtme/aqi/master/html/plotly-v1.39.4.min.js

And done.


NOTE TO MYSELF html/plot.js contains hardcoded IP. Update to work properly. 

