# Apple App Store Connect JWT Generator

<p align="center">

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) <a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a> ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/iammattburns/apple-appstore-connect-jwt-generator)

</p>
Tool for generating JWT tokens for Apple App Store Connect API.

## Installation

Clone the repository: `git clone https://github.com/username/repo.git`
Install dependencies: `npm install`

## Usage

Generate JWT: `npm start`

## Configuration

The application requires the following environment variables to be set:

- **ISSUER_ID**: The ID of the token issuer.
- **PRIVATE_KEY_ID**: The ID of the private key used to sign tokens.
- **PRIVATE_KEY_PATH**: The path to the private key file.

To set these environment variables, create a **.env** file in the root directory of the project and add the following lines:

```
ISSUER_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY_PATH=
```

Replace the empty values with the appropriate values for your environment.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/branch-name`
3. Make changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/branch-name`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/) .
