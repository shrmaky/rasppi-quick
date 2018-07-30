# rasppi-quick

#### This is a raspberry Pi Camera quick starter application with React & Express with Barcode Scanning. You can use this application to create either front-end application or write API's

##### Machine Used: Raspberry Pi 3 Model-B
##### OS - Raspian OS Jessy & Stretch
##### Camera Used: Raspberry Pi 

#### Step1: Clone the library

#### Step2: ```npm install``` //this install all the packages

####Step3(Optional): In Raspberry PI OS - Jessy & Stretch, the cam quality inside chromium browser is poor due to Chrome issues.If you face this issue, run following command
                    sudo nano /etc/modules
                    
                    #Add these values inside modules
                    i2c-dev
                    snd-bcm2835
                    bcm2835-v4l2
                    
                    echo 'options bcm2835-v4l2 gst_v4l2src_is_broken=1' | sudo tee -a /etc/modprobe.d/bcm2835-v4l2.conf
                    echo 'bcm2835-v4l2' | sudo tee -a /etc/modules-load.d/modules.conf
                    
#### Step 4: npm start run:dev
             
#### Help:
    1. Best Hack: If you are facing any error in running server, try changing port inside server.js
    2. The application also includes Barcode, Camera, Qrcode & Webcam library for future uses
    
    
#### Raspberry PI Beginner:
        Things you need to start:
        1. Raspberry PI
        2. Monitor with HDMI Cable
        3. Keyboard & Mouse
        4. Power cable to connect Raspberry
        5. Raspberry PI Camera
         
    
###### References -
  1. [How to install Raspberry Pi Camera](https://thepihut.com/blogs/raspberry-pi-tutorials/16021420-how-to-install-use-the-raspberry-pi-camera)
  2. [Pi-Camera in Browser](https://reprage.com/post/pi-camera-module-in-the-browser)
  3. [Setting up fingerprints for Raspberry Pi](https://tutorials-raspberrypi.com/how-to-use-raspberry-pi-fingerprint-sensor-authentication/)
  4. [Getting started Nodejs & Raspberry PI](https://thejackalofjavascript.com/getting-started-raspberry-pi-node-js/)
  5. [Running Nodejs web server on Raspberry PI](https://blog.cloudboost.io/how-to-run-a-nodejs-web-server-on-a-raspberry-pi-for-development-3ef9ac0fc02c)
  6. [Raspberry PI Barcode Scanner](https://www.codepool.biz/raspberrypi-barcode-scanner-webcam-python.html)
  7. [Tutorial - Nodejs Restful API](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
  8. [Mongoose.js - Connector Nodejs & Mongo](http://mongoosejs.com/docs/index.html)
  9. [Quick React Boilerplate](https://github.com/theonlymikeever/quick-react)
  10. [JS Library Barcode Scanning](https://serratus.github.io/quaggaJS/)
