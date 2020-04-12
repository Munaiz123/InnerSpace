# InnerSpace # 

## Welcome to InnerSpace! ##

InnerSpace is a property/tenant management web application for landlords that allows them to develop a relationship with their tenants while also keeping track of their units through notes. Landlords will be able to register their buildings and invite their tenants to join thier building and assign them a unit number. Tenants will be able to submit tickets, sign leases as well as communicate with their landlord more effieciently. 

We're still underdevelopment and always looking for ways to improve. If you wish you contribute or do a code review please fork and submit a pull request. I would especially welcome UI/UX designers to collaborate as we currently need help in making the the application more aestheically appealing. 

## Application Stack & Dependancies ##
Innerspace is developed with using **PERN Stack: PostgreSQL, Express.js, React (Redux for state management) and Node**. Sequelize is the ORM used to create the models' fields as well as set up associations between the models. Innerspace believes in test-driven development and uses the Mocha framework with Chai assertions to test APIs as well as Reducers across the application.


## Running the Program for development ##
1. Fork and clone to your local machine
2. CD into the folder and execute _npm install_
3. While still in the folder be sure to seed your data into the database by executing _npm run seed_. With out seeding the dummy data you wont be able to login. 
4. To start the development server to start contributing to the development of the project execute _npm run start-dev_. This will open a port on _localhost:8080_.

### Testing Scripts ###
As mentioned above, InnerSpace strives to be a well tested & well documented project. For that reason we have split different scripts to test different horizontal slices of the application:
* _npm run test-seedFile_ will launch Mocha to test the seedfile ( script/seed.spec.js)
* _npm run test-store_ will launch Mocha that tests the Redux stores as well action creators + thunks (client/store)
* _npm run test-everything_ will launch mocha to test all horizontal slices all at once. 

