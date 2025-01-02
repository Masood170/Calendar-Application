# Calendar-Application
# Getting Started with Create React App

Open the url https://stirring-biscotti-28e536.netlify.app/ to view the application in the browser.


## Features Overview

### Admin Module

The Admin Module is designed for administrators to configure the application and manage foundational data.

#### Company Management
Administrators can:
- Add, edit, and delete companies.
- Define the following details for each company:
  - **Name**: Name of the company.
  - **Location**: Physical or operational location.
  - **LinkedIn Profile**: Link to the company’s LinkedIn page.
  - **Emails**: One or more email addresses for communication.
  - **Phone Numbers**: Contact numbers for representatives.
  - **Comments**: Notes or additional information.
  - **Communication Periodicity**: Default time interval for scheduled communications (e.g., every 2 weeks).

#### Communication Method Management
Admins can define the available communication methods, specifying:
- **Name**: E.g., "Visit" or "LinkedIn Post."
- **Description**: E.g., "Visit to company premises."
- **Sequence**: Determines the order of communication (e.g., LinkedIn Post → LinkedIn Message → Email → Phone Call → Other).
- **Mandatory Flag**: Indicates whether a communication method is mandatory in the sequence.

**Default Communication Methods**:
1. LinkedIn Post
2. LinkedIn Message
3. Email
4. Phone Call
5. Other

### User Module

The User Module is the primary interface for end-users, enabling them to view, manage, and perform communication tasks.

#### Dashboard
A grid-like view where each row represents a company. Columns include:
- **Company Name**: The name of the company.
- **Last Five Communications**: Summary of the five most recent communications, including the type and date.
- **Next Scheduled Communication**: Type and date of the next planned communication.

**Color-Coded Highlights**:
- **Red**: Overdue communication.
- **Yellow**: Communication due today.
- Users can override or disable highlights for specific companies or communications.

#### Interactive Features
- **Hover Effect**: Displays notes or comments for completed communications.
- **Communication Action**:
  - Select a company or multiple companies.
  - Log new communication via a modal form:
    - **Type of Communication**: E.g., LinkedIn Post, Email.
    - **Date of Communication**: When the communication occurred.
    - **Notes**: Additional comments.
  - Submission resets existing highlights for the selected companies.

#### Notifications
- **Overdue Communications Grid**: Lists companies with overdue actions.
- **Today’s Communications Grid**: Lists companies with tasks due today.
- Notification icon displays a badge with the count of overdue and due communications.

#### Calendar View
- **View Past Communications**: Dates and methods of previous interactions.
- **View and Manage Upcoming Communications**: Plan and adjust schedules.

## Optional Features

### Reporting and Analytics Module
Provides actionable insights, including:
- Frequency and effectiveness of communication.
- Trends in overdue or missed communications.

## Installation and Usage

### Prerequisites
- Node.js and npm installed on your system.
- React framework.

### Steps to Run the Application
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Access the application at `http://localhost:3000/` in your browser.

### Building for Production
To create a production build:
```bash
npm run build
```

## Contribution Guidelines
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License.

