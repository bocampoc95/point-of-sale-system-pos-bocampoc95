# Create a project with vite

To create a project with Vite, you can start by executing the following commands in your terminal:

```bash
npm create vite@latest my-vanilla-project
cd my-vanilla-project
```

After setting up your project, you can install Tailwind CSS and its peer dependencies with:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

After you have that create and compile files input.css and output.css

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

For designing a Point Of Sale (POS) software product, the process involves several stages, starting with analysis and followed by development.

## Analysis

In the analysis phase, it's crucial to establish a system of relationships that reflects the business logic. This can be achieved using concepts and tools such as UML (Unified Modeling Language), OOP (Object-Oriented Programming), User Experience principles, and design mockups. Tools like Figma can be used for creating design prototypes.

[Figma Desgin POS BOC SW](https://www.figma.com/design/uBcZjWaJpphwXQ3kP3VH13/ADSO_2?node-id=0-1&node-type=canvas&t=rqC9CMPQoImVBScA-0)

## Point-of-Sale-System-POS-

UML design

[Source POS UML Diagrams](https://itsourcecode.com/uml/point-of-sale-pos-system-uml-diagrams/)

### Development

The development phase can be split into two main areas: front-end and back-end development.

#### Front-End Development

This project I used  tools like tailwind CSS.

Develop Desing with Tailwind CSS:

![Design with Tailwind CSS](./public\img\Design-products.png)
![Front design and map navegation](./public\img\image.png)
