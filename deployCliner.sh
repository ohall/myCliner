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
ncftpput -R -u $USER -p $PASSWD $FTP_SITE /mycliner.com/app/ /Users/oakley/Documents/projects/myCliner/app
