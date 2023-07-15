# Gradientify

![Preview](preview.gif)
<br>
<br>
Convert your images to CSS gradients 🔥

Gradientify is a web application that converts images into CSS gradients. It can be used to create visually appealing placeholder skeleton loaders for websites, enhancing interactivity and user-friendliness during content loading.

👉 View it now [Live](https://gradientify.dulaj.dev/) and [for Frontend Repo](https://github.com/dulajkavinda/gradientify-fe)

Made by [Dulaj Kavinda](https://www.dulaj.dev/)

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Deploy](#deploy)
- [Contributing](#contributing)
- [License](#license)


## Features
- Upload and convert images into CSS gradients.
- Generate CSS code representing the gradients.
- Customize the gradient direction, speed, and other parameters.
- Preview the generated CSS gradients before implementation.

## Prerequisites

Before getting started with Gradientify, make sure you have the following prerequisites:

- Gradientify [frontend](https://github.com/dulajkavinda/gradientify-fe) running.
```bash
git clone https://github.com/dulajkavinda/gradientify.git
yarn installl
yarn run dev
```
- Node.js (version 16.0.0 or higher)

## Installation

To run Gradientify backed locally, follow these steps:

1. Clone the repository to your local machine.
```bash
git clone https://github.com/dulajkavinda/gradientify.git
```
2. Install the necessary dependencies.
```bash
yarn install
```
3. Create a `.env` file in the root and configure
```
PORT=5000
GRADIENTIFY_AWS_BUCKET_NAME="gradientify"
GRADIENTIFY_AWS_BUCKET_REGION="ap-southeast-1"
GRADIENTIFY_AWS_ACCESS_KEY=""
GRADIENTIFY_AWS_SECRET_KEY=""
```
4. Start the local development server.
```bash
yarn run start:dev
```

## Deploy

To deploy the serverless backend of Gradientify, follow these steps:

1. Configure the necessary credentials for your cloud provider (e.g., AWS).
2. Update the serverless configuration file (serverless.yml) with your specific configuration details.
3. Deploy the serverless backend to your cloud provider using the serverless CLI.
```bash
yarn run deploy
```
> Note the API endpoint URL provided by the serverless deployment.

## Contributing
Contributions are welcome! If you have any ideas, bug reports, or feature requests, please submit them through the GitHub issue tracker. If you would like to contribute code, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License
This project is licensed under the MIT License. You can find more information in the [LICENSE](https://github.com/dulajkavinda/gradientify/blob/master/LICENSE) file.

#
If you need to reach out to me [contact me](mailto:hi@dulaj.dev).

