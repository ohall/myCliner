 #!/bin/bash
set -u
set -e

FTP_SITE='tiller.dreamhost.com'
echo "connecting to FTP_SITE..."
ncftpput -R $FTP_SITE /mycliner.com/app/ /Users/oakley/Documents/projects/Podcast/myCliner/app/* #*.jpg *.xml *.mp3 *.pdf