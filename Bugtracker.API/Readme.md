## Readme

### Bug tracker project :
 
Hello dear reader, first and foremost, I want to thank you for the time you considered to learn about this project.
 
This project was born out of my quarantine boredom :) and I really enjoyed every bit of it. So, I basically wanted to create something that show off some of my .NET skills while disovering indepth new stuff like ReactJS.

I chose a bug tracker app for two reasons : every IT project uses a lookalike tool to manage their defects solving workflow and from a technical standpoint, it has many features that are common in almost every web development project (authentication , data management).

The solution was built using NetCore WebAPI and ReactJS and it was structured in three layers following some SOLID and DDD principles : 
- **Bugtracker.API** which is the main project and it contains the SPA app (ReactJS components, routes, redux store, etc.) and the api controllers as well as the launcher and config files.
- **Bugtracker.Core** is the most important part of the solution. All core functionalities, operations and tools are referenced in this project as services, interfaces, exceptions, error handling etc.
- **Bugtracker.Infrastructure** is the database related layer and it's role is to make entity framework operations. It contains the migrations and the concrete implementation of the repository interface along with the database context.

`Important  : 
 Some of the features may not look very advanced and that's because
 I wanted to keep the project as simple as I can. I should note that
  the purpose of this project is to demonstrate the skills around 
  building an app from scratch using modern frameworks and clean architecture.
`
### Features : 
The features I wanted to put on the spot : 
- Secure api using JWT authentication (I could use some third party service like Auth0 but it doesn't spark me joy :p)
- CRUD operations with a generic repository pattern 
- Database model creating with fluent api

### Stack :
- HTML5/CSS3  
- ReactJS v16 + Redux
- .NET Core 3.1 (REST API, EF Core, Serilog, SwaggerUI doc)
- Microsoft Server Express (as docker instance)
