<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://studyboat.netlify.app">
    <img src="https://github.com/Rohit-K814307/StudyBoat/blob/master/assets/home.png" alt="Logo">
  </a>

  <h3 align="center">StudyBoat - Your personal AI-Powered Study Assistant</h3>

  <p align="center">
    StudyBoat is designed for users!
    <br />
    <a href="https://github.com/Rohit-K814307/StudyBoat"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://studyboat.netlify.app">View Demo</a>
    ·
    <a href="https://youtu.be/_LadkF_pGNA">Video Presentation</a>
    ·
    <a href="https://github.com/Rohit-K814307/StudyBoat/issues">Report Bug</a>
    ·
    <a href="https://github.com/Rohit-K814307/StudyBoat/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="frontend/app/src/assets/Logofull.png" alt="Logo">

StudyBoat is a personal study tool designed to help you with your educational needs.

Main Features:

* Essay Feedback Tool

    Our essay feedback tool leverages the OpenAI GPT API to query the model and recieve immediate feedback on your essay. Then, StudyBoat
    displays the results intuitively on the application for users to read. The application also queries the GPT API to rewrite the portions
    of the essay with mistakes to improve them, serving them back to the user.

* Flashcard Study Tool

    Our flashcard study tool also leverages the OpenAI GPT API to query the model and serve flashcards on any topic. StudyBoat dynamically
    renders flashcards from the queried GPT API and allows the user to flip the flashcards for answers, view more flashcards, and view the 
    previous flashcard.

* Notes Summarizer
    
    StudyBoat utilizes a custom TF-ID4 model to summarize notes based on input text. It finds the words of highest value in the text, and
    strings them together to build a summary.


 ### Application Architecture

<img src="https://github.com/Rohit-K814307/StudyBoat/blob/master/assets/studyboat_architecture.png" alt="architecture">


 ### Accomplishments

* Deployed to production (Access at https://studyboat.netlify.app)
* High scalability due to GPT API
* Powerful and light notes generating AI/Machine Learning Model


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* <img src="https://blog.paperspace.com/content/images/2019/11/flasklogo.jpg" alt="flask" width="80" height="25" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Get started with Study Boat

### Prerequisites

First install node.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://openai.com/blog/openai-api](https://openai.com/blog/openai-api)
2. Clone the repo
   ```sh
   git clone https://github.com/Rohit-K814307/StudyBoat.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Install python requirements
    ```sh
    pip install -r requirements.txt
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

* Follow the text inputs on the web page and get results immediately
* Project demo available at [https://studyboat.netlify.app](https://studyboat.netlify.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Build Flask API
- [x] Build Frontend-basic
- [x] Deploy API to Render
- [x] Deploy Frontend-basic to Github Pages
- [ ] Further enhancements
    - [ ] UI
    - [ ] Better Model

See the [open issues](https://github.com/Rohit-K814307/StudyBoat/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* Rohit Kulkarni - [LinkedIn](https://www.linkedin.com/in/rohit-kulkarni-305a86202/) - kulkarni.rohitva@gmail.com
* Shlesh Sakpal - [LinkedIn](https://www.linkedin.com/in/shlesh/) - shleshsakpal@gmail.com

* Project Link: [https://github.com/Rohit-K814307/StudyBoat](https://github.com/Rohit-K814307/StudyBoat)
* Project Demo: [https://studyboat.netlify.app/](https://studyboat.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Flask-url]: https://blog.paperspace.com/content/images/2019/11/flasklogo.jpg
