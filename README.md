# SOFE 3700U Data Management Systems - Fall 2024
## Project Information

### Objective
Apply the data management principles learned during the course to a real-life application. The group project allows you to gain experience and apply concepts and technologies from class.

---

### Teams
- Each team should consist of **6 students**.

---

### Deliverables
- **Project report per phase** (one for the team)
  - Each report should include a contribution matrix.
- **Project presentation and final report** (one for the team, with contributions from all members)
- **Team evaluation**

---

### Evaluation Criteria
- **Phase I and II** [5%, 15%] based on the report:
  - Clarity of the report, design, and results.
- **Final Report and Presentation** will be based on the following grading criteria:
  - **Presentation and Demo (30%)**
    - The group will demonstrate and defend their work. 
    - Prepare **PowerPoint Slides** for a **5-7 minute presentation** followed by **2 minutes of questions**.
  - **Technical Content (50%)**
    - **Implementation/Coding/Performance Evaluation (30%)**:
      - Evaluate how well the system is implemented, its functionality, creativity, and usability.
    - **Final Report (20%)**:
      - 10-12 pages, **Times 11 Font**, including:
        - Abstract
        - Introduction
        - Relation to other work
        - Main body of work
        - Conclusion and contributions made
        - Schematics, design diagrams, future work, and references.
      - Include snapshots of the results for all queries used.
  - **Other Considerations**:
    - Choice and justification of architecture, technology, and platform.
    - Bugs found and fixed; possible future enhancements.
    - Appropriateness of solution to the stated problem.
    - Interface design and usability.
    - Standard of writing, including grammar and spelling.
    - Organization of reports (clarity, logic, and navigability).
    - Quality of code (comments, modularity).
    - Use of technology or concepts from the course.
    - Creative activity produced.
    - Extent of research, including the history of the problem domain.

---

### Deadlines
- **Group members’ names and project title**: Submit to TA by **Sept. 30, 2024**.
- **Phase I (5%)**: Due **Oct. 13, 2024** (Midnight).
- **Phase II (15%)**: Due **Nov. 03, 2024** (Midnight).
- **Final Report and Presentation**: Due **Nov. 17, 2024**.

---

### Phase I: Project Proposal (5%)
- Choose an application area (e.g., **Bookstore**, **Car Rental Reservation**, **University Database**).
- Submit a **1-2 page proposal** (double-spaced, Times New Roman, Size 11) in PDF via Blackboard.
- **Proposal Content**:
  - Problem the project will address.
  - Goals and motivations.
  - Short survey of related work and how it differs from your proposed work.
  - Methodology and plan for your project.

---

### Phase II: Project Design (15%)
- Begin designing and constructing the database for your application using any database format (e.g., PostgreSQL, MySQL, Oracle).
- **Deliverables**:
  - **Part A: Relational Schema (5 points)**:
    - SQL `CREATE TABLE` commands.
    - A graphical diagram of the relations.
  - **Part B: Sample Data (2 points)**:
    - Populate your database with at least **6 tuples per relation**.
  - **Part C: Views (3 points)**:
    - Create 10 views (first 5 are common for all groups):
      1. Join of at least three tables.
      2. Nested query with `ANY` or `ALL` operator and `GROUP BY`.
      3. Correlated nested query.
      4. Full join.
      5. Set operations (`UNION`, `EXCEPT`, `INTERSECT`).
  - **Part D: E-R Diagram (5 points)**:
    - Create an ER schema diagram for your database.

---

### Phase III: Final Report and Presentation (80%)
- Design and develop an application frontend for your database using Web technologies (PHP, Node.js, Django, etc.).
- **Backend Operations and Functions**:
  - **User Authentication**:
    - Login/Logout with secure session management.
    - Role management (admin, user, guest) with access restrictions.
  - **Data Validation**: Validate user inputs (e.g., email format, required fields).
  - **API Integration**:
    - REST/JSON API for communication between frontend and backend.
    - Integrate external services (e.g., weather, social media) using APIs.
  - **CRUD Operations**: Implement full CRUD operations for your entities (users, orders, products).
  - **Data Export**: Export data to formats like CSV or PDF.
  - **Error Handling**: Handle database failures, API issues, etc.
- **Frontend Operations**:
  - At least **two Web pages** executing queries from Phase II.
  - **Dynamic Forms**: Use JavaScript for form validation and dynamic input.
  - **AJAX Requests**: Interact with the backend without page refreshes.
  - **Data Visualization**: Use Chart.js or D3.js for visualizing database query results.
  - **Search and Filter**: Implement search and filter functionality using MySQL queries.
  
- **README**: Provide detailed instructions on how to install and execute the project (Windows or Linux).
