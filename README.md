**BruinBytes**

BruinBytes, is a web application designed to improve the dining experience for students and visitors at UCLA. BruinBytes serves as a comprehensive platform for users to search, review, and rate dining options at UCLA restaurants. Leveraging React and Firebase, the application displays dynamic restaurant information and ratings, allowing users to make informed choices and engage with the UCLA foodie community. With a user-friendly interface and a commitment to fostering a sense of culinary community, BruinBytes addresses the current lack of centralized dining reviews for UCLA's diverse dining establishments.

**Architecture and Technology**

In our development process, we harnessed React and several packages to create an engaging frontend. React formed the core of our web application, delivering a responsive interface. To improve user interaction and aesthetics, we integrated Toastify for notifications, Bootstrap for sleek UI design, and FontAwesome for seamless icon integration. On the backend, Firebase served as our reliable, scalable database, securely storing user-generated content, managing login credentials, and streamlining authentication. Firebase's real-time capabilities ensured timely updates and sustained a dynamic user environment.

**Features**
1. Display dynamic data to the user.
2. Upload data from the client to the back-end
3. Search through server-side data
4. Authentication
5. Spin the Wheel: The site will randomly choose a restaurant for you to review
6. Add Review: Users can add reviews and see previous reviews
7. Star Rating: Rate the restaurants from 1 to 5 as star rating

**Getting Started**

Before you begin, ensure you have met the following requirements:
- Node.js installed on your system.
- npm or yarn package manager installed.

Note: For security reasons, the **.env** file is not included in this repository. Contact Joseph Hu for the necessary information and setup instructions.

**Installing**

To set up BruinBytes, follow these steps:

1. Clone the repository:
   git clone https://github.com/SHA256wdi/BruinBytes.git
   cd BruinBytes
2. Install the required packages using npm or yarn:
   npm install
     or
   yarn install

3. Install additional dependencies:
   npm i (if doesnt work, use force)\
   npm install firebase\
   npm install react-toastify\
   npm install bootstrap\
   npm install firebase-functions

**Executing Program**

To run BruinBytes, follow these steps:

1. npm run start in one terminal(frontend)

2. npm run serve in another terminal (backend)

**Help**

If you encounter any common problems or issues, please consult the documentation or seek help from the project's contributors.

**Authors**

- Shawdi Sani (https://github.com/SHA256wdi)
- Gabriel Castro (https://github.com/saladpalad)
- Joseph Hu (https://github.com/josephhu1)
- Melis Fidansoy (https://github.com/ananymel) (Please check my local branches as well(melis-v2, melis_branch and melis_branch2) also I detailly explained my workflow in report, please refer to that. But I was only able to merge my branch of melis_style into the main branch.)

**License**

This project is licensed under the [MIT License](LICENSE.md).

**Acknowledgments**
Inspiration, code snippets, etc.
- https://www.youtube.com/watch?v=Y-XW9m8qOis&list=PLZVMvYS1wsNDUIx7cs6pCcjpMHdyfpphx&index=3&ab_channel=Tech2etc
- https://github.com/judygab/web-dev-projects/tree/main/login-register-form
- https://www.youtube.com/watch?v=J01rYl9T3BU

