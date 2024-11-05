## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/IamAnkitR/ContentNinja.git
```

### 2. Environment Variable Setup

#### Backend (`server`)

Create an `.env` file in the `server` directory with the following content:

```plaintext
PORT=3008
HUBSPOT_ACCESS_TOKEN=<HUBSPOT_ACCESS_TOKEN>
HUBSPOT_API_URL=<HUBSPOT_API_URL>
```

#### Frontend (`client`)

Create an `.env` file in the `client` directory with the following content:

```plaintext
REACT_APP_API_URL=http://localhost:3008
```

### 3. Install Dependencies and Run the Project

#### Backend Setup

```bash
cd server
npm install
npm run dev
```

The server will run at [http://localhost:3008](http://localhost:3008).

#### Frontend Setup

```bash
cd ../client
npm install
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Running the Application

### Start the Backend Server

Run the following in the `server` directory:

```bash
npm run dev
```

### Start the Frontend React App

Run the following in the `client` directory:

```bash
npm start
```

---

## API Endpoints

### Companies

- **GET** `/api/companies/fetchCompanies`: Fetches a list of companies.

### Contacts

- **GET** `/api/contacts/fetchContacts`: Fetches a list of contacts.
- **POST** `/api/contacts/addContact`: Adds a new contact.

### Tickets

- **GET** `/api/tickets/fetchTickets`: Fetches a list of tickets.
