 #!/bin/bash
set -u
set -e


##
# Add FTP login info locally. DO NOT COMMIT THIS FILE WITH LOGIN INFO
##

FTP_SITE=''
USER=''
PASSWD=''
echo "connecting to FTP_SITE..."
ncftpput -R -u $USER -p $PASSWD $FTP_SITE /myCliner.com/app/ /Users/oakley/Documents/projects/Podcast/myCliner/app/* #*.jpg *.xml *.mp3 *.pdf