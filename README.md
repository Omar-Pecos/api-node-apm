API Apm
===

- [API Apm](#api-apm)
  * [Description](#description)
    + [Sequelize Models](#sequelize-models)
      - [Apm](#apm)
    + [Routes](#routes)
  * [Installation and Usage](#installation-and-usage)
      - [Run server](#run-server)
  * [Url of the API deployed](#url-of-the-api-deployed)
    [tags: `Documentation` `Node` `Express` `Sequelize` `API` `MySQL`]

## Description

This project is a **Node** + **Express** + **Sequelize (MySQL)** APIRest using **async/await** 
to store data related to our favorite videos of the TV show [APM?](https://www.ccma.cat/tv3/apm/)

The original idea is to use this API data and then build a Flutter App or web application.

### Sequelize Models

#### Apm

```
  {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
      },
      command: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true
      },
      desc: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
```

### Routes

> **URL** is `http://localhost:3000`

GetAll
>GET - **URL**/api/v1/apm

GetOne
> GET - **URL**/api/v1/apm/:id

Create
> POST - **URL**/api/v1/apm

Edit
> PUT -  **URL**/api/v1/apm

Delete
> DELETE - **URL**/api/v1/apm/:id


## Installation and Usage

To run this API in local you need **npm**

#### Run server

Run `npm run dev` or `nodemon index.js` for start server (with file changes reloading). The API will be listening at `http://localhost:3000/`

Run `npm start` or `node index.js` for a start server. The API will be listening at `http://localhost:3000/`


Url of the API deployed
---
> [API Apm](https://api-node-apm.omarpv.repl.co) 

Deployed with [Repl.it](https://repl.it/)


###### tags: `Documentation` `Node` `Express` `Sequelize` `API` `MySQL`