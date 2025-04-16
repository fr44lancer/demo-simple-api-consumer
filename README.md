# Public Registry API consumer Demo App

A  demo app for simulating a public registry platform using  mock data. Features include producing and consuming 
REST APIs for persons, addresses, and  documents

## 🚀 Quick Start
---
⚙️ Requirements

To run this project locally, make sure you have the following installed:

Node.js v18 or higher – https://nodejs.org

npm (comes with Node.js)

---
### 1. Clone & Install
```bash
git clone https://github.com/fr44lancer/demo-simple-api-consumer.git
```
```bash
cd demo-simple-api-consumer
```
```bash
npm install
```

### 2. Environment Setup
Copy example env and configure your MySQL DB:
```bash
cp .env.example .env
```

Update `.env`:
```
NEXT_PUBLIC_CONSUMER_API_BASE= //external API consume (acts as consumer)
NEXT_PUBLIC_X_ROAD_CLIENT_HEADER_VALUE=  //custom header as X-ROAD-CLIENT
```

### 4. Start the Dev Server
```bash
npm run dev -p 3000
```


---

## 📡 API Endpoints

### `/api/v1/persons`
Returns full person list with address + documents. GET

### `/api/v1/get-persons-by-psn?psn=xxxx`
Query people by PSN. GET

### `/api/v1/addresses`
Returns list of all addresses. GET

---

## 🛠 Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
 npx next start -p 3000        # Start for production
```

---

## 📃 License
MIT — use this for demos, education, and internal testing.

---

## 🤝 Contributing
Pull requests welcome. Please open issues for bugs, suggestions, or docs.

