$(document).ready(function() {
  $('#projectsPageButton').on('click', function() {
    $('#pageContent').html(`
      <hr>

      <div class='row'>
        <div class='col'>
          
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
          <p>I received a bachelors degree in Computer Science from the University of Aveiro.</p>
        </div>
      </div>
    `);
  });
});
