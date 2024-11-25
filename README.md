# QALBEATZ Application

## Prerequisites
> **Note**: This application has only been tested on Windows.

1. **Directory Setup**:  
   - Ensure the folder titled `QALBEATZ` is nested inside another folder with a similar name. 
   - Open your terminal in the `QALBEATZ\QALBEATZ\` directory.

2. **Install Dependencies**:
   - Run the following commands in your terminal to install the required dependencies:
     ```bash
     npm install chart.js
     npm install
     npm install react-bootstrap
     ```

3. **Database Connection**:
   - Set up the database connection in the file located at `QALBEATZ\QALBEATZ\src\server\signup.js`.
   - Update `signup.js` with your database password and the relevant database credentials for your system.

4. **Spotify API Key**:
   - Obtain a Spotify API key and connect it to the application. Note that Spotify API keys require refreshing every few hours due to Spotify's policy.

## Running the Application

1. In the terminal, navigate to the `QALBEATZ\QALBEATZ` directory.
2. Run the following command to start the development server:
   ```bash
   npm run dev
   ```
3. Navigate to `QALBEATZ\QALBEATZ\src\server` and run ```npm run dev``` to start the backend server.
4. Once the server starts, a local link will appear in the terminal. Open this link in your browser.
5. Log in using one of the available accounts to begin using the application.

## Tech Stack and Environment
1. Tech Stack: Node.Js, JavaScript, CSS, HTML, React, SQL
2. Environment: Visual Studio, Sublime Text, Git
