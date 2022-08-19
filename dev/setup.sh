#!/bin/bash
# setup.sh
# Author: Andrew Stene
# This script is used to automate the setup of a dev environment for the
# cattle reproduction scheduler react app

apt update
apt upgrade 
apt install npm

npm install
