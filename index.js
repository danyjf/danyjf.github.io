$(document).ready(function() {
  let currentPage = null;

  $('#projectsPageButton').on('click', function() {
    if(currentPage === 'projects') {
      $('#pageContent').html('');
      currentPage = null;
      return;
    }

    $('#pageContent').load('projects.html');
    currentPage = 'projects';
  });

  $('#careerPageButton').on('click', function() {
    if(currentPage === 'career') {
      $('#pageContent').html('');
      currentPage = null;
      return;
    }

    $('#pageContent').load('career.html');
    currentPage = 'career';
  });

  $('#skillsPageButton').on('click', function() {
    if(currentPage === 'skills') {
      $('#pageContent').html('');
      currentPage = null;
      return;
    }

    $('#pageContent').load('skills.html');
    currentPage = 'skills';
  });
});
