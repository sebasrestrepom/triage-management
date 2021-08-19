<h1 align="center">Triage Project</h1>
<p align="center">
  <img src="https://i.ibb.co/LSzdLqk/Screen-Shot-2021-08-13-at-2-54-33-AM.png" width="300" alt="TRIAGE LOGO" />
</p>

### Application to manage triage in a hospital

# Description

### 1. It is planned to create a manager for the triage area of a hospital, which classifies patients by priority and waiting time, so that they are attended in the shortest time. The following endpoints are proposed for the backend: 

##     POST / patient
    a. A patient is registered and assigned a priority (Metadata automatically) 
##     GET /patient 
    b. Get all patients in whitelist ordered by asc createdAt 
##     PUT/ patient
    c. Update the data of a patient registred when the info haved a error.
##     DELETE/ patient
    d. Delete a patient of the whitelist when they have already been treated.


### 2.  To assign the priority of a patient, the following items are taken into account:
      
      - 1: Resuscitation
      - 2: Emergency
      - 3: Urgency
      - 4: Minor Urgency
      - 5: No Urgency

### Tech stack: 
    - NodeJS 
    - Mysql 
    - Express
    - Migrations (Knex)
    - Test 1 Endpoint (JEST)
    - CI (GitHub)
    - Dockerfile

## Patient table structure

Next we will see how the table of patients is structured in the database

<p align="center">
  <img src="https://i.ibb.co/6Y768PX/Screen-Shot-2021-08-13-at-1-39-42-AM.png" width="300" alt="table model" />
</p>

## Architecture diagram

Next we will see a model of the system architecture

<p align="center">
  <img src="https://i.ibb.co/7bfLGDq/Screen-Shot-2021-08-13-at-2-57-11-AM.png" width="300" alt="system model" />
</p>

# Installation

For the installations you need to first clone the repository and finally you need to install the npm packages

```bash
#Clone repository
$ git clone https://github.com/sdrestrepo/Triage-management.git

#install npm packages 
$ npm install

```

# Running the app

To run the application enter the following command in the console

```bash

# run application
$ npm run dev

```

# API Docs

For more information about methods present on this API visit:

```bash

# copy this url in your browser
http://localhost:3000/docs/

```

In the following image we will see a screenshot of the method that we will find in Swagger

<p align="center">
  <img src="https://i.ibb.co/hsxPyYc/Screen-Shot-2021-08-13-at-2-01-02-AM.png" width="800"  alt="Endpoints of the Api" />
</p>

You can also see an example of the process to use a method of type post

<p align="center">
  <img src="https://i.ibb.co/kHzg5B2/Screen-Shot-2021-08-13-at-2-02-52-AM.png" width="800"  alt="Example Method POST" />
</p>

# Test

You can test all the functionalities contained in this API, for this execute the following command in console

```bash

# tests
$ npm run test

```

## 🐞 Did you find some issue o improvment?

Feel free to contribute and do whatever to consider better to this project.
