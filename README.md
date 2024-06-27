
# Employee Management Application

This project is a simple Employee Management application built using Angular for the frontend and .NET Core 8 for the backend. It allows users to perform CRUD operations (Create, Read, Update, Delete) on employee records.

## Features

-   **View Employees**: Display a list of employees with their details.
-   **Add Employee**: Add new employees to the system.
-   **Edit Employee**: Modify existing employee information.
-   **Delete Employee**: Remove employees from the system.

## Technologies Used

-   **Frontend**: Angular
-   **Backend**: .NET Core 8
-   **Database**: SQL Server

## Prerequisites

Before running this application, ensure you have the following installed:

-   Node.js and npm (Node Package Manager)
-   Angular CLI
-   .NET Core SDK 8

## Getting Started

### Frontend (Angular)

1.  Clone the repository:

    ```bash
    git clone https://github.com/Hikaru-e/employee-management-system.git
    cd employee-management-system/Employee-Front
    ```
    
2.  Install dependencies:

    `npm install` 
    
3.  Start the Angular development server:
    
    `ng serve` 
    
    Navigate to `http://localhost:4200/` in your browser.
    

### Backend (.NET Core)

1.  Open a new terminal:
    
    `cd ../EmployeeApi` 
    
2.  Build and run the .NET Core application:
    ```bash
    dotnet build 
    dotnet run
    ``` 
    
    The backend server will start running at `https://localhost:7061`. Access it in browser via `https://localhost:7061/swagger`
    

## Configuration

-   **Backend**: Configure the database connection string and other settings in `appsettings.json`

## Usage

-   Open your web browser and navigate to `http://localhost:4200/` to access the Employee Management application.
-   Perform CRUD operations on employees as required.
