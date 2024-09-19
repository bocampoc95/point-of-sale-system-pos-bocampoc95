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

## Users Github

Sí, puedes trabajar con dos repositorios usando diferentes usuarios en Git. Aquí tienes cómo hacerlo:

1. **Configuración Global y Local**: Puedes configurar un usuario global y luego sobrescribirlo con una configuración local específica para cada repositorio.

   ```sh
   # Configuración global
   git config --global user.name "Usuario Global"
   git config --global user.email "global@example.com"

   # Configuración local para el primer repositorio
   cd /ruta/al/primer/repositorio
   git config --local user.name "Usuario Local 1"
   git config --local user.email "local1@example.com"

   # Configuración local para el segundo repositorio
   cd /ruta/al/segundo/repositorio
   git config --local user.name "Usuario Local 2"
   git config --local user.email "local2@example.com"
   ```

2. **Uso de SSH Config**: Si usas claves SSH para autenticarte, puedes configurar diferentes claves SSH para cada repositorio.

   Primero, genera dos pares de claves SSH:

   ```sh
   ssh-keygen -t rsa -C "local1@example.com" -f ~/.ssh/id_rsa_local1
   ssh-keygen -t rsa -C "local2@example.com" -f ~/.ssh/id_rsa_local2
   ```

   Luego, edita tu archivo `~/.ssh/config` para especificar qué clave usar para cada repositorio:

   ```sh
   Host github-local1
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_rsa_local1

   Host github-local2
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_rsa_local2
   ```

   Finalmente, clona los repositorios usando los alias definidos:

   ```sh
   git clone git@github-local1:usuario1/repo1.git
   git clone git@github-local2:usuario2/repo2.git
   ```
