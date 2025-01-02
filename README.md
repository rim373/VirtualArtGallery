# Giggle & Gallery

A cultural center website that connects communities through art and culture, offering galleries, events, and workshops while fostering collaboration with clubs and associations.

## General Idea
Giggle & Gallery is a platform designed for cultural centers to:
- Showcase art galleries and cultural events.
- Host cultural workshops.
- Collaborate with clubs and associations.

## Objectives
1. Increase public exposure for cultural centers.
2. Facilitate community access to artistic resources and exhibitions.
3. Create an environment for creativity and collaboration, particularly targeting youth.

## Technologies Used
**Frontend**: Angular 18  
**Backend**: FastAPI  
**Database**: PostgreSQL  
**Languages**: HTML, CSS, TypeScript (Frontend); Python (Backend)

## Installation Instructions
### Backend
1. Install FastAPI and Uvicorn.
2. Run the backend using:
   ```bash
   uvicorn main:app --reload
### Frontend
1. Install Angular 18.
2. Serve the frontend with:
   ```bash
   ng serve
   
### Key Features
- Explore Events: View past and current cultural events.
- View Galleries: Discover art galleries from the past and present.
- Event Participation: Register to attend galleries and events.
- Request Event Organization: Submit requests to host events.
- Partner with Us: Collaborate with the cultural center.
#### Admin Features:
- Add, update, or delete events and galleries.
- Admin access is controlled via the IsAdmin Boolean variable.

### Architecture: 
The project focuses on:

- Community Connection: Bringing people together through art and culture.
- Inspiration: Creating transformative spaces and experiences.
- Collaboration: Providing a canvas for partnerships and creativity.

### Database
Giggle & Gallery uses PostgreSQL to manage:

- User Data: Profiles, roles (e.g., admin).
- Event Data: Details about past, current, and upcoming events.
- Gallery Data: Information about art galleries.
- Partnership Data: Collaboration details with clubs and associations.

