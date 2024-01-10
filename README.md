This is a readme file which has steps to be followed to setup development environment, dependencies and execute the project.

Step1-
Software to be installed-

Download and set up Node.js - https://nodejs.org/en/download

Download and install code editor - https://code.visualstudio.com/download

Download and install mongoDB(current edition)- https://www.mongodb.com/try/download/community

Download and install Studio 3T(to import exercise data in mongoDB)- https://studio3t.com/download/?kw=&cpn=20416211508&utm_source=adwords&utm_medium=ppc&utm_term=&utm_campaign=P-Max+%7C+Aug+23+%7C+USA&hsa_net=adwords&hsa_ad=&hsa_src=x&hsa_ver=3&hsa_grp=&hsa_acc=1756351187&hsa_tgt=&hsa_mt=&hsa_kw=&hsa_cam=20416211508&gad=1&gclid=CjwKCAjw_uGmBhBREiwAeOfsd0GjK078PPI5C_u4klqu-Ld5Lu8ETeVcMmdDWNSciv1XucvD45DdCRoCdFQQAvD_BwE

the file will be attached for database name as "userData", this file needs to import in database using studio 3T. This file contains all the collections such as exercise data and user data

Git(optional) - https://git-scm.com/downloads



Step2- Download the zip code file from myplace and extract the zip foler in preferred location or clone the project from below git link

command- https://github.com/rushikeshp614/My-Project.git

step3 -
create 2 terminal, one for backend and one for frontend


For frontend-
change the directory to frontend and type below command to install dependencies using package.json

npm install package.json

For backend-
change the directory to backend and type below command to install dependencies using package.json

npm install package.json

Make sure to start backend server first at 3000 and then front end at 3001. This is important because the endpoints are given based on this.




Import the database from STudio 3T-
1) First install the studio 3T
2) Then put the same URL string which was used to connect the database
3) Then there will be the option to import, click on that option and select BSON data and configure
4) Then add the folder path in which the provided foler(userData) is present, this data is BSON data(mongodump) which is nothing but a database containing all the collections and press on execute or play button
This will import all the exercise data and user data in your database

