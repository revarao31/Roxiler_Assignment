📌 Roxiler Transactions Dashboard
A MERN Stack-based Transactions Dashboard that enables users to view, filter, and analyze monthly transactions with interactive charts and real-time search functionality.

🚀 Key Features:
✅ Filter transactions by month
✅ Search transactions by title, description, or price
✅ View statistics like total sales & item status
✅ Interactive Bar & Pie Charts for data visualization
✅ Fully responsive React.js frontend
✅ Node.js & Express.js backend connected to MongoDB

📂 Project Structure
Roxiler_Assignment/
├── Backend/                # Node.js + Express.js API
│   ├── models/             # Mongoose Models
│   ├── routes/             # API Routes (Transactions, Charts, etc.)
│   ├── config/             # Database Configuration
│   ├── server.js           # Main Backend Server
│   ├── package.json        # Backend Dependencies
├── Frontend/               # React.js Client
│   ├── src/
│   │   ├── components/     # UI Components (Navbar, Charts, etc.)
│   │   ├── pages/          # Main Pages (Dashboard)
│   │   ├── styles/         # CSS for Styling
│   │   ├── App.js          # Main React App File
│   │   ├── index.js        # React Entry Point
│   ├── package.json        # Frontend Dependencies
├── .gitignore              # Ignore unnecessary files
├── README.md               # Project Documentation

🛠 Tech Stack
Technology	Usage
React.js	Frontend UI
Node.js	Backend Server
Express.js	API Handling
MongoDB	Database
Mongoose	MongoDB ORM
Chart.js	Data Visualization
Axios	API Requests

1️⃣ Clone the Repository
git clone https://github.com/revarao31/Roxiler_Assignment.git
cd Roxiler_Assignment

2️⃣ Backend Setup
cd Backend
npm install
Configure MongoDB Connection in .env file (if required).

3️⃣ Frontend Setup
cd ../Frontend
npm install

4️⃣ Start the Backend Server
cd ../Backend
npm start
Backend will run on http://localhost:5000.

5️⃣ Start the Frontend
cd ../Frontend
npm start
Frontend will run on http://localhost:3000.

📊 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/transactions	Fetch all transactions
GET	/api/bar-chart?month=May	Get bar chart data for selected month
GET	/api/pie-chart?month=May	Get pie chart data for selected month

🎯 Future Improvements
 Pagination for Transactions
 User Authentication System
 Export Data as CSV/PDF
 Dark Mode UI
 
📜 License
This project is open-source and available under the MIT License.

🤝 Contributing
Want to contribute?
1️⃣ Fork the repository
2️⃣ Create a new feature branch
3️⃣ Commit your changes
4️⃣ Push to GitHub & open a Pull Request

📩 Contact
🔗 GitHub: revarao31
📧 Email: revarao31@gmail.com
