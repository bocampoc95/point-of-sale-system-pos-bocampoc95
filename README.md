<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
</p>

<p align="center">
  <a href="https://react.dev" target="_blank">
    <img src="https://es.react.dev/images/home/conf2019/cover.svg" width="400" alt="React Logo">
  </a>
</p>

---

# Point of Sale (POS) Project

This is a **Point of Sale (POS)** system developed using Laravel as the backend framework and React for the frontend. The application is structured as a monolithic architecture and implements a robust design for managing various entities such as users, customers, products, orders, and payments.

---

## Features

- **Backend**: Powered by Laravel, including database migrations, models, seeders, and factories.
- **Frontend**: Built with React for a modern, responsive user interface.
- **Entity-Relationship Design**: Models and database migrations based on an optimized entity-relationship diagram.
- **Data Seeding**: Pre-configured seeders and factories for generating test data.
- **Database Refresh**: Automated database reset and re-seeding.

---

## Getting Started

Follow the steps below to set up and run the project:

### Prerequisites

Ensure you have the following installed:
- PHP >= 8.0
- Composer
- Node.js & npm
- Laravel CLI
- MySQL or any other supported database

---

## Backend Setup (Laravel)

### 1. Create Models and Migrations

Run the following commands to generate models and migrations for each entity:


php artisan make:model User -m
php artisan make:model Role -m
php artisan make:model Customer -m
php artisan make:model Product -m
php artisan make:model Category -m
php artisan make:model Order -m
php artisan make:model OrderItem -m
php artisan make:model Payment -m


2. Define Attributes and Run Migrations
After defining the attributes for each entity in the migrations, execute the following command to migrate the database:



php artisan migrate

3. Create Seeders
Generate seeders for populating the database with sample dat

php artisan make:seeder UserSeeder
php artisan make:seeder CustomerSeeder
php artisan make:seeder CategorySeeder
php artisan make:seeder ProductSeeder
php artisan make:seeder OrderSeeder
php artisan make:seeder OrderItemSeeder
php artisan make:seeder PaymentSeeder

4. Create Factories
Generate factories for creating fake data for testing purposes:


php artisan make:factory UserFactory 
php artisan make:factory CustomerFactory 
php artisan make:factory CategoryFactory 
php artisan make:factory ProductFactory 
php artisan make:factory OrderFactory 
php artisan make:factory OrderItemFactory 
php artisan make:factory PaymentFactory 

5. Populate the Database
To populate the database with test data, run the following command (this will refresh the database, so ensure no unwanted data exists):

bash

php artisan migrate:refresh --seed

Frontend Setup (React)
Navigate to the frontend directory (or wherever your React app is located).
Install dependencies:
bash
npm Install

Start the development server:
bash
Copiar código
npm start

Open your browser at http://localhost:3000 to access the frontend.

php artisan serve 

Open your browser at http://localhost:8000 to access the backend.

Development Notes
Refreshing the Database: The migrate:refresh command will delete and recreate the database schema. Use this carefully, especially in production environments.
Testing: Ensure seeders and factories are properly configured before running the seeding process.
Dependencies: Keep Laravel and React dependencies updated to avoid compatibility issues.
License
This project is licensed under the MIT License. The Laravel framework and React library are open-source technologies and are also licensed under MI
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

Contact
For further inquiries or support, feel free to reach out via email@example.com.

