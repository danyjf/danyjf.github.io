$(document).ready(function() {
  $('#projectsPageButton').on('click', function() {
    $('#pageContent').html(`
    <hr>

      <div class="row" style="margin-bottom: 75px; margin-top: 50px;">
        <div class="col order-last order-md-first">
          <img class="projectImage" src="./assets/images/torus-forest.png" alt="torus forest">
        </div>
        <div class="col order-first order-md-last">
          <h1 style="text-align: center;">Torus Forest</h1>

          <a class="projectLink" href="https://github.com/danyjf/icg-2022/tree/master/projeto-2/torus-forest" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a class="projectLink" href="https://torus-forest-2.herokuapp.com/" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-file fa-3x" aria-hidden="true"></i>
          </a>

          <p>Torus Forest was a project developed for the class of Introduction to Computer Graphics, obtaining a grade of 95%.</p>
          <p>Torus Forest is a simulation where plants grow when under the spotlight and die when under unlighted areas.</p>
          <p>
            This project was developed using three.js, making use of different illumination types, loading 3D models, applying 
            textures and normal maps and by creating animations.
          </p>
        </div>
      </div>

      <div class="row" style="margin-bottom: 75px;">
        <div class="col">
          <h1 style="text-align: center;">Avoid</h1>

          <a class="projectLink" href="https://github.com/danyjf/avoid-game" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>

          <p>Avoid was the first complete game I made without following a tutorial.</p>
          <p>Avoid is a mobile game where you control a spaceship and try to collect resources while shooting enemy spaceships and dodging bullets</p>
          <p>
            This project was developed using Unity. During the development of this game I learned how to use joystick controls in a touch screen, 
            how to save and load data from the game on the device and how to create a basic user interface displaying things like the amount of
            resources and the health of the spaceship. 
          </p>
        </div>
        <div class="col">
          <img class="projectImage" src="./assets/images/avoid.jpg" alt="avoid">
        </div>
      </div>

      <div class="row" style="margin-bottom: 75px;">
        <div class="col order-last order-md-first">
          <img class="projectImage" src="./assets/images/break-the-game.jpg" alt="break the game">
        </div>
        <div class="col order-first order-md-last">
          <h1 style="text-align: center;">Break the Game</h1>

          <a class="projectLink" href="https://github.com/danyjf/break-the-game-game" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>
          <a class="projectLink" href="https://danyjf.itch.io/break-the-game" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-file fa-3x" aria-hidden="true"></i>
          </a>

          <p>
            Break the Game was a game developed for the game jam titled "Mini Jam 87: Break", the theme of this game jam was "break" and the limitation
            was "The player is a pacifist".
          </p>
          <p>
            Break the Game is a 2D puzzle game developed with Unity, where the player has to find a "bug" in the level in order to reach the 
            goal without killing the enemy.
          </p>
        </div>
      </div>

      <div class="row" style="margin-bottom: 75px;">
        <div class="col">
          <h1 style="text-align: center;">Antroid</h1>

          <a class="projectLink" href="https://github.com/danyjf/antroid-game" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>

          <p>Antroid was a project developed by following tutorials on Unity.</p>
          <p>
            Antroid is a game where you control an ant and have the goal to find mushrooms while avoiding enemies, the game has a time limit and 
            when a mushroom is found the timer increases.
          </p>
          <p>
            This project was developed using Unity. During the development of this project I learned how to use Unity's terrain system, the NavMesh Pathfinder,
            how to use animations and how to program basic movement for a 3D character.
          </p>
        </div>
        <div class="col">
          <img class="projectImage" src="./assets/images/antroid.jpg" alt="antroid">
        </div>
      </div>

      <div class="row" style="margin-bottom: 75px;">
        <div class="col order-last order-md-first">
          <img class="projectImage" src="./assets/images/pathfinding-algorithm-visualizer.jpg" alt="torus forest">
        </div>
        <div class="col order-first order-md-last">
          <h1 style="text-align: center;">Pathfind Algorithm Visualizer</h1>

          <a class="projectLink" href="https://github.com/danyjf/pathfind-algorithm-visualizer" target="_blank">
            <i style="margin: 10px 10px 25px 10px;" class="fa fa-github fa-3x" aria-hidden="true"></i>
          </a>

          <p>
            Pathfind Algorightm Visualizer is a program developed in java that allows the user to visualize different algorithms like the Dijkstra Algorithm
            and the A* algorithm.
          </p>
          <p>
            The program allows a user to select a start and an end square (colored green and red respectively) on the grid, it allows also to draw 
            walls (colored black), to define the size of the grid, to set the speed of the algorithm and to select whether to use the Dijkstra or
            the A* algorithm.
          </p>
        </div>
      </div>
    `);
  });

  $('#careerPageButton').on('click', function() {
    $('#pageContent').html(`
      <hr>

      <div class='row'>
        <div class='col'>
          <h1>University of Aveiro</h1>
          <h1>2019 - 2022</h1>
          <p>I received my degree in Computer Science from the University of Aveiro.</p>
        </div>
      </div>
    `);
  });

  $('#skillsPageButton').on('click', function() {
    $('#pageContent').html(`
    <hr>

    <div class='row'>
      <div class='col'>
        <div style="margin-top: 50px; margin-bottom: 50px;">
          <h3>Programming Languages</h3>
          <div class="skillBar python">
            <span class="skill">Python</span>
            <div class="skillPercentage">80</div>
          </div>
          <div class="skillBar java">
            <span class="skill">Java</span>
            <div class="skillPercentage">80</div>
          </div>
          <div class="skillBar csharp">
            <span class="skill">C#</span>
            <div class="skillPercentage">75</div>
          </div>
          <div class="skillBar javascript">
            <span class="skill">Javascript</span>
            <div class="skillPercentage">75</div>
          </div>
          <div class="skillBar c++">
            <span class="skill">C++</span>
            <div class="skillPercentage">70</div>
          </div>
          <div class="skillBar c">
            <span class="skill">C</span>
            <div class="skillPercentage">65</div>
          </div>
          <div class="skillBar html">
            <span class="skill">HTML</span>
            <div class="skillPercentage">65</div>
          </div>
          <div class="skillBar css">
            <span class="skill">CSS</span>
            <div class="skillPercentage">65</div>
          </div>
          <div class="skillBar matlab">
            <span class="skill">Matlab</span>
            <div class="skillPercentage">55</div>
          </div>
        </div>

        <hr>

        <div style="margin-top: 50px; margin-bottom: 50px;">
          <h3>Tools</h3>
          <div class="skillBar git">
            <span class="skill">Git</span>
            <div class="skillPercentage">85</div>
          </div>
          <div class="skillBar visualStudio">
            <span class="skill">Visual Studio</span>
            <div class="skillPercentage">80</div>
          </div>
          <div class="skillBar intellij">
            <span class="skill">IntelliJ</span>
            <div class="skillPercentage">80</div>
          </div>
          <div class="skillBar docker">
            <span class="skill">Docker</span>
            <div class="skillPercentage">75</div>
          </div>
          <div class="skillBar eclipse">
            <span class="skill">Eclipse</span>
            <div class="skillPercentage">70</div>
          </div>
          <div class="skillBar blender">
            <span class="skill">Blender</span>
            <div class="skillPercentage">40</div>
          </div>
        </div>

        <hr>

        <div style="margin-top: 50px; margin-bottom: 50px;">
          <h3>Frameworks & Engines</h3>
          <div class="skillBar unity">
            <span class="skill">Unity</span>
            <div class="skillPercentage">75</div>
          </div>
          <div class="skillBar springBoot">
            <span class="skill">Spring Boot</span>
            <div class="skillPercentage">75</div>
          </div>
          <div class="skillBar django">
            <span class="skill">Django</span>
            <div class="skillPercentage">70</div>
          </div>
          <div class="skillBar angular">
            <span class="skill">Angular</span>
            <div class="skillPercentage">65</div>
          </div>
          <div class="skillBar unrealEngine">
            <span class="skill">Unreal Engine</span>
            <div class="skillPercentage">50</div>
          </div>
          <div class="skillBar godot">
            <span class="skill">Godot</span>
            <div class="skillPercentage">45</div>
          </div>
        </div>

        <hr>

        <div style="margin-top: 50px; margin-bottom: 50px;">
          <h3>Spoken Languages</h3>
          <div class="skillBar portuguese">
            <span class="skill">Portuguese</span>
            <div class="skillPercentage">95</div>
          </div>
          <div class="skillBar english">
            <span class="skill">English</span>
            <div class="skillPercentage">85</div>
          </div>
        </div>
      </div>
    </div>
    `);
  });
});
