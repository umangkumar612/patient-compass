

## Healthcare Dashboard

A pixel-perfect responsive healthcare dashboard with three-panel layout displaying patient data, diagnosis history with charts, and patient details.

### Layout Structure

**Left Sidebar - Patients List**
- Fixed vertical sidebar with "Patients" title and search icon
- Scrollable list of patients with profile image, name, gender/age, and 3-dot menu
- Jessica Taylor highlighted with light green background

**Center Content - Main Dashboard**
- **Top Nav Bar**: Tech.Care logo, nav items (Overview, Patients active, Schedule, Message, Transactions), doctor profile with settings icon
- **Diagnosis History Card**: Blood pressure line chart (Chart.js via react-chartjs-2) with systolic (pink) and diastolic (purple) lines, Oct 2023–Mar 2024, "Last 6 months" dropdown
- **3 Health Stat Cards**: Respiratory Rate (20 bpm, blue bg), Temperature (98.6°F, pink bg), Heart Rate (78 bpm, red/pink bg) with icons and status labels
- **Diagnostic List Table**: Scrollable table with Problem, Description, Status columns showing Hypertension, Type 2 Diabetes, Asthma entries

**Right Sidebar - Patient Details**
- Large circular profile image, name, DOB, gender, contact, emergency contact, insurance
- "Show All Information" green rounded button
- **Lab Results section**: Scrollable list of Blood Tests, CT Scans, Radiology Reports, X-Rays, Urine Test with download icons

### Design
- Fonts: Inter/Poppins via Google Fonts
- Primary green ~#00D1B2, pastel card backgrounds, soft shadows, 12-20px rounded corners
- Clean modern UI with consistent 16-24px spacing

### Data
- Fetch patient data from the Coalition Technologies API endpoint
- Filter for Jessica Taylor and dynamically populate all sections

### Responsiveness
- Desktop-first, sidebar collapses on smaller screens, cards stack on mobile

### Tech
- React with TypeScript, Tailwind CSS, react-chartjs-2 for the blood pressure chart
- Lucide React icons for UI elements

