#!/usr/bin/env python3

import mysql.connector
import os
import json

cnx = mysql.connector.connect(user='root', password='root',
                              host='127.0.0.1',
                              database='banq', use_pure=True)


mycursor = cnx.cursor()

mycursor.execute("SELECT id, title, author, type_document, isbn, image_name, date_ordered, accepted, received, nb_emails_sent, last_checked  FROM orders")
#mycursor.execute("SELECT id, title, author, type_document, isbn, image_name, accepted, received, nb_emails_sent  FROM orders")
row_headers=[x[0] for x in mycursor.description] #this will extract row headers
rv = mycursor.fetchall()
json_data=[]
for result in rv:
    json_data.append(dict(zip(row_headers,result)))

mesLivresDataFile = open("livres.json", "w")

mesLivresDataFile.write(json.dumps(json_data, indent=4, sort_keys=True, default=str))
mesLivresDataFile.close()

cnx.close()