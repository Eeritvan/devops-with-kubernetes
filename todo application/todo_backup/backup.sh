#!/usr/bin/env bash
set -e

if [ $URL ]
then
    DATE=$(date +%F)
    FILENAME="backup_$DATE.sql"
    pg_dump -v $URL > $FILENAME

    gcloud auth activate-service-account --key-file=/usr/src/app/private-key.json

    if ! gsutil ls -b gs://todoapp-backups/ &>/dev/null; then
        gsutil mb gs://todoapp-backups/
    fi

    gsutil cp $FILENAME gs://todoapp-backups
fi